import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  FormControlLabel,
  Tabs,
  Tab,
  Typography,
  Box,
  IconButton,
  TextField,
  Checkbox,
  InputAdornment,
  alpha,
} from "@pankod/refine-mui";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import MailIcon from "@mui/icons-material/Mail";
import green from "@mui/material/colors/green";
import ArrowForward from "@mui/icons-material/ArrowForward";
import GoogleIcon from "@mui/icons-material/Google";
import { useDispatch } from "react-redux";
import { isValidEmail } from "../Register/Helper";
import { useLogin } from "@pankod/refine-core";
import supabaseClient from "utils/supabaseClient";
import GitHubIcon from "@mui/icons-material/GitHub";

const Login = () => {
  const [tab, setTab] = useState(0);

  const { mutate } = useLogin();

  const dispatch = useDispatch();
  useEffect(() => {
    const { data: authListener } = supabaseClient.auth.onAuthStateChange(
      (_event: any, _session: any) => {
        checkUser();
      }
    );
    return () => {
      authListener?.subscription.unsubscribe();
    };
    // eslint-disable-next-line
  }, []);
  async function checkUser() {
    const {
      data: { user },
    } = await supabaseClient.auth?.getUser();
    if (user) {
      mutate({
        email: user.email,
        password: user.email,
        dispatch: dispatch,
      });
    }
  }
  async function signInWithGithub() {
    await supabaseClient.auth?.signInWithOAuth({
      provider: "github",
    });
  }
  async function signInWithGoogle() {
    await supabaseClient.auth?.signInWithOAuth({
      provider: "google",
    });
  }
  const [values, setValues] = useState({
    email: "test@test.com",
    password: "test@test.com",
    showPassword: false,
    agree: true,
  });

  const [errorValues, setErrorValues] = useState({
    emailError: "",
    passwordError: "",
    agreeError: "",
  });

  const handleChange =
    (prop: string) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  const handleErrorChange = (prop: string) => (event: any) => {
    if (typeof event == "string")
      setErrorValues({ ...errorValues, [prop]: event });
    else setErrorValues({ ...errorValues, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleClickAgree = () => {
    setValues({
      ...values,
      agree: !values.agree,
    });
  };

  const handleMouseDownPassword = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };
  const handleLogin = async () => {
    const { error } = await supabaseClient.auth?.signInWithPassword({
      email: values.email,
      password: values.password,
    });

    if (!error) {
      mutate({
        email: values.email,
        password: values.password,
        dispatch: dispatch,
      });
    } else {
      console.log(error);
    }
  };
  const handleSubmit = async () => {
    if (!isValidEmail(values.email)) {
      handleErrorChange("emailError")("Email address must be valid!");
    } else if (!values.password) {
      handleErrorChange("passwordError")("Password is required!");
    } else {
      await handleLogin();
    }
  };

  const handleChangeTab = (
    _event: any,
    value: React.SetStateAction<number>
  ): void => {
    setTab(value);
  };

  return (
    <Box
      sx={{
        padding: 3,
        textAlign: "center",
        backgroundColor: alpha("#000", 0.8),
        color: "text.primary",
        backgroundRepeat: "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        borderRadius: 0,
        height: "876px",
        width: { lg: 1024, sm: 1024, xs: 1024 },
      }}
    >
      <Typography variant="h4" color="primary" gutterBottom>
        Login
      </Typography>
      <Typography
        variant="caption"
        sx={{
          fontSize: 14,
        }}
        gutterBottom
        align="center"
      >
        Welcome Back!
      </Typography>
      <Tabs
        value={tab}
        onChange={handleChangeTab}
        indicatorColor="primary"
        textColor="primary"
        centered
        sx={{
          margin: "3px 0 30px",
        }}
      >
        <Tab label="Email" value={0} />
        <Tab label="Socials" value={1} />
      </Tabs>
      {tab === 0 && (
        <Box component="section">
          <Box component="form" noValidate autoComplete="off">
            <Box>
              <FormControl
                sx={{
                  width: "100%",
                  marginBottom: 4,
                }}
              >
                <TextField
                  name="email"
                  id="email"
                  required
                  error={Boolean(errorValues.emailError)}
                  placeholder="Email"
                  label="Email"
                  fullWidth={true}
                  value={values.email}
                  variant="outlined"
                  onChange={(
                    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                  ) => {
                    handleChange("email")(e);
                    handleErrorChange("emailError")("");
                  }}
                  helperText={errorValues.emailError}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" variant="standard">
                        <IconButton aria-label="Email" edge="end" disabled>
                          <MailIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl
                sx={{
                  width: "100%",
                  marginBottom: 4,
                }}
              >
                <TextField
                  name="password"
                  id="password"
                  required
                  error={Boolean(errorValues.passwordError)}
                  placeholder="Password"
                  label="Password"
                  fullWidth={true}
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  variant="outlined"
                  onChange={(
                    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                  ) => {
                    handleChange("password")(e);
                    handleErrorChange("passwordError")("");
                  }}
                  helperText={errorValues.passwordError}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                    startAdornment: (
                      <InputAdornment position="start" variant="standard">
                        <IconButton aria-label="Email" edge="end" disabled>
                          <LockIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </Box>
            <Box
              sx={{
                marginBottom: 4,
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    name="checkbox"
                    required
                    checked={values.agree}
                    onChange={(
                      e: React.ChangeEvent<
                        HTMLInputElement | HTMLTextAreaElement
                      >
                    ) => {
                      handleClickAgree();
                      handleErrorChange("agreeError")("");
                    }}
                    sx={{}}
                  />
                }
                label="I agree to"
              />

              <Box
                component="a"
                href="/"
                sx={{
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                  marginLeft: -1,
                }}
              >
                <Typography variant="subtitle2" color="primary">
                  Code of Conduct
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                margin: "2px 0",
                fontSize: 12,
                "& button": {
                  width: { xs: "100%" },
                  margin: "10px 0px 30px",
                },
                flexDirection: { xs: "column" },
              }}
            >
              <Button
                variant="contained"
                fullWidth
                color="primary"
                onClick={handleSubmit}
              >
                Submit
                <ArrowForward
                  sx={{
                    marginLeft: 1,
                    fontSize: 20,
                  }}
                />
              </Button>
            </Box>
          </Box>
        </Box>
      )}
      {tab === 1 && (
        <Box
          component="section"
          sx={{
            textAlign: "center",
            width: "100%",
            margin: "30px 1px",
            "& button": {
              width: { xs: "100%", sm: 400 },
              display: "block",
              margin: "30px auto 10px",
            },
          }}
        >
          <Button
            fullWidth
            variant="outlined"
            size="large"
            sx={{
              borderColor: green[500],
              "&:hover": {
                borderColor: green[700],
              },
            }}
            onClick={signInWithGoogle}
            type="button"
          >
            <GoogleIcon
              sx={{
                marginTop: "3px",
                color: "text.primary",
                fontSize: 20,
              }}
            />
          </Button>
          <Button
            fullWidth
            variant="outlined"
            size="large"
            sx={{
              borderColor: green[500],
              "&:hover": {
                borderColor: green[700],
              },
            }}
            onClick={signInWithGithub}
            type="button"
          >
            <GitHubIcon
              sx={{
                marginTop: "3px",
                color: "text.primary",
                fontSize: 20,
              }}
            />
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Login;
