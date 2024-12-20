import { GetAllPromotionsQuery, InputMaybe, ProductBySlugQuery, Scalars } from '@/__generated__/graphql';
import { DayOfWeek, OrderPaymentStatus, OrderStatus, OrderType, SortingDirection } from '@/constants';
import { SupabaseUser } from '@/types';

export namespace API {
  export namespace Common {
    export namespace Pagination {
      export namespace REST {
        export type RequestArgs = {
          limit?: number;
          offset?: number;
        };
      }
    }
  }
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

  export namespace Address {
    export type Address = {
      user_id: string | null;
      street_name: string | null;
      house: string | null;
      building: string | null;
      flat: string | null;
      doorphone?: string | null;
      city: string | null;
      country: string | null;
      zip_code: string | null;
      latitude: string | null;
      longitude: string | null;
      id: string;
      street_classifier_id: string | null;
      entrance: string | null;
      floor: string | null;
    };

    export type Schedule = {
      [key in DayOfWeek]: {
        start: string;
        end: string;
        is_working: boolean;
      };
    };

    export type TerminalAddress = {
      id: string;
      city: string;
      flat: string | null;
      floor: string | null;
      house: string;
      comment: string | null;
      country: string | null;
      building: string | null;
      entrance: string | null;
      phone: string | null;
      latitude: string;
      zip_code: string | null;
      doorphone: string | null;
      longitude: string;
      is_deleted: boolean;
      street_name: string;
      working_hours: {
        schedule: Schedule;
      };
      address_string: string | null;
      terminal_group_id: string;
      street_classifier_id: string;
    };

    export type OrganizationAddresses = {
      id: string;
      organization_id: string;
      iiko_id: string | null;
      terminal_addresses: TerminalAddress[];
    };

    export namespace Create {
      export type Request = Omit<Address, 'id' | 'user_id'>;
    }
    export namespace Update {
      export type Request = Omit<Address, 'id' | 'user_id'>;
    }
  }

  export namespace Auth {
    export type WalletBalance = {
      id: string;
      name: string;
      type: number;
      balance: number;
    };

    export type Me = Omit<SupabaseUser, 'user_metadata'> & {
      user_metadata: {
        first_name?: string;
        last_name?: string;
        walletBalances?: WalletBalance[];
      };
    };

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

    export namespace UserMetadata {
      export namespace Update {
        export type Request = {
          first_name?: string;
          last_name?: string;
          birth_date?: string;
          gender?: string;
        };
      }
    }
    export interface UserData {
      id: number;
      created_at: string;
      user_id: string;
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
      user?: SupabaseUser;
      error?: string;
    }

    export namespace VerifyOtp {
      export type Response = { access_token: string; refresh_token: string; user: SupabaseUser; error?: string };
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
    export interface Cart extends CartList {
      id: string;
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
        }> | null;
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
        }> | null;
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

  export namespace Dadata {
    export type Address = {
      source: string;
      result: string;
      postal_code: string;
      country: string;
      country_iso_code: string;
      federal_district: string;
      region_fias_id: string;
      region_kladr_id: string;
      region_iso_code: string;
      region_with_type: string;
      region_type: string;
      region_type_full: string;
      region: string;
      area_fias_id: string | null;
      area_kladr_id: string | null;
      area_with_type: string | null;
      area_type: null;
      area_type_full: null;
      area: null;
      city_fias_id: null;
      city_kladr_id: null;
      city_with_type: null;
      city_type: null;
      city_type_full: null;
      city: null;
      city_area: string | null;
      city_district_fias_id: string | null;
      city_district_kladr_id: string | null;
      city_district_with_type: string | null;
      city_district_type: string | null;
      city_district_type_full: string | null;
      city_district: string | null;
      settlement_fias_id: null;
      settlement_kladr_id: null;
      settlement_with_type: null;
      settlement_type: null;
      settlement_type_full: null;
      settlement: null;
      street_fias_id: string;
      street_kladr_id: string;
      street_with_type: string;
      street_type: string;
      street_type_full: string;
      street: string;
      stead_fias_id: string | null;
      stead_kladr_id: string | null;
      stead_cadnum: string | null;
      stead_type: null;
      stead_type_full: null;
      stead: null;
      house_fias_id: string;
      house_kladr_id: string;
      house_cadnum: string;
      house_type: string;
      house_type_full: string;
      house: string;
      block_type: string | null;
      block_type_full: string | null;
      block: string | null;
      entrance: string | null;
      floor: string | null;
      flat_fias_id: string;
      flat_cadnum: string;
      flat_type: string;
      flat_type_full: string;
      flat: string;
      flat_area: string;
      square_meter_price: string;
      flat_price: string;
      postal_box: string | null;
      fias_id: string;
      fias_code: string;
      fias_level: string;
      fias_actuality_state: string;
      kladr_id: string;
      capital_marker: string;
      okato: string;
      oktmo: string;
      tax_office: string;
      tax_office_legal: string;
      timezone: string;
      geo_lat: string;
      geo_lon: string;
      beltway_hit: string;
      beltway_distance: string | null;
      qc_geo: number;
      qc_complete: number;
      qc_house: number;
      qc: number;
      unparsed_parts: string | null;
      metro: Array<{
        name: string;
        line: string;
        distance: number;
      }>;
    };

