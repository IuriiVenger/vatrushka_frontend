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
      nodeId: string;
      price: number | null;

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
