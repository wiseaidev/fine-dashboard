import { ReactNode, FC } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  IconButton,
} from "@pankod/refine-mui";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Comment from "@mui/icons-material/Comment";
import pink from "@mui/material/colors/pink";
import lightGreen from "@mui/material/colors/lightGreen";

interface CardProps {
  children: ReactNode;
  liked: number;
  shared: number;
  commented: number;
}

const CardPaper: FC<CardProps> = ({ children, liked, shared, commented }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>{children}</CardContent>
      <CardActions sx={{ display: "flex" }}>
        <IconButton aria-label="Add to favorites" sx={{ marginRight: 1 }}>
          <FavoriteIcon sx={{ color: liked > 0 ? pink[500] : "inherit" }} />
          <Box
            component="span"
            sx={{
              fontSize: 14,
              marginLeft: 5,
            }}
          >
            {liked}
          </Box>
        </IconButton>
        <IconButton
          aria-label="Share"
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <ShareIcon sx={{ color: shared > 0 ? lightGreen[500] : "inherit" }} />
          <Box
            component="span"
            sx={{
              fontSize: 14,
              marginLeft: 5,
            }}
          >
            {shared}
          </Box>
        </IconButton>
        <IconButton
          aria-label="Comment"
          sx={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Comment />
          <Box
            component="span"
            sx={{
              fontSize: 14,
              marginLeft: 5,
            }}
          >
            {commented}
          </Box>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardPaper;
