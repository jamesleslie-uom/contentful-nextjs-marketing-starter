import * as Types from '../../../../lib/__generated/graphql.types';

import { fetchConfig } from '@src/lib/fetchConfig';
export type PageLinkFieldsFragment = { __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?: { __typename: 'ComponentCardGrid', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } } | null };

export const PageLinkFieldsFragmentDoc = `
    fragment PageLinkFields on Page {
  __typename
  slug
  sys {
    id
  }
  pageName
  pageContent(locale: $locale, preview: $preview) {
    ... on Entry {
      __typename
      sys {
        id
      }
    }
  }
}
    `;