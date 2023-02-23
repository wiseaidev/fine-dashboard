import { useState, SetStateAction } from "react";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import SupervisorAccount from "@mui/icons-material/SupervisorAccount";
import Favorite from "@mui/icons-material/Favorite";
import Feed from "../Feed";
import Connections from "../Connections";
import Favorites from "../Favorites";
import { AppBar, Tabs, Tab, Hidden, Badge, alpha } from "@pankod/refine-mui";
import { useList, HttpError } from "@pankod/refine-core";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../redux/postsReducer";

const SocialsWidget = () => {
  const dispatch = useDispatch();
  let usersData = useSelector((state: any) => state.users.usersList) ?? [];
  const deletedUsersData =
    useSelector((state: any) => state.users.deletedUsersList) ?? [];
  usersData.concat(deletedUsersData);
  const [value, setValue] = useState(0);
  const { data, isLoading, isError } = useList<any, HttpError>({
    resource: "posts",
    config: {
      pagination: {
        current: 1,
        pageSize: 10,
      },
    },
    queryOptions: {
      retry: 3,
    },
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  const postsData = data?.data as any;
  let postsDatas = [];

  for (let i = 0; i < 8; i++) {
    let currentUser = usersData.find(
      (user: any) => user.id === postsData[i]["user"]["id"]
    );
    if (currentUser) {
      let post = {
        id: postsData[i]["id"],
        name: currentUser["name"],
        date: postsData[i]["createdAt"].split("T")[0],
        time: postsData[i]["createdAt"].split("T")[1].substring(0, 5),
        icon: <AddCircleIcon />,
        avatar: currentUser["avatar"],
        image: postsData[i]["image"][0]["url"],
        content: postsData[i]["content"],
        liked: postsData[i]["rejected"] === "published" ? true : false,
        comments: [] as any,
      };
      for (let j = 0; i < 3; i++) {
        post["comments"].push({
          id: `${i}_${j}`,
          from: currentUser["name"],
          avatar: currentUser["avatar"],
          date: currentUser["birthday"].split("T")[0],
          message: postsData[i]["content"],
        });
      }
      postsDatas.push(post);
    }
  }

  if (postsDatas) {
    dispatch(setPosts({ postsList: postsDatas, available: postsDatas.length }));
  }

  const handleChange = (_event: any, val: SetStateAction<number>) => {
    setValue(val);
  };

  return (
    <div>
      <AppBar
        position="static"
        sx={{
          borderRadius: "0 0 10px 10px",
          backgroundColor: alpha("#000", 0.7),
          position: "relative",
        }}
      >
        <Hidden smUp>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab icon={<DynamicFeedIcon />} />
            <Tab icon={<SupervisorAccount />} />
            <Tab icon={<Favorite />} />
          </Tabs>
        </Hidden>
        <Hidden smDown>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab icon={<DynamicFeedIcon />} label="Feed" />
            <Tab
              icon={
                <Badge badgeContent={10} color="primary">
                  <SupervisorAccount />
                </Badge>
              }
              label="50 CONNECTIONS"
            />
            <Tab icon={<Favorite />} label="23 FAVORITES" />
          </Tabs>
        </Hidden>
      </AppBar>
      {value === 0 && (
        <div style={{ marginTop: 5 }}>
          <Feed data={postsDatas} />
        </div>
      )}
      {value === 1 && (
        <div style={{ marginTop: 5 }}>
          <Connections />
        </div>
      )}
      {value === 2 && (
        <div style={{ marginTop: 5 }}>
          <Favorites />
        </div>
      )}
    </div>
  );
};

export default SocialsWidget;
