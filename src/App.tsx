import React from "react";

import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  RefineSnackbarProvider,
  CssBaseline,
  GlobalStyles,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-mui";
import dataProvider from "@pankod/refine-simple-rest";
import { MuiInferencer } from "@pankod/refine-inferencer/mui";
import routerProvider, {
  BrowserRouterComponent,
} from "@pankod/refine-react-router-v6";
import { useTranslation } from "react-i18next";
import { ColorModeContextProvider } from "./contexts";
import { Title, Sider, Layout, Header } from "./components/layout";
import { authProvider } from "./authProvider";
import TableRowsIcon from "@mui/icons-material/TableRows";
import FeedIcon from "@mui/icons-material/Feed";
import PeopleIcon from "@mui/icons-material/People";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function App() {
  const { t, i18n } = useTranslation();
  const DashboardPage = React.lazy(() => import("./pages/Dashboard"));
  const Register = React.lazy(() => import("./pages/Register"));
  const Login = React.lazy(() => import("./pages/Login"));
  // TODO: build a custom footer
  const CustomFooter = () => <div></div>;
  const SocialsWidget = React.lazy(() => import("./components/SocialsWidget"));
  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <ColorModeContextProvider>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
      <RefineSnackbarProvider>
        <Refine
          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
          notificationProvider={notificationProvider}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
          resources={[
            {
              name: "Tables",
              icon: (
                <TableRowsIcon
                  sx={{
                    marginLeft: 1.6,
                    marginRight: 2.2,
                    "& > *": { color: "#808191" },
                  }}
                />
              ),
            },
            {
              name: "posts",
              parentName: "Tables",
              list: MuiInferencer,
              options: { route: "posts" },
              icon: <FeedIcon />,
              create: MuiInferencer,
              edit: MuiInferencer,
              show: MuiInferencer,
            },
            {
              name: "users",
              parentName: "Tables",
              options: { route: "users" },
              icon: <PeopleIcon />,
              list: MuiInferencer,
              create: MuiInferencer,
              edit: MuiInferencer,
              canDelete: true,
            },
            {
              name: "Socials",
              list: SocialsWidget,
              icon: <LinkedInIcon sx={{ marginLeft: 0.4, marginRight: 1.2 }} />,
            },
          ]}
          Title={Title}
          Sider={Sider}
          Layout={Layout}
          Header={Header}
          routerProvider={{
            ...routerProvider,
            RouterComponent: BrowserRouterComponent.bind({
              initialRoute: "/",
            }),
            routes: [
              {
                path: "/register",
                element: <Register />,
              },
              {
                path: "/login",
                element: <Login />,
              },
              {
                path: "/dashboard",
                element: <DashboardPage />,
                layout: true,
              },
            ],
          }}
          authProvider={authProvider}
          LoginPage={Login}
          i18nProvider={i18nProvider}
          DashboardPage={DashboardPage}
          Footer={CustomFooter}
        />
      </RefineSnackbarProvider>
    </ColorModeContextProvider>
  );
}

export default App;
