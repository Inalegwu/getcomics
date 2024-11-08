import { ScrollArea, type ScrollAreaProps } from '@radix-ui/themes';
import type React from 'react';

type Props<T> = ScrollAreaProps & {
  data: Array<T>;
  renderItem: (item: T, index: number) => React.ReactNode;
  listHeaderComponent?: () => React.ReactNode;
  listFooterComponent?: () => React.ReactNode;
};

export const Flatlist = <T extends Record<string, unknown>>({
  data,
  renderItem,
  listFooterComponent: ListFooterComponent,
  listHeaderComponent: ListHeaderComponent,
  ...props
}: Props<T>) => {
  return (
    <ScrollArea {...props}>
      {ListHeaderComponent && <ListHeaderComponent />}
      {data.map((item, index) => renderItem(item, index))}
      {ListFooterComponent && <ListFooterComponent />}
    </ScrollArea>
  );
};
