import { CardContent } from "@pankod/refine-mui";
import { FC, ReactNode } from "react";

interface ICustomCardContent {
  children: ReactNode;
  [x: string]: any;
}

const CustomCardContent: FC<ICustomCardContent> = ({ children, ...rest }) => {
  return (
    <CardContent
      sx={{
        padding: 0,
        paddingBottom: 24,
      }}
      {...rest}
    >
      {children}
    </CardContent>
  );
};

export default CustomCardContent;
