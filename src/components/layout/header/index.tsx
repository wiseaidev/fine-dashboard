import React, { useContext, useState } from "react";
import {
  useGetIdentity,
  useGetLocale,
  useSetLocale,
} from "@pankod/refine-core";
import {
  AppBar,
  IconButton,
  Avatar,
  Stack,
  FormControl,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  Tooltip,
} from "@pankod/refine-mui";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

import { ColorModeContext } from "contexts";
import i18n from "i18n";
import CustomSearch from "../../CustomSearch";

import CustomDropDownMenu from "../../CustomDropDownMenu";

export const Header: React.FC = () => {
  const { mode, setMode } = useContext(ColorModeContext);

  const changeLanguage = useSetLocale();
  const locale = useGetLocale();
  const currentLocale = locale();

  const { data: user } = useGetIdentity();
  const showUserInfo = user && (user.name || user.avatar);
  const [searchText, setSearchText] = useState("");

  return (
    <AppBar color="default" position="sticky" elevation={1}>
      <Toolbar>
        <Stack
          direction="row"
          width="100%"
          alignItems="center"
          sx={{
            justifyContent: { md: "flex-end", sm: "center", xs: "space-start" },
          }}
        >
          <CustomSearch searchText={searchText} setSearchText={setSearchText} />
          <Tooltip title="Toggle Dark/Light" placement="bottom">
            <IconButton
              onClick={() => {
                setMode();
              }}
            >
              {mode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
            </IconButton>
          </Tooltip>
          <FormControl sx={{ m: 1, minWidth: 10 }}>
            <Select
              disableUnderline
              defaultValue={currentLocale}
              inputProps={{ "aria-label": "Without label" }}
              variant="standard"
            >
              {[...(i18n.languages ?? [])].sort().map((lang: string) => (
                <MenuItem
                  selected={currentLocale === lang}
                  key={lang}
                  defaultValue={lang}
                  onClick={() => {
                    changeLanguage(lang);
                  }}
                  value={lang}
                >
                  <Tooltip title="Change Language" placement="bottom">
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Avatar
                        sx={{
                          width: "16px",
                          height: "16px",
                          marginRight: "5px",
                        }}
                        src={`/images/flags/${lang}.svg`}
                      />
                      {lang === "en" ? "English" : "German"}
                    </Stack>
                  </Tooltip>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {showUserInfo && (
            <Stack direction="row" gap="16px" alignItems="center">
              {user.avatar && <Avatar src={user?.avatar} alt={user?.name} />}
              {user.name && (
                <Typography variant="subtitle2">{user?.name}</Typography>
              )}
            </Stack>
          )}
          <CustomDropDownMenu />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
