import React from 'react'
import Head from 'next/head';
import NextLink from 'next/link';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Login = () => {
  return (
    <>
      <Head>
        <title>Login | PortFolio</title>
      </Head>
        <Grid 
        container
        spacing={3}
        // justifyContent="center"
        // alignItems="center"
        >
          <Grid container item>
            <Grid xs={12}>
              <NextLink
                href="/login"
                passHref>
                <Button
                  component="a"
                  startIcon={<ArrowBackIcon fontSize="small" />}>
                  Home Page
                </Button>
              </NextLink>
            </Grid>
          </Grid>
          <Grid container item> 
            <Grid xs={12}>
              <Typography 
              variant="h4"
              color="primary">
                Hello
              </Typography>
            </Grid>
          </Grid>
          <Grid container item>
            <Grid  xs={8}>
              <TextField 
              id="outlined-basic" 
              label="Email Address" 
              variant="outlined" 
              fullWidth/>
            </Grid>
          </Grid>
          <Grid container item>
            <Grid xs={8}>
              <TextField 
              id="outlined-basic" 
              label="Password" 
              variant="outlined" 
              fullWidth/>
            </Grid>
          </Grid>
          <Grid container item>
            <Grid xs={8}>
              <Button
              color="primary"
              fullWidth
              size="large"
              type="submit"
              variant="contained">
                Sing In
              </Button>
            </Grid>
          </Grid>
      </Grid>
    </>
  )
}

export default Login;
