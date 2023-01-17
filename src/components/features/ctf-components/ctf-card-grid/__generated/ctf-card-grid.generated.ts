import * as Types from '../../../../../lib/__generated/graphql.types';

import { CardFieldsFragment } from '../../ctf-card/__generated/ctf-card.generated';
import { fetchConfig } from '@src/lib/fetchConfig';
import { CardFieldsFragmentDoc } from '../../ctf-card/__generated/ctf-card.generated';
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
export type CardGridFieldsFragment = { __typename?: 'ComponentCardGrid', internalName?: string | null, headline?: string | null, subline?: string | null, sys: { __typename?: 'Sys', id: string }, cardsCollection?: { __typename?: 'ComponentCardGridCardsCollection', items: Array<(
      { __typename?: 'ComponentCard' }
      & CardFieldsFragment
    ) | null> } | null };

export type CtfCardGridQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfCardGridQuery = { __typename?: 'Query', componentCardGrid?: (
    { __typename?: 'ComponentCardGrid' }
    & CardGridFieldsFragment
  ) | null };

export const CardGridFieldsFragmentDoc = `
    fragment CardGridFields on ComponentCardGrid {
  sys {
    id
  }
  internalName
  headline
  subline
  cardsCollection {
    items {
      ...CardFields
    }
  }
}
    `;
export const CtfCardGridDocument = `
    query CtfCardGrid($id: String!, $locale: String, $preview: Boolean) {
  componentCardGrid(id: $id, preview: $preview, locale: $locale) {
    ...CardGridFields
  }
}
    ${CardGridFieldsFragmentDoc}
${CardFieldsFragmentDoc}`;
export const useCtfCardGridQuery = <
      TData = CtfCardGridQuery,
      TError = unknown
    >(
      variables: CtfCardGridQueryVariables,
      options?: UseQueryOptions<CtfCardGridQuery, TError, TData>
    ) =>
    useQuery<CtfCardGridQuery, TError, TData>(
      ['CtfCardGrid', variables],
      fetcher<CtfCardGridQuery, CtfCardGridQueryVariables>(CtfCardGridDocument, variables),
      options
    );

useCtfCardGridQuery.getKey = (variables: CtfCardGridQueryVariables) => ['CtfCardGrid', variables];
;

useCtfCardGridQuery.fetcher = (variables: CtfCardGridQueryVariables) => fetcher<CtfCardGridQuery, CtfCardGridQueryVariables>(CtfCardGridDocument, variables);