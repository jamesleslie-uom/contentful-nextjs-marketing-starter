import { Container } from '@mui/material';

import { EntryNotFound } from '@src/components/features/errors/entry-not-found';
import { useCtfCardGridQuery } from '@src/components/features/ctf-components/ctf-card-grid/__generated/ctf-card-grid.generated';
import { CtfCardGrid } from '@src/components/features/ctf-components/ctf-card-grid/ctf-card-grid';

interface CtfCardGridGqlPropsInterface {
  id: string;
  locale: string;
  preview?: boolean;
}

export const CtfCardGridGql = (props: CtfCardGridGqlPropsInterface) => {
  const { isLoading, data } = useCtfCardGridQuery({
    id: props.id,
    locale: props.locale,
    preview: props.preview,
  });

  if (isLoading || !data?.componentCardGrid) {
    return null;
  }

  if (!data.componentCardGrid) {
    return (
      <Container>
        <EntryNotFound />
      </Container>
    );
  }

  const { componentCardGrid } = data;

  return <CtfCardGrid {...componentCardGrid} />;
};
