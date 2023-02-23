import { Grid } from "@pankod/refine-mui";
import { Key } from "react";
import ProfileCard from "../CardPaper/ProfileCard";
import { useSelector } from "react-redux";

type TConnectionData = {
  cover: string;
  avatar: string;
  name: string;
  title: string;
  connection: number;
  verified: boolean;
};

const Connection = () => {
  const connectionData: any[] = useSelector(
    (state: any) => state.users.usersList
  );
  return (
    <Grid
      container
      sx={{
        alignItems: "flex-start",
        justifyContent: "space-between",
        direction: "row",
      }}
      spacing={3}
    >
      {connectionData.map(
        (
          data: TConnectionData,
          index: { toString: () => Key | null | undefined }
        ) => (
          <Grid item md={4} sm={6} xs={12} key={index.toString()}>
            <ProfileCard
              cover={data.cover}
              avatar={data.avatar}
              name={data.name}
              title={data.title}
              connection={data.connection}
              isVerified={data.verified}
              btnText="See Profile"
            />
          </Grid>
        )
      )}
    </Grid>
  );
};

export default Connection;
