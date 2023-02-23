import { FC } from "react";
import { Typography, Box } from "@pankod/refine-mui";
import blueGrey from "@mui/material/colors/blueGrey";

interface QuoteProps {
  align: string;
  content: string;
  footnote: string;
}
const Quote: FC<QuoteProps> = ({ align, content, footnote }) => {
  return (
    <Box
      sx={{
        padding: "0 25",
        margin: 2,
        position: "relative",
        "&:before": {
          color: blueGrey[100],
          fontSize: "4em",
          lineHeight: ".1em",
          marginRight: ".25em",
          content: align === "right" ? "close-quote" : "open-quote",
          verticalAlign: "-.4em",
        },
        textAlign: align,
        borderRight: align === "right" ? "5px solid" + blueGrey[50] : "",
        paddingRight: align === "right" ? 25 : "",
        borderLeft: align === "left" ? "5px solid" + blueGrey[50] : "",
        paddingLeft: align === "left" ? 2 : "",
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          minHeight: 1,
          marginBottom: 5,
        }}
        gutterBottom
      >
        {content}
      </Typography>
      <Typography variant="caption">{footnote}</Typography>
    </Box>
  );
};

export default Quote;
