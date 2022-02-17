import { useEffect, useState } from "react";
import { Paper, Typography, Grid, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <Grid container sx={{ marginTop: "50px" }}>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <Paper
            elevation={2}
            variant="outlined"
            sx={{
              backgroundColor: "white",
              padding: "30px",
              height: "inherit",
            }}
          >
            <Grid container rowSpacing={1} columnSpacing={1}>
              <Grid item xs={12}>
                <Typography>Sign Up</Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={2}>
                    <Typography>Username:</Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <TextField
                      type="text"
                      id="name"
                      label="Username"
                      variant="outlined"
                      required
                      helperText="Incorrect entry."
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={2}>
                    <Typography>Email:</Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <TextField
                      type="email"
                      id="email"
                      label="Email"
                      variant="outlined"
                      value={email}
                      required
                      helperText="Incorrect entry."
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={2}>
                    <Typography>Password:</Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <TextField
                      type="password"
                      id="password"
                      label="Password"
                      variant="outlined"
                      value={password}
                      required
                      helperText="Incorrect entry."
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={2}>
                    <Typography>Confirm Password:</Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <TextField
                      type="password"
                      id="outlined-basic"
                      label="Confirm Password"
                      variant="outlined"
                      value={confirmPassword}
                      required
                      helperText="Incorrect entry."
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" size="medium">
                  Register
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  Already have an account ? <Link to="/login">Login</Link>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4} />
      </Grid>
    </>
  );
};

export default RegisterPage;
