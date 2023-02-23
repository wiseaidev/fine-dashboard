import { Typography } from "@pankod/refine-mui";
import { FC, isValidElement } from "react";

interface ICustomSubTitle {
  content: string;
}

const CustomSubTitle: FC<ICustomSubTitle> = ({ content }) => {
  if (!content) return null;

  return isValidElement(content) ? (
    content
  ) : (
    <Typography
      variant="subtitle1"
      component="p"
      gutterBottom={false}
      sx={{
        marginBottom: 0,
        marginTop: 4,
        fontSize: 12,
        color: "grey",
        letterSpacing: 0.4,
        fontWeight: 400,
      }}
    >
      {content}
    </Typography>
  );
};

export default CustomSubTitle;
