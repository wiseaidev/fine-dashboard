import { useState, FC, Key, ReactNode } from "react";
import pink from "@mui/material/colors/pink";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Card,
  Menu,
  MenuItem,
  CardHeader,
  CardMedia,
  CardActions,
  Typography,
  Avatar,
  CardContent,
  Box,
  MuiList,
  ListItem,
  IconButton,
} from "@pankod/refine-mui";
import Comment from "../Comment";

interface TimelineProps {
  onlike: Function;
  dataTimeline: any;
  fetchComment: Function;
  submitComment: Function;
  commentIndex: number;
}

const Timeline: FC<TimelineProps> = ({
  dataTimeline,
  onlike,
  commentIndex,
  submitComment,
  fetchComment,
}) => {
  const [anchorEl, setanchorEl] = useState(null);
  const [openComment, setOpenComment] = useState(false);
  const options = ["Block", "Remove"];

  const handleClick = (event: any) => {
    setanchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setanchorEl(null);
  };

  const handleOpenComment = (data: any) => {
    fetchComment(data);
    setOpenComment(true);
  };

  const handleCloseComment = () => {
    setOpenComment(false);
  };

  const getItem = (dataArray: any): any =>
    typeof dataArray.map == "function"
      ? dataArray.map(
          (data: {
            id: Key | null | undefined;
            time: ReactNode;
            icon: ReactNode;
            avatar: string | undefined;
            name: any;
            date: any;
            image: string;
            content: ReactNode;
            liked: any;
            comments: any;
          }) => (
            <ListItem key={data.id}>
              <Box
                sx={{
                  marginTop: -4,
                  height: 38,
                  width: 38,
                }}
              ></Box>
              <Card
                sx={{
                  minWidth: 275,
                  justifyContent: "space-between",
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar
                      alt="avatar"
                      src={data.avatar}
                      sx={{
                        boxShadow:
                          "0px 4px 5px -2px rgba(50,50,50, 0.2),0px 7px 10px 1px rgba(50,50,50, 0.14),0px 2px 16px 1px rgba(50,50,50, 0.12)",
                      }}
                    />
                  }
                  action={
                    <IconButton
                      aria-label="More"
                      aria-owns={anchorEl ? "long-menu" : ""}
                      aria-haspopup="true"
                      sx={{
                        marginRight: 1,
                      }}
                      onClick={handleClick}
                    >
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={data.name}
                  subheader={data.date}
                />
                {data.image !== "" && (
                  <CardMedia
                    sx={{
                      height: 0,
                      paddingTop: "56.25%", // 16:9
                      position: "relative",
                    }}
                    image={data.image}
                    title={data.name}
                  />
                )}
                <CardContent>
                  <Typography component="p">{data.content}</Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                  }}
                >
                  <IconButton
                    aria-label="Like this"
                    onClick={() => onlike(data)}
                  >
                    <FavoriteIcon
                      sx={{
                        color: data.liked ? pink[500] : "",
                      }}
                    />
                  </IconButton>
                  <IconButton aria-label="Share">
                    <ShareIcon />
                  </IconButton>
                  <Box
                    sx={{
                      marginLeft: 1,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="caption" component="span">
                      {data.comments !== undefined ? data.comments.length : 0}
                    </Typography>
                    <IconButton
                      aria-label="Comment"
                      onClick={() => handleOpenComment(data)}
                    >
                      <CommentIcon />
                    </IconButton>
                  </Box>
                </CardActions>
              </Card>
            </ListItem>
          )
        )
      : "";
  return (
    <>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 216,
            width: 200,
          },
        }}
      >
        {options.map((option: Key | null | undefined) => (
          <MenuItem key={option} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
      <Comment
        open={openComment}
        handleClose={handleCloseComment}
        submitComment={submitComment}
        dataComment={
          dataTimeline[commentIndex] ? dataTimeline[commentIndex].comments : ""
        }
        fullScreen={false}
      />
      <MuiList
        sx={{
          listStyleType: "none",
          pl: 2,
          "& .MuiListItem-root": {
            display: "list-item",
          },
        }}
      >
        {getItem(dataTimeline)}
      </MuiList>
    </>
  );
};

export default Timeline;
