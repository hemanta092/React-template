import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import "./SignInSide.css";
import Copyright from "./Copyright";
import { Link } from "react-router-dom";

export default function ForgetForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <Box
      sx={{
        pt: 6,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Reset Password
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 ,px:4.5}}>
        <TextField
          {...register("email", {
            required: "Email is Requires",
            pattern: {
              value: /^[a-zA-Z0-9._+%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i,
              message: "Enter a valid Email",
            },
          })}
          margin="normal"
          fullWidth
          id="email"
          error={errors.email}
          label="Email Address *"
          name="email"
          helperText={errors.email && errors.email.message}
          autoFocus
          onKeyUp={() => {
            trigger("email");
          }}
        />
        {/* {errors.email && (
        <span className="error-message">{errors.email.message}</span>
      )} */}

        <TextField
          {...register("conEmail", {
            required: "Confirm Email is Requires",
            pattern: {
              value: /^[a-zA-Z0-9._+%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i,
              message: "Enter a valid Email",
            },
            validate: {
              conEmail: (value) =>
                value === getValues().email || "Email does not match",
            },
          })}
          margin="normal"
          fullWidth
          id="conEmail"
          label="Confirm Email Address *"
          name="conEmail"
          error={errors.conEmail}
          type="password"
          helperText={errors.conEmail && errors.conEmail.message}
          onKeyUp={() => {
            trigger("conEmail");
          }}
        />
        {/* {errors.conEmail && (
        <span className="error-message">{errors.conEmail.message}</span>
      )} */}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Send Mail
        </Button>
        <Grid container>
          <Grid item xs>
            <Link to="/" variant="body2">
              Sign In
            </Link>
          </Grid>
          <Grid item>
            <Link to="/Signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
        <Copyright sx={{ mt: 15 }} />
      </Box>
    </Box>
  );
}
