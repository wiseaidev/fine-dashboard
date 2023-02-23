import CustomAvatar from "../../CustomAvatar";
import { Typography, Box } from "@pankod/refine-mui";
import CustomCard from "../../CustomCard/CustomCard";

const UserInfoWidget = (): JSX.Element => {
  return (
    <CustomCard
      backgroundColor={""}
      backgroundImage={""}
      gradientDirection={""}
      colors={""}
      direction={""}
      className={""}
      sx={{
        height: { md: 180, sm: 126 },
        width: "100%",
      }}
    >
      <Box display="flex" alignItems="center" height={1}>
        <Box
          sx={{
            width: 130,
            height: { md: 180, xs: 126 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            backgroundColor: "#00C4B4",
            "& > div": {
              boxShadow: "0 6px 4px 2px rgba(0,0,0,.2)",
            },
          }}
        >
          <CustomAvatar
            src={
              "https://pbs.twimg.com/profile_images/1607319844378054657/e6r-3IWh_400x400.jpg"
            }
            alt={""}
            className={""}
            color={""}
            size={"25"}
            phCharLength={1}
            sx={{ width: 70, height: 70, cursor: "pointer" }}
          />
        </Box>
        <Box ml={{ xs: 1, xl: 2 }}>
          <Typography component="div" variant="h6">
            Mahmoud
          </Typography>
          <Box mt={1} color="text.secondary" component="p">
            @wiseaidev
          </Box>
          <Box component="p">BUIDLer</Box>
        </Box>
      </Box>
    </CustomCard>
  );
};

export default UserInfoWidget;
