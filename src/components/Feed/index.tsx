import LocalPhone from "@mui/icons-material/LocalPhone";
import DateRange from "@mui/icons-material/DateRange";
import LocationOn from "@mui/icons-material/LocationOn";
import InfoIcon from "@mui/icons-material/Info";
import Check from "@mui/icons-material/Check";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ImageIcon from "@mui/icons-material/Image";
import Timeline from "../Timeline";
import CustomPaper from "../CustomPaper";
import {
  Box,
  Grid,
  Paper,
  IconButton,
  Chip,
  ListItemAvatar,
  ImageListItemBar,
  ImageListItem,
  ImageList,
  Typography,
  MuiList,
  ListItem,
  ListItemText,
  Avatar,
  Button,
  LinearProgress,
} from "@pankod/refine-mui";

import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  FC,
} from "react";
import { blue, green } from "@mui/material/colors";
import ContactsIcon from "@mui/icons-material/Contacts";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import CameraIcon from "@mui/icons-material/Camera";

interface FeedProps {
  data: any;
}

const Feed: FC<FeedProps> = ({ data }) => {
  const imgData: any[] = [];
  return (
    <Grid
      container
      sx={{
        alignItems: "left",
        justifyContent: "flex-start",
        direction: "row",
      }}
      spacing={0}
    >
      <Grid item md={7} xs={12}>
        <Timeline
          dataTimeline={data}
          onlike={() => false}
          fetchComment={() => {}}
          submitComment={() => {}}
          commentIndex={0}
        />
      </Grid>
      <Grid item md={5} xs={12}>
        <Box
          sx={{
            marginTop: 3,
          }}
        >
          <Paper
            sx={{
              "& $title, & $subtitle": {
                color: "#fff",
              },
            }}
            elevation={4}
          >
            <Typography
              className="title"
              variant="h5"
              component="h3"
              sx={{ paddingTop: 3 }}
            >
              <Box
                component="span"
                sx={{
                  padding: 3,
                  fontWeight: 100,
                }}
              >
                Profile Strength:
              </Box>
              <Box
                component="span"
                sx={{
                  fontWeight: 700,
                  marginLeft: -2,
                }}
              >
                Intermediate
              </Box>
            </Typography>
            <Grid container justifyContent="center">
              <Chip
                avatar={
                  <Avatar>
                    <Check />
                  </Avatar>
                }
                label="70% Progress"
                sx={{
                  marginTop: 2,
                  background: "#fff",
                  color: "#000",
                  "& div": {
                    background: green[500],
                    color: "#fff",
                  },
                }}
                color="primary"
              />
            </Grid>
            <LinearProgress
              variant="determinate"
              sx={{
                marginTop: 3,
                marginBottom: 2,
              }}
              value={70}
            />
          </Paper>
        </Box>
        <CustomPaper
          title="About Me"
          icon={<ContactsIcon />}
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        >
          <Box className="Box" />
          <MuiList
            dense
            sx={{
              padding: 0,
              "& li": {
                paddingLeft: 2,
              },
            }}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <DateRange />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Born" secondary="Jan 1, 2000" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LocalPhone />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Phone" secondary="+99999999" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LocationOn />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Address" secondary="Tripoly, Lebanon." />
            </ListItem>
          </MuiList>
        </CustomPaper>
        <Box className="Box" />
        <CustomPaper title="My Photos" icon={<ImageIcon />} desc="">
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              overflow: "hidden",
              "& > *": {
                width: "85%",
              },
            }}
          >
            <ImageList
              rowHeight={180}
              sx={{
                marginLeft: 2,
                width: 700,
                height: "auto",
              }}
              gap={8}
            >
              {imgData.map(
                (
                  tile: {
                    img: string | undefined;
                    title: string | undefined;
                    author:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | ReactFragment
                      | ReactPortal
                      | null
                      | undefined;
                  },
                  index: number
                ) => {
                  if (index >= 4) {
                    return false;
                  }
                  return (
                    <ImageListItem key={index.toString()}>
                      <img src={tile.img} alt={tile.title} loading="lazy" />
                      <ImageListItemBar
                        title={tile.title}
                        subtitle={
                          <Box component="span">
                            by:&nbsp;
                            {tile.author}
                          </Box>
                        }
                        actionIcon={
                          <IconButton
                            sx={{
                              color: "rgba(255, 255, 255, 0.54)",
                            }}
                          >
                            <InfoIcon />
                          </IconButton>
                        }
                      />
                    </ImageListItem>
                  );
                }
              )}
            </ImageList>
          </Box>
          <Box className="Box" />
          <Grid container justifyContent="center">
            <Button color="primary" variant="outlined" className="button">
              See All
            </Button>
          </Grid>
        </CustomPaper>
        <CustomPaper title="My Connection" icon={<RecentActorsIcon />} desc="">
          <MuiList
            dense
            sx={{
              padding: 0,
              "& li": {
                paddingLeft: 0,
              },
            }}
          >
            <ListItem button>
              <Avatar
                sx={{
                  margin: 2,
                  marginLeft: 0,
                  backgroundColor: green[500],
                }}
              >
                M
              </Avatar>
              <ListItemText
                primary="Mahmoud Harmouch"
                secondary="2 Mutual Connection"
              />
            </ListItem>
            <ListItem button>
              <Avatar
                sx={{
                  margin: 2,
                  marginLeft: 0,
                  backgroundColor: green[500],
                }}
              >
                M
              </Avatar>
              <ListItemText
                primary="Mahmoud Harmouch"
                secondary="8 Mutual Connection"
              />
            </ListItem>
            <ListItem button>
              <Avatar
                sx={{
                  margin: 2,
                  marginLeft: 0,
                  backgroundColor: green[500],
                }}
              >
                M
              </Avatar>
              <ListItemText
                primary="Mahmoud Harmouch"
                secondary="12 Mutual Connection"
              />
            </ListItem>
            <ListItem button>
              <Avatar
                sx={{
                  margin: 2,
                  marginLeft: 0,
                  backgroundColor: green[500],
                }}
              >
                M
              </Avatar>
              <ListItemText
                primary="Mahmoud Harmouch"
                secondary="10 Mutual Connection"
              />
            </ListItem>
          </MuiList>
          <Box className="Box" />
          <Grid container justifyContent="center">
            <Button color="primary" variant="outlined" className="button">
              See All
            </Button>
          </Grid>
        </CustomPaper>
        <CustomPaper title="My Interests" icon={<CameraIcon />} desc="">
          <Grid
            container
            sx={{
              "& li": {
                padding: "1px 0",
              },
              "& $avatar": {
                margin: 0,
              },
            }}
          >
            <Grid item md={6}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      margin: 2,
                      backgroundColor: blue[500],
                    }}
                  >
                    <LibraryBooksIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Reading" secondary="10 books" />
              </ListItem>
            </Grid>
            <Grid item md={6}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      margin: 2,
                      backgroundColor: blue[500],
                    }}
                  >
                    <LibraryBooksIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Reading" secondary="10 books" />
              </ListItem>
            </Grid>
            <Grid item md={6}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      margin: 2,
                      backgroundColor: blue[500],
                    }}
                  >
                    <LibraryBooksIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Reading" secondary="10 books" />
              </ListItem>
            </Grid>
            <Grid item md={6}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      margin: 2,
                      backgroundColor: blue[500],
                    }}
                  >
                    <LibraryBooksIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Reading" secondary="10 books" />
              </ListItem>
            </Grid>{" "}
            <Grid item md={6}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      margin: 2,
                      backgroundColor: blue[500],
                    }}
                  >
                    <LibraryBooksIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Reading" secondary="10 books" />
              </ListItem>
            </Grid>{" "}
            <Grid item md={6}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      margin: 2,
                      backgroundColor: blue[500],
                    }}
                  >
                    <LibraryBooksIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Reading" secondary="10 books" />
              </ListItem>
            </Grid>
          </Grid>
        </CustomPaper>
      </Grid>
    </Grid>
  );
};

export default Feed;
