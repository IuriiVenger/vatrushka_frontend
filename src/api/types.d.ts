import { GetAllPromotionsQuery, ProductBySlugQuery } from '@/__generated__/graphql';

export namespace API {
  export namespace QraphQL {
    export namespace Query {
      export type Collection<T> = {
        edges: {
          node: T;
        }[];
        pageInfo?: {
          hasNextPage?: boolean;
          hasPreviousPage?: boolean;
          startCursor?: string;
          endCursor?: string;
        };
      };
      export type Response<T> = {
        data: T;
      };
    }

    export type RequestArgs<Filter, Order> = {
      after?: InputMaybe<Scalars['Cursor']['input']>;
      before?: InputMaybe<Scalars['Cursor']['input']>;
      filter?: InputMaybe<Filter>;
      first?: InputMaybe<Scalars['Int']['input']>;
      last?: InputMaybe<Scalars['Int']['input']>;
      offset?: InputMaybe<Scalars['Int']['input']>;
      orderBy?: Order;
    };

    export type PageInfo = {
      hasNextPage?: boolean;
      hasPreviousPage?: boolean;
      startCursor?: string;
      endCursor?: string;
    };
  }

  export namespace Auth {
    export type Me = User;

    export namespace Telegram {
      export interface Signin {
        tg_id: number;
        hash: string;
        init_data_raw: string;
      }
      export interface Signup {
        phone: string;
        tg_id: number;
        first_name: string;
        last_name?: string;
        hash: string;
        init_data_raw: string;
      }
    }

    export interface Tokens {
      access_token: string;
      refresh_token: string;
    }
    export interface UserData {
      id: number;
      created_at: string;
      user_id: string;
      kyc_status: KYCStatuses;
      kyc_date: string;
      turnover_limit?: number;
      default_fiat: string;
      total_turnover: {
        onramp: number;
        offramp: number;
        total: number;
      };
    }
    export interface SupabaseGetSessionResponse {
      session?: Tokens;
      user?: User;
      error?: string;
    }

    export namespace VerifyOtp {
      export type Response = { access_token: string; refresh_token: string; user: User; error?: string };
    }
  }

  export namespace Cart {
    export interface CartList {
      id: string;
      user_id: number;
      status: string;
      created_at: string;
      updated_at: string;
    }
    export interface Cart extends CartListItem {
      id: string;
      user_id: number;
      status: string;
      created_at: string;
      updated_at: string;
      items: API.Cart.CartItem.CartItem[];
      total_sum: number;
    }

    export namespace CartItem {
      export interface CartListItem {
        id: string;
        cart_id: string;
        product_id: string;
        size_id: string;
        item_total: number;
        modifiers: Array<{
          id: string;
          quantity: number;
          price: number;
          modifier_total_price: number;
        }>;
      }

      export interface CartItem extends CartListItem {
        size: {
          id: string;
          sku: string;
          price: number;
          size_id: string;
          size_code: string;
          size_name: string;
          is_default: boolean;
          nutritions: Array<{
            fats: number;
            salt: number | null;
            carbs: number;
            sugar: number | null;
            energy: number;
            proteins: number;
            organizations: string[];
            saturatedFattyAcid: number | null;
          }>;
          product_id: string;
          button_image_url: string;
          portion_weight_grams: number;
          nutrition_per_hundred_grams: {
            fats: number;
            salt: number | null;
            carbs: number;
            sugar: number | null;
            energy: number;
            proteins: number;
            organizations: string[];
            saturatedFattyAcid: number | null;
          };
        };
        product: {
          id: string;
          sku: string | null;
          name: string;
          slug: string;
          isPopular: boolean | null;
          description: string;
          ingredients: string | null;
          optional_text: string | null;
          tax_category_id: string | null;
          productCategoryId: string;
          short_description: string | null;
          modifier_schema_id: string | null;
        };
        item_total: number;
        modifiers: Array<{
          id: string;
          quantity: number;
          external_modifier_group_id: string;
          name: string;
          description: string;
          sku: string;
          portion_weight_grams: number;
          nutrition_per_hundred_grams: {
            fats: number;
            salt: number | null;
            carbs: number;
            sugar: number | null;
            energy: number;
            proteins: number;
            organizations: string[];
            saturatedFattyAcid: number | null;
          };
          button_image: string | null;
          price: number;
          product_id: string | null;
          external_modifier_id: string;
          group_id: string;
          min_quantity: number;
          max_quantity: number;
          free_quantity: number;
          by_default: number;
          is_hidden: boolean;
          modifier_total_price: number;
        }>;
      }

      export namespace Create {
        export interface RequestItem {
          product_id: number | string;
          size_id: number | string;
          modifiers: {
            id: number | string;
            quantity: number;
          }[];
        }
        export type Request = {
          cart_id: string;
          data: API.Cart.CartItem.Create.RequestItem[];
        };
      }

      export namespace Delete {
        export type Request = {
          cart_id: string;
          data: Record<'cart_item_id', string>[];
        };
      }
    }
  }
  export namespace Categories {
    export namespace GetProductsByCategorySlug {
      export type Request = {
        slug: string;
        offset: number;
        first: number;
      };
    }
  }

  export namespace Products {
    export type Label = NonNullable<
      NonNullable<ProductBySlugQuery['productsCollection']>['edges'][0]['node']['productlabelsCollection']
    >['edges'][0]['node'];

    export type Tag = NonNullable<
      NonNullable<ProductBySlugQuery['productsCollection']>['edges'][0]['node']['productTagsCollection']
    >['edges'][0]['node'];

    export type Promotion = NonNullable<
      NonNullable<ProductBySlugQuery['productsCollection']>['edges'][0]['node']['productpromotionsCollection']
    >['edges'][0]['node']['promotions'];

    export type OptionalText = {
      title: string;
      text: string;
    };

    export type Recomedation = {
      button_image_url: string;
      price: number | null;
      size_id: string;
      product_id: string;
      multiple_sizes: boolean;
      name: string;
      nodeId: string;
      short_description: string | null;
      slug: string;
      category: {
        name: string;
        slug: string;
      };
    };
  }

  export namespace Promotions {
    export type Promotion = NonNullable<GetAllPromotionsQuery['promotionsCollection']>['edges'][0]['node'];
  }
}
