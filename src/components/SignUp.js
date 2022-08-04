import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const theme = createTheme();

export default function SignUp() {
  let user = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobileNo: "",
    gender: "",
    dateofbirth: "",
  };

  const [datevalue, setdateValue] = React.useState(new Date());

  // let name, value;
  // const handleInputChage = (e) => {
  //   name = e.target.name;
  //   value = e.target.value;
  //   console.log(name);
  //   setUser({ ...user, [name]: value });
  //   trigger(name)
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (event) => {
    // console.log(event);
    const date = new Date(datevalue);
    Object.assign(user, event);
    user.dateofbirth =
      date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();

    console.log(user);
    reset();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            pt: 2,
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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 1 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register("firstName", {
                    required: "First Name is Requires",
                    pattern: {
                      value: /^[a-zA-Z]{2,}$/,
                      message: "Enter a valid Name",
                    },
                  })}
                  name="firstName"
                  required
                  helperText={errors.firstName && errors.firstName.message}
                  error={errors.firstName}
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  // value={user.firstName}
                  // onChange={handleInputChage}
                  onKeyUp={() => {
                    trigger("firstName");
                  }}
                />

                {/* {errors.firstName && (
                  <span className="error-message">
                    {errors.firstName.message}
                  </span>
                )} */}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register("lastName", {
                    required: "Last Name is Requires",
                    pattern: {
                      value: /^[a-zA-Z]{2,}$/,
                      message: "Enter a valid Surname",
                    },
                  })}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  helperText={errors.lastName && errors.lastName.message}
                  error={errors.lastName}
                  // value={user.lastName}
                  // onChange={handleInputChage}
                  onKeyUp={() => {
                    trigger("lastName");
                  }}
                />
                {/* {errors.lastName && (
                  <span className="error-message">
                    {errors.lastName.message}
                  </span>
                )} */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("email", {
                    required: "Email is Requires",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._+%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i,
                      message: "Enter a valid Email",
                    },
                  })}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  helperText={errors.email && errors.email.message}
                  error={errors.email}
                  // value={user.email}
                  // onChange={handleInputChage}
                  onKeyUp={() => {
                    trigger("email");
                  }}
                />
                {/* {errors.email && (
                  <span className="error-message">{errors.email.message}</span>
                )} */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("password", {
                    required: "Password is Requires",
                    minLength: {
                      value: 5,
                      message: "Password must contain 5 character",
                    },
                  })}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  helperText={errors.password && errors.password.message}
                  error={errors.password}
                  // value={user.password}
                  // onChange={handleInputChage}
                  onKeyUp={() => {
                    trigger("password");
                  }}
                />
                {/* {errors.password && (
                  <span className="error-message">
                    {errors.password.message}
                  </span>
                )} */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("mobileNo", {
                    required: "Mobile No is Requires",
                    pattern: {
                      value: /^[0-9]{10,12}$/,
                      message: "Enter a valid Number",
                    },
                  })}
                  required
                  fullWidth
                  name="mobileNo"
                  label="Mobile No"
                  type="number"
                  id="mobileNo"
                  helperText={errors.mobileNo && errors.mobileNo.message}
                  error={errors.mobileNo}
                  // value={user.mobileNo}
                  // onChange={handleInputChage}
                  onKeyUp={() => {
                    trigger("mobileNo");
                  }}
                />
                {/* {errors.mobileNo && (
                  <span className="error-message">
                    {errors.mobileNo.message}
                  </span>
                )} */}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  {...register("gender", {
                    required: "Select a gender",
                  })}
                  select
                  fullWidth
                  variant="outlined"
                  label="Gender"
                  name="gender"
                  defaultValue="Male"
                  // value={user.gender}
                  // onChange={handleInputChage}
                  onKeyUp={() => {
                    trigger("gender");
                  }}
                >
                  <MenuItem key="male" value="Male">
                    Male
                  </MenuItem>
                  <MenuItem key="female" value="Female">
                    Female
                  </MenuItem>
                  <MenuItem key="other" value="Other">
                    Others
                  </MenuItem>
                </TextField>
                {errors.gender && (
                  <span className="error-message">{errors.gender.message}</span>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    disableFuture
                    required
                    label="Date of Birth"
                    openTo="day"
                    name="dateofbirth"
                    views={["year", "month", "day"]}
                    value={datevalue}
                    onChange={(newValue) => {
                      setdateValue(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField style={{ width: "100%" }} {...params} />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright  /> */}
      </Container>
    </ThemeProvider>
  );
}
