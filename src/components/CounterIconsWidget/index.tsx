import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import CounterWidget from "./CounterWidget";
import UserInfoWidget from "./UserInfoWidget";
import red from "@mui/material/colors/red";
import grey from "@mui/material/colors/grey";
import lightBlue from "@mui/material/colors/lightBlue";
import { Grid, Box } from "@pankod/refine-mui";

const CounterIconsWidget: any = (): JSX.Element => {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={7} sm={6} md={3}>
          <UserInfoWidget />
        </Grid>
        <Grid item xs={7} sm={6} md={3}>
          <CounterWidget
            color={red[700]}
            start={0}
            end={180}
            duration={5}
            title="Subscribers"
            unitBefore=""
            unitAfter="k"
          >
            <SubscriptionsIcon
              sx={{
                color: "#fff",
                opacity: 0.9,
                fontSize: 84,
              }}
            />
          </CounterWidget>
        </Grid>
        <Grid item xs={7} sm={6} md={3}>
          <CounterWidget
            color={lightBlue[800]}
            start={0}
            end={120}
            duration={5}
            title="Followers"
            unitBefore=""
            unitAfter="k"
          >
            <LinkedInIcon
              sx={{
                color: "#fff",
                opacity: 0.9,
                fontSize: 84,
              }}
            />
          </CounterWidget>
        </Grid>
        <Grid item xs={7} sm={6} md={3}>
          <CounterWidget
            color={grey[800]}
            start={0}
            end={120}
            duration={5}
            title="Posts"
            unitBefore=""
            unitAfter=""
          >
            <LogoDevIcon
              sx={{
                color: "#fff",
                opacity: 0.9,
                fontSize: 84,
              }}
            />
          </CounterWidget>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CounterIconsWidget;
