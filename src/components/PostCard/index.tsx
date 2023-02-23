import { useState, FC } from "react";
import {
  Typography,
  Card,
  Menu,
  MenuItem,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Avatar,
  Box,
} from "@pankod/refine-mui";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Comment from "@mui/icons-material/Comment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import lightGreen from "@mui/material/colors/lightGreen";
import pink from "@mui/material/colors/pink";

interface PostCardProps {
  avatar: string;
  name: string;
  date: string;
  image: string;
  content: string;
  liked: number;
  shared: number;
  commented: number;
}

const PostCard: FC<PostCardProps> = ({
  avatar,
  name,
  date,
  image,
  content,
  liked,
  shared,
  commented,
}) => {
  const [anchorElOpt, setAchorElOpt] = useState(null);

  const optionsOpt = ["Report this post", "Hide this post", "Copy link"];

  const handleClickOpt = (event: any) => {
    setAchorElOpt(event.currentTarget);
  };

  const handleCloseOpt = () => {
    setAchorElOpt(null);
  };
  return (
    <Card
      sx={{
        minWidth: 275,
        margin: "12px 12px",
        background: "none",
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            alt="avatar"
            src={avatar}
            sx={{
              boxShadow:
                "0px 4px 5px -2px rgba(50,50,50, 0.2),0px 7px 10px 1px rgba(50,50,50, 0.14),0px 2px 16px 1px rgba(50,50,50, 0.12)",
            }}
          />
        }
        action={
          <IconButton
            aria-label="More"
            aria-haspopup="true"
            sx={{
              marginRight: 1,
            }}
            onClick={handleClickOpt}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={date}
      />
      <Menu
        id="long-menu"
        anchorEl={anchorElOpt}
        open={Boolean(anchorElOpt)}
        onClose={handleCloseOpt}
        PaperProps={{
          style: {
            maxHeight: 216,
            width: 200,
          },
        }}
      >
        {optionsOpt.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Edit Profile"}
            onClick={handleCloseOpt}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
      {image && (
        <CardMedia
          sx={{
            height: 0,
            paddingTop: "56.25%", // 16:9
            position: "relative",
          }}
          image={image}
          title="Contemplative Reptile"
        />
      )}
      <CardContent>
        <Typography component="p">{content}</Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
        }}
      >
        <IconButton aria-label="Add to favorites" sx={{ marginRight: 1 }}>
          <FavoriteIcon sx={{ color: liked > 0 ? pink[500] : "inherit" }} />
          <Box
            component="span"
            sx={{
              fontSize: 14,
              marginLeft: 1,
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
              marginLeft: 1,
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
              marginLeft: 1,
            }}
          >
            {commented}
          </Box>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PostCard;