    export namespace Suggestions {
      export type Suggestion = {
        value: string;
        unrestricted_value: string;
        data: Address;
      };

      export type Suggestions = {
        suggestions: Suggestion[];
      };
    }
  }

  export namespace Email {
    export namespace ContactMe {
      export type Request = {
        name: string;
        phone: string;
        message: string;
      };
    }

    export namespace LeaveRequest {
      export type Request = {
        name: string;
        phone: string;
        email: string;
      };
    }

    export namespace Send {
      export type Request = {
        subject: string;
        text: string;
      };
    }
  }

  export namespace Orders {
    export namespace Loyalty {
      export namespace Bonus {
        export namespace Calculate {
          export type Request = {
            order_amount: number;
            phone: string;
          };

          export type Response = {
            payable: number;
            available: number;
            order_amount: number;
          };
        }
      }
    }
    export namespace DeliveryTimeframes {
      export type DeliveryInterval = {
        start: string;
        end: string;
        available: boolean;
      };

      export type DeliveryTimeframe = {
        date: string;
        intervals: DeliveryInterval[];
      };

      export type Request =
        | {
            latitude: string;
            longitude: string;
            delivery_type: OrderType.DELIVERY;
          }
        | {
            delivery_type: OrderType.TAKEOUT;
            terminal_id: string;
            latitude: string;
            longitude: string;
          };

      export type Response = {
        timeframes: DeliveryTimeframe[];
      };
    }

    export type Order = {
      id: string;
      user_id: string;
      cart_id: string;
      delivery_address: API.Address.Address | null;
      total_price: number;
      special_instructions: string;
      delivery_time: string | null; // example: '2024-01-25T13:45:30.123Z'
      type: OrderType;
      status: OrderStatus;
      payment_status: OrderPaymentStatus;
      created_at: string;
      updated_at: string;
      is_deleted: boolean;
      payment_link?: string | null;
      payment_methods: API.Payment.PaymentMethods.PaymentMethod[];
      order_number: string;
      cart: Pick<API.Cart.Cart, 'items' | 'id'>;
      terminal_id?: string;
    };

    export namespace List {
      export type Request = Common.Pagination.REST.RequestArgs & {
        order_status?: string; // OrderStatusArray split by comma
        payment_status?: string; // OrderPaymentStatusArray split by comma
        sorting_direction: SortingDirection;
        sorting_field?: 'created_at' | 'updated_at' | 'total_price' | 'status' | 'payment_status';
      };

      export type Response = {
        total: number;
        has_more: boolean;
        data: Order[];
      };
    }

    export namespace Create {
      export type CommonRequestParams = {
        cart_id: string;
        special_instructions: string;
        delivery_time: string;
        payment_methods: {
          payment_method_id: string; // uuid
          sum: number;
        }[];
      };
      export type DeliveryRequestParams = CommonRequestParams & {
        delivery_address: Omit<API.Address.Address, 'id' | 'user_id'>;
        type: OrderType.DELIVERY;
        terminal_id?: undefined;
      };
      export type TakeoutRequestParams = CommonRequestParams & {
        terminal_id: string;
        type: OrderType.TAKEOUT;
        delivery_address?: undefined;
      };
      export type Request = DeliveryRequestParams | TakeoutRequestParams;
    }
  }

  export namespace Payment {
    export namespace PaymentMethods {
      export type Request = {
        sum?: number;
        delivery_zone?: string;
      };

      export type PaymentMethod = {
        id: string;
        name: string;
        iiko_code: string;
        enabled: boolean;
        delivery_zones: string;
        min_sum: string;
        max_sum: string;
        is_online: boolean;
        is_loyalty: boolean;
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
