import { FC } from "react";
import {
  Box,
  Divider,
  BottomNavigationAction,
  BottomNavigation,
  Avatar,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Card,
  Typography,
} from "@pankod/refine-mui";
import PhotoLibrary from "@mui/icons-material/PhotoLibrary";
import Favorite from "@mui/icons-material/Favorite";
import SupervisorAccount from "@mui/icons-material/SupervisorAccount";
import VerifiedUser from "@mui/icons-material/VerifiedUser";

interface ProfileCardProps {
  cover: string;
  avatar: string;
  name: string;
  title: string;
  connection: number;
  btnText: string;
  isVerified: boolean;
}

const ProfileCard: FC<ProfileCardProps> = ({
  cover,
  avatar,
  name,
  title,
  connection,
  isVerified = false,
  btnText,
}) => {
  return (
    <Card
      sx={{
        minWidth: 275,
      }}
    >
      <CardMedia
        sx={{
          height: 0,
          paddingTop: "66.25%",
          borderRadius: "50%",
          width: "120%",
          left: "-10%",
          position: "relative",
          top: -70,
        }}
        image={cover}
        title="cover"
      />
      <CardContent
        sx={{
          flex: "1 0 auto",
          textAlign: "center",
          marginTop: -10,
        }}
      >
        <Avatar
          alt="avatar"
          src={avatar}
          sx={{
            width: 120,
            height: 120,
            margin: "-56px auto 10px",
            background: "#000",
            boxShadow:
              "0px 4px 5px -2px rgba(50,50,50, 0.2),0px 7px 10px 1px rgba(50,50,50, 0.14),0px 2px 16px 1px rgba(50,50,50, 0.12)",
          }}
        />
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: 600,
          }}
          gutterBottom
        >
          {name}
          {isVerified && (
            <VerifiedUser
              sx={{
                fontSize: 22,
                marginLeft: 1,
                color: "#fff",
              }}
            />
          )}
        </Typography>
        <Typography className="subheading" gutterBottom>
          <Box
            component="span"
            sx={{
              fontWeight: 400,
            }}
          >
            {title}
          </Box>
        </Typography>
        <Typography
          variant="caption"
          sx={{
            fontWeight: 600,
          }}
          component="p"
        >
          {connection}
          &nbsp;connection
        </Typography>
        <Button
          sx={{
            marginTop: 6,
            marginBottom: 6,
          }}
          size="large"
          variant="outlined"
          color="primary"
        >
          {btnText}
        </Button>
      </CardContent>
      <Divider />
      <CardActions>
        <BottomNavigation
          showLabels
          sx={{
            width: "100%",
          }}
        >
          <BottomNavigationAction
            label="20 Connection"
            icon={<SupervisorAccount />}
          />
          <BottomNavigationAction label="10 Favorites" icon={<Favorite />} />
          <BottomNavigationAction label="5 Albums" icon={<PhotoLibrary />} />
        </BottomNavigation>
      </CardActions>
    </Card>
  );
};

export default ProfileCard;
