import NewConnectionsRequestsWidget from "../../components/NewConnectionsRequestsWidget";
import UserStatsticsWidget from "../../components/UserStatsticsWidget";
import CounterIconsWidget from "../../components/CounterIconsWidget";
import { Grid, Box } from "@pankod/refine-mui";
import CustomPaper from "components/CustomPaper";
import GoogleMapWidget from "components/GoogleMapWidget";
import CryptoChartWidget from "components/CryptoChartWidget";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { useList, HttpError } from "@pankod/refine-core";
import { useDispatch } from "react-redux";
import { setUsers } from "../../redux/usersReducer";
import ContentLoader from "../../components/ContentLoader";

const DashboardPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useList<any, HttpError>({
    resource: "users",
    config: {
      pagination: {
        current: 1,
        pageSize: 50,
      },
    },
    queryOptions: {
      retry: 3,
    },
  });
  if (isLoading) {
    return <ContentLoader />;
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  const usersData = data?.data as any;
  let connectionData = [];
  for (let i = 1; i < 50; i++) {
    if (usersData[i]) {
      connectionData.push({
        id: usersData[i]["id"],
        cover: usersData[i]["status"],
        avatar: usersData[i]["avatar"] ? usersData[i]["avatar"][0]["url"] : "",
        name: `${usersData[i]["firstName"]} ${usersData[i]["lastName"]}`,
        title: usersData[i]["skills"] ? usersData[i]["skills"][0] : "",
        connection: i * 2,
        verified: usersData[i]["status"],
        birthday: usersData[i]["birthday"],
      });
    }
  }
  dispatch(
    setUsers({ usersList: connectionData, available: connectionData.length })
  );

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      {" "}
      <Box
        sx={{
          marginBottom: 3,
        }}
      >
        <CounterIconsWidget />
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={7} sm={12}>
          <UserStatsticsWidget />
        </Grid>

        <Grid item xs={7} sm={12}>
          <CustomPaper
            title="Map"
            icon={<MyLocationIcon />}
            desc="A simple google map widget."
          >
            <Box sx={{ height: "700px" }}>
              <GoogleMapWidget />
            </Box>
          </CustomPaper>
        </Grid>
        <Grid item xs={7} sm={12}>
          <NewConnectionsRequestsWidget />
        </Grid>
        <Grid item xs={7} sm={12}>
          <CryptoChartWidget />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage;
