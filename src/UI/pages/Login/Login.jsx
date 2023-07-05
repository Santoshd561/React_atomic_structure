import React, { useState } from "react";
import {Box, Button, IconButton, InputAdornment, Typography } from "@mui/material";
import styles from "./Login.module.css";
import { BootstrapInput } from "../../atoms";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { isValidEmail } from "../../../utils/helper";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../../../redux/asyncThunks";

export const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [signInLoading, setSignInLoading] = useState(false);

  const { loginResults } = useSelector((state) => state.auth)

  const handleSignIn = () => {
    if (!isValidEmail(email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
    }
    if (password === "") {
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }
    if (!isEmailValid || !isPasswordValid) {
      return;
    }
    
    if (isEmailValid && isPasswordValid) {
      // request for oAuth 
      const oAuthRequest = {
        RequestInfo: {
          apiId: "string",
          ver: "string",
          ts: 0,
          action: "string",
          did: "string",
          key: "string",
          msgId: "string",
          requesterId: "string",
          authToken: "string",
        },
        Login: {
          username: email,
          password: password,
          grantType: "string",
          userType: "AWAK-ADMIN",
        },
      };
      setSignInLoading(true);
      dispatch(loginAsync(oAuthRequest))
      setSignInLoading(false);

      // validate if login was successful      
    }
  };

  return (
    <div id="continer" className={styles.container}>
      <Typography
        id="sign-in-Text"
        variant="h5"
        sx={{ fontWeight: "bold", color: "#858585" }}
      >
        Sign In
      </Typography>
      <div id="login-components" className={styles.loginComponents}>
        {/* email feild */}
        <div
          id="input-container"
          className={
            isEmailValid ? styles.inputContainer : styles.inputContainerError
          }
        >
          <BootstrapInput
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            fullWidth
            autoFocus
          />
        </div>
        {/* password feild */}
        <div
          id="input-container"
          className={
            isPasswordValid ? styles.inputContainer : styles.inputContainerError
          }
        >
          <BootstrapInput
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            fullWidth
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  className={styles.eye}
                  aria-label="Toggle Password Visibility"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                >
                  {showPassword ? (
                    <VisibilityIcon sx={{ color: "black", fontSize: 20 }} />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
        {/* sign in button */}
        {signInLoading ? (
          <Button variant="contained" className={styles.loadButton}>
            <CircularProgress style={{ color: "white" }} size="1.2rem" />
          </Button>
        ) : (
          <Button
            onClick={handleSignIn}
            variant="contained"
            className={styles.loadButton}
          >
            Sign In
          </Button>
        )}
      </div>
      <Box className={styles.dialogRoot}  flexDirection="column" justifyContent="center" alignItems="center" display="flex">
          <Typography className={styles.terms} >Version:<span >v1.0</span> </Typography>
          <Typography className={styles.terms}>Build Number:1000</Typography>
        </Box>
    </div>
  );
};
