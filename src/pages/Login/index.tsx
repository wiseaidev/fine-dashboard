import { Box, Button, Hidden, Typography } from "@pankod/refine-mui";
import Login from "../../components/Login";

const LoginPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        overflow: { sm: "hidden" },
      }}
    >
      <Hidden mdDown>
        <Box
          sx={{
            color: "#fff",
            width: "100%",
            textAlign: "left",
            marginTop: "-120px",
            marginLeft: "100px",
            fontSize: { md: 32 },
            lineHeight: { md: "50px" },
            "& h1": {
              display: "block",
            },
            "& p": {
              color: "#fff",

              fontSize: { md: 18, sm: 14 },
            },
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              color: "#fff",
              width: "100%",
              textAlign: "left",
              marginTop: "-80px",
              marginBottom: "180px",
              fontSize: { md: 32 },
              lineHeight: { md: "50px" },
              "& h1": {
                display: "block",
              },
              "& p": {
                color: "#fff",

                fontSize: { md: 18, sm: 14 },
              },
            }}
            gutterBottom
          >
            Welcome to Fine Dashboard.
          </Typography>
          <Typography variant="h6" component="p" sx={{}}>
            Provide your credentials to get access to the dasboard.
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "red",
              fontSize: 16,
              fontWeight: 500,
              textDecoration: "none",
              margin: { md: 2 },
              "& img": {
                width: 30,
              },
            }}
          ></Box>
          <Box
            sx={{
              fontWeight: 400,
              fontSize: "0.875rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "left",
                justifyContent: "left",
                margin: "2px 0",
                fontSize: 12,
                flexDirection: "row",
                marginTop: "220px",
              }}
            >
              <Typography variant="h6" component="div" sx={{}}>
                Don't have an account yet?
              </Typography>
              <Box
                component="a"
                href="/register"
                sx={{
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  alignItems: "center",
                  marginLeft: -1,
                  marginBottom: -1,
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    marginLeft: 10,
                    marginBottom: 2,
                  }}
                  onClick={() => {}}
                >
                  Sign Up
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              "& a": {
                display: { xs: "none" },
              },
            }}
          ></Box>
        </Box>
      </Hidden>
      <Login />
    </Box>
  );
};

export default LoginPage;
