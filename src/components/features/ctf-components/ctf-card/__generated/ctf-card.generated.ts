import * as Types from '../../../../../lib/__generated/graphql.types';

import { fetchConfig } from '@src/lib/fetchConfig';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(fetchConfig.endpoint as string, {
    method: "POST",
    ...(fetchConfig.params),
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
export type CardFieldsFragment = { __typename?: 'ComponentCard', headline?: string | null, url?: string | null, sys: { __typename?: 'Sys', id: string } };

export type CtfCardQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfCardQuery = { __typename?: 'Query', componentCard?: (
    { __typename?: 'ComponentCard' }
    & CardFieldsFragment
  ) | null };

export const CardFieldsFragmentDoc = `
    fragment CardFields on ComponentCard {
  sys {
    id
  }
  headline
  url
}
    `;
export const CtfCardDocument = `
    query CtfCard($id: String!, $locale: String, $preview: Boolean) {
  componentCard(id: $id, preview: $preview, locale: $locale) {
    ...CardFields
  }
}
    ${CardFieldsFragmentDoc}`;
export const useCtfCardQuery = <
      TData = CtfCardQuery,
      TError = unknown
    >(
      variables: CtfCardQueryVariables,
      options?: UseQueryOptions<CtfCardQuery, TError, TData>
    ) =>
    useQuery<CtfCardQuery, TError, TData>(
      ['CtfCard', variables],
      fetcher<CtfCardQuery, CtfCardQueryVariables>(CtfCardDocument, variables),
      options
    );

useCtfCardQuery.getKey = (variables: CtfCardQueryVariables) => ['CtfCard', variables];
;

useCtfCardQuery.fetcher = (variables: CtfCardQueryVariables) => fetcher<CtfCardQuery, CtfCardQueryVariables>(CtfCardDocument, variables);