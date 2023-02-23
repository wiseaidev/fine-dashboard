import { useBottomScrollListener } from "react-bottom-scroll-listener";
import { Box } from "@pankod/refine-mui";
import { FC, isValidElement, Key } from "react";

const getEmptyContainer = (ListEmptyComponent: {} | any) => {
  if (ListEmptyComponent)
    return isValidElement(ListEmptyComponent) ? (
      ListEmptyComponent
    ) : (
      <ListEmptyComponent />
    );
  return null;
};

interface IListView {
  data: Array<any>;
  onEndReached: () => any;
  ListEmptyComponent: JSX.Element;
  renderRow: (item: any, index: Key) => JSX.Element;
}

const ListView: FC<IListView> = ({
  renderRow,
  onEndReached,
  data,
  ListEmptyComponent,
  ...rest
}) => {
  useBottomScrollListener(onEndReached, {
    offset: 100,
    debounce: 0,
    triggerOnNoScroll: true,
  });

  return (
    <Box {...rest}>
      {data.length > 0
        ? data.map((item: any, index: Key) => renderRow(item, index))
        : getEmptyContainer(ListEmptyComponent)}
    </Box>
  );
};

export default ListView;
