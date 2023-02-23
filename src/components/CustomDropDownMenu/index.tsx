import CustomMenu from "./CustomMenu";
import CustomAvatar from "../CustomAvatar";

import { Box } from "@pankod/refine-mui";
import supabaseClient from "utils/supabaseClient";

import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useLogout, useTranslate } from "@pankod/refine-core";

const CustomDropDownMenu = (): JSX.Element => {
  const t = useTranslate();
  const { mutate: mutateLogout } = useLogout();

  const actionsList = [
    {
      icon: <PersonIcon />,
      label: t("buttons.account", "Account"),
    },
    {
      icon: <ExitToAppIcon />,
      label: t("buttons.logout", "Logout"),
    },
  ];

  const onItemClick = async (item: { label: string }) => {
    if (item.label === t("buttons.logout", "Logout")) {
      mutateLogout();
      await supabaseClient.auth?.signOut();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 1,
        paddingRight: 1,
        position: "relative",
      }}
    >
      <CustomMenu
        onItemClick={onItemClick}
        Component={
          <CustomAvatar
            size="medium"
            src=""
            alt=""
            className=""
            color="random"
            phCharLength={1}
          />
        }
        items={actionsList}
      />
    </Box>
  );
};

export default CustomDropDownMenu;
