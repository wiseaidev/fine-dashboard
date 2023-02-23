import { FC, isValidElement } from "react";
import { Typography } from "@pankod/refine-mui";

interface ICustomTitle {
  content: string;
}

const CustomTitle: FC<ICustomTitle> = ({ content }) => {
  if (!content) return null;

  return isValidElement(content) ? (
    content
  ) : (
    <Typography
      component="div"
      variant="h4"
      sx={{
        position: "relative",
      }}
    >
      {content}
    </Typography>
  );
};

export default CustomTitle;
