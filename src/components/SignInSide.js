import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./SignInSide.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SignUp from "./SignUp";
import LoginForm from "./LoginForm";
import ForgetForm from "./ForgetForm";

const theme = createTheme();

export default function SignInSide() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh',  pt : 8}}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              
              backgroundImage: "url(https://source.unsplash.com/random)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Routes>
              <Route path="*" element={<LoginForm />}></Route>
              <Route exact path="/Forgot" element={<ForgetForm />}></Route>
              <Route exact path="/Signup" element={<SignUp />} />
            </Routes>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Router>
  );
}
