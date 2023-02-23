import React, { useState, FC } from "react";
import {
  Avatar,
  Typography,
  Menu,
  MenuItem,
  Button,
  IconButton,
  Box,
  alpha,
} from "@pankod/refine-mui";
import VerifiedUser from "@mui/icons-material/VerifiedUser";
import Info from "@mui/icons-material/Info";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface CoverProps {
  avatar: string;
  name: string;
  desc: string;
  coverImg: string;
}

const Cover: FC<CoverProps> = ({ avatar, name, desc, coverImg }) => {
  const options = ["Edit Profile", "Change Cover"];
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick: any = (event: {
    currentTarget: React.SetStateAction<null>;
  }) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        height: 480,
        backgroundColor: "rgba(80,80,80, 0.9)",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        backgroundSize: "cover",
        textAlign: "center",
        boxShadow: "10px 5px 5px #000",
        backgroundPosition: "bottom center",
        borderRadius: " 30px",
        backgroundImage: `url(${coverImg})`,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 5,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          right: 20,
          "& button": {
            color: "#fff",
          },
        }}
      >
        <IconButton
          sx={{
            marginTop: 2,
          }}
        >
          <Info />
        </IconButton>
        <IconButton
          sx={{
            marginTop: 1,
          }}
          onClick={handleClick}
        >
          <MoreVertIcon
            sx={{
              cursor: "pointer",
              marginTop: 1,
            }}
          />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            style: {
              cursor: "pointer",
              maxHeight: 216,
              width: 200,
            },
          }}
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              selected={option === "Edit Profile"}
              onClick={handleClose}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Box
        sx={{
          background: alpha("#000", 0.3),
          height: "100%",
          width: "100%",
          padding: "70px 2px 30px",
        }}
      >
        <Avatar
          alt={name}
          src={avatar}
          sx={{
            margin: "0 auto 2px",
            width: 120,
            height: 120,
            boxShadow: "0 2px 40px -5px #fff",
          }}
        />
        <Typography variant="h4" className="name" gutterBottom>
          {name}
          <VerifiedUser
            sx={{
              ml: 1,
              position: "relative",
            }}
          />
        </Typography>
        <Typography className="subheading" gutterBottom>
          {desc}
        </Typography>
        <Button
          sx={{
            marginTop: 1,
          }}
          size="large"
          variant="contained"
          color="secondary"
        >
          Add Connection
        </Button>
      </Box>
    </Box>
  );
};

export default Cover;
