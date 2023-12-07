import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useContext, useState } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";

const defaultTheme = createTheme();
const LoginFormKyes = {
  Email: 'email',
  Password: 'password',
};

export default function Login() {
  const { loginSubmitHandler } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(''); 

  const { values, onChange, onSubmit } = useForm(
    (values) => loginSubmitHandler(values, setErrorMessage),
    {
      [LoginFormKyes.Email]: '',
      [LoginFormKyes.Password]: '',
    }
  );


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">

        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={onChange}
              value={values[LoginFormKyes.Email]}

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
              onChange={onChange}
              value={values[LoginFormKyes.Password]}

            />
            {errorMessage && (
  <Typography variant="body2" color="error" align="center">
    {errorMessage}
  </Typography>
)}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}