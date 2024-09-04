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
    export namespace SignUp {
      export type Identity = {
        identity_id: string;
        id: string;
        user_id: string;
        identity_data: {
          email: string;
          email_verified: boolean;
          phone_verified: boolean;
          sub: string;
        };
        provider: string;
        last_sign_in_at: string;
        created_at: string;
        updated_at: string;
        email: string;
      };

      export type UserMetadata = {
        email: string;
        email_verified: boolean;
        phone_verified: boolean;
        sub: string;
      };

      export type AppMetadata = {
        provider: string;
        providers: string[];
      };
      export type Response = {
        id: string;
        aud: string;
        role: string;
        email: string;
        phone: string;
        confirmation_sent_at: string;
        app_metadata: AppMetadata;
        user_metadata: UserMetadata;
        identities: Identity[];
        created_at: string;
        updated_at: string;
        is_anonymous: boolean;
      };
    }

    export type Tokens = {
      access_token: string;
      refresh_token: string;
    };

    export type SupabaseGetSessionResponse = {
      access_token: string;
      refresh_token: string;
    };
  }
}
