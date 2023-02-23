import { FC, Key } from "react";

import ListView from "./ListView";

interface ICustomList {
  data: Array<any>;
  onEndReached: () => void;
  footerProps: { loading: boolean; footerText: string };
  renderRow: (item: any, index: Key) => JSX.Element;
  [x: string]: any;
}

const CustomList: FC<ICustomList> = ({ renderRow, footerProps, ...props }) => {
  return (
    <ListView {...props} renderRow={renderRow} ListEmptyComponent={<></>} />
  );
};

export default CustomList;
