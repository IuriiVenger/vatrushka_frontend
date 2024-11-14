import { useMessage } from './useMessage';

import { API } from '@/api/types';

import { useAppDispatch, useAppSelector } from '@/store';
import { addCartItem, deleteCart, deleteCartItem, initCartThunk, selectCart } from '@/store/slices/cart';
import { TCard } from '@/types';
import { getGroupedCartItems } from '@/utils/converters';

const useCart = () => {
  const { activeCart, isCartInitialized } = useAppSelector(selectCart);
  const dispatch = useAppDispatch();
  const { showMessage } = useMessage();
  const groupedCartItems = getGroupedCartItems(activeCart.data?.items ?? []);

  const addToCart = async (data: API.Cart.CartItem.Create.RequestItem[]) => {
    await dispatch(addCartItem({ data }));
    showMessage({ text: 'Товар добавлен в корзину', type: 'success' });
  };

  const removeGroupedCartItem = async (groupId: string) => {
    const deletingItems = groupedCartItems.find((item) => item.group_id === groupId)?.rawCartItems;
    if (!deletingItems) {
      showMessage({ text: 'Не удалось найти продукт в корзине', type: 'error' });
      return;
    }
    const data = deletingItems.map((item) => ({ cart_item_id: item.id }));
    await dispatch(deleteCartItem({ data }));
    showMessage({ text: `${deletingItems[0].product.name} удален из корзины`, type: 'success' });
  };

  const deleteCartItems = async () => {
    const deletingItems = groupedCartItems.map((item) => item.rawCartItems).flat();
    // todo добавить confirmationModal
    const data = deletingItems.map((item) => ({ cart_item_id: item.id }));
    await dispatch(deleteCartItem({ data }));
    showMessage({ text: 'Корзина очищена', type: 'success' });
  };

  const onGroupedCartItemQuantityChange = async (count: number, group_id: string) => {
    const findingItems = groupedCartItems.find((item) => item.group_id === group_id)?.rawCartItems;
    if (!findingItems) return;
    const countDelta = count - findingItems.length;

    if (countDelta < 0) {
      const deletingItems = findingItems.slice(countDelta).map((item) => ({ cart_item_id: item.id }));
      await dispatch(deleteCartItem({ data: deletingItems }));
    } else {
      const addingItems = new Array(countDelta).fill(null).map((_, index) => ({
        cart_id: activeCart.data?.id,
        product_id: findingItems[index].product_id,
        size_id: findingItems[index].size_id,
        modifiers: findingItems[index].modifiers,
      }));
      await addToCart(addingItems);
    }
  };

  const initCart = async () => dispatch(initCartThunk());

  const mergeCartItems = async (oldCart: API.Cart.Cart) => {
    const oldCartItems = oldCart.items;
    await dispatch(deleteCart(oldCart.id));
    if (oldCartItems.length === 0) return;
    const addingItems = oldCartItems.map((item) => ({
      cart_id: activeCart.data?.id,
      product_id: item.product_id,
      size_id: item.size_id,
      modifiers: item.modifiers,
    }));
    await dispatch(addCartItem({ data: addingItems }));
    showMessage({ text: 'Корзина обновлена, данные со старой корзины перенесены в новую', type: 'success' });
  };

  const cartCardsData: TCard[] =
    groupedCartItems.map((item) => ({
      id: item.group_id,
      pic: item.size.button_image_url,
      name: item.product.name,
      price: item.total_price,
      quantity: item.quantity,
      inStock: true,
      buttonType: 'button',
      href: '',
      description: item.modifiers.map((modifier) => modifier.name).join(', '),
      weight: item.size.portion_weight_grams,
      sizeId: item.size.id,
      productId: item.product.id,
    })) ?? [];

  return {
    addToCart,
    groupedCartItems,
    removeGroupedCartItem,
    activeCart,
    cartCardsData,
    deleteCartItems,
    onGroupedCartItemQuantityChange,
    isCartInitialized,
    initCart,
    mergeCartItems,
  };
};

export default useCart;
