import {
  Grid,
  CssBaseline,
  Container,
  Box,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import photo from "./assets/img/photo.jfif";

function App() {
  return (
    <div className="App">
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${photo})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        ></Grid>
        <Grid item xs={12} sm={8} md={5}>
          <Container component="main">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: 8,
              }}
            >
              <Avatar
                sx={{
                  color: "#fff",
                  backgroundColor: "#9c27b0",
                  margin: "8px",
                }}
              >
                <LockOutlinedIcon />
              </Avatar>

              <Typography variant="h5" gutterBottom component="h1">
                Sign in
              </Typography>

              <Box component="form" sx={{ mt: 1 }}>
                <TextField
                  label="Email Address"
                  variant="outlined"
                  margin="normal"
                  id="email"
                  autoComplete="email"
                  autoFocus
                  fullWidth
                  required
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />

                <FormControlLabel control={<Checkbox />} label="Remember me" />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>

                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Typography
              variant="body2"
              color="text.secondary"
              align="center"
              sx={{ mt: 4 }}
            >
              {"Copyright © "}
              <Link color="inherit" href="#">
                Signin Page
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
