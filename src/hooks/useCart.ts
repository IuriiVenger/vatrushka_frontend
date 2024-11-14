import { useMessage } from './useMessage';

import { useAppDispatch, useAppSelector } from '@/store';
import { addCartItem, deleteCartItem, selectCart, selectGroupedCartItems } from '@/store/slices/cart';
import { TCard } from '@/types';

const useCart = () => {
  const groupedCartItems = useAppSelector(selectGroupedCartItems);
  const { activeCart } = useAppSelector(selectCart);
  const dispatch = useAppDispatch();
  const { showMessage } = useMessage();

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
      await dispatch(addCartItem({ data: addingItems }));
    }
  };

  const cartCardsData: TCard[] =
    groupedCartItems.map((item) => ({
      id: item.group_id,
      pic: item.size.button_image_url,
      name: item.product.name,
      price: item.total_price,
      quantity: item.quantity,
      inStock: true,
      href: '',
      description: item.modifiers.map((modifier) => modifier.name).join(', '),
      weight: item.size.portion_weight_grams,
    })) ?? [];

  return {
    groupedCartItems,
    removeGroupedCartItem,
    activeCart,
    cartCardsData,
    deleteCartItems,
    onGroupedCartItemQuantityChange,
  };
};

export default useCart;
