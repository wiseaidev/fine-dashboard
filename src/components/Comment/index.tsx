import React, { FC, useState } from "react";
import grey from "@mui/material/colors/grey";
import Send from "@mui/icons-material/Send";
import CommentIcon from "@mui/icons-material/Comment";
import CloseIcon from "@mui/icons-material/Close";
import {
  MuiList,
  ListItem,
  Input,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  IconButton,
  Fab,
  Avatar,
  Slide,
  Box,
} from "@pankod/refine-mui";

const Transition = React.forwardRef(function Transition(
  props: any,
  ref: any
): any {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface CommentProps {
  open: boolean;
  handleClose: any;
  submitComment: Function;
  dataComment: any;
  fullScreen: boolean;
}

const Comment: FC<CommentProps> = ({
  open,
  handleClose,
  dataComment,
  fullScreen,
  submitComment,
}) => {
  const [comment, setComment] = useState("");
  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }): void => {
    setComment(event.target.value);
  };

  const handleSubmit = (commentParam: string): void => {
    submitComment(commentParam);
    setComment("");
  };

  const getItem = (
    dataArray: {
      get: (arg0: string) => React.Key | null | undefined;
    }[]
  ): any =>
    typeof dataArray.map == "function"
      ? dataArray.map((data: any) => (
          <Box key={data.id}>
            <ListItem>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Avatar
                    alt="avatar"
                    src={data.avatar}
                    sx={{
                      marginRight: 2,
                    }}
                  />
                  <Box component="section">
                    <Typography variant="subtitle1">{data.from}</Typography>
                    <Typography variant="caption">
                      <Box
                        component="span"
                        sx={{
                          fontWeight: 300,
                          color: grey[400],
                        }}
                      >
                        {data.date}
                      </Box>
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  sx={{
                    marginTop: 2,
                    marginBottom: 2,
                  }}
                >
                  {data.message}
                </Typography>
              </Box>
            </ListItem>
            <Box />
          </Box>
        ))
      : "";

  return (
    <Box>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        TransitionComponent={Transition}
        maxWidth="md"
      >
        <DialogTitle id="form-dialog-title">
          <Box
            sx={{
              borderBottom: "2px solid grey",
              lineHeight: 3,
              marginBottom: 2,
            }}
          >
            <CommentIcon />
            &nbsp;
            {dataComment !== undefined && dataComment.size}
            &nbsp; Comments
            {dataComment !== undefined && dataComment.size > 1 ? "s" : ""}
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 20,
                right: 20,
                border: "2px solid grey",
              }}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <MuiList>{dataComment !== undefined && getItem(dataComment)}</MuiList>
        </DialogContent>
        <DialogActions
          sx={{
            background: grey[700],
            margin: 0,
            border: "1px solid #000",
            borderTopLeftRadius: "40px",
            borderTopRightRadius: "40px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              padding: "15px 20px",
              margin: 0,
            }}
          >
            <Avatar
              alt="avatar"
              src=""
              sx={{
                width: 40,
                height: 40,
              }}
            />
            <Input
              placeholder="Write Comment"
              onChange={handleChange}
              value={comment}
              sx={{
                flex: 1,
                margin: "0 10px",
                padding: "10px",
                borderTop: "2px solid grey",
                borderLeft: "2px solid grey",
                borderRight: "2px solid grey",
                borderTopLeftRadius: "25px",
                borderTopRightRadius: "25px",
              }}
              inputProps={{
                "aria-label": "Comment",
              }}
            />
            <Fab
              size="small"
              onClick={() => handleSubmit(comment)}
              color="secondary"
              aria-label="send"
              sx={{
                border: "2px solid grey",
                marginRight: 1,
              }}
            >
              <Send />
            </Fab>
          </Box>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Comment;
