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
        <title>로그인 | 포트폴리오</title>
      </Head>
      <Container maxWidth="sm" sx={{ mt: "10%" }}>
        <Grid
          container
          spacing={3}
          sx={{
            p: 2, border: '1px dashed grey'
          }}
        >
          <Grid container item >
            <Grid xs={12}>
              <NextLink
                href="/"
                passHref>
                <Button
                  component="a"
                  startIcon={<ArrowBackIcon fontSize="small" />}>
                  홈
                </Button>
              </NextLink>
            </Grid>
          </Grid>
          <Grid container item>
            <Grid xs={12}>
              <Typography
                variant="h4"
                color="primary">
                안녕하세요.
              </Typography>
            </Grid>
          </Grid>
          <Grid container item>
            <Grid xs={12}>
              <TextField
                id="outlined-basic"
                label="이메일"
                variant="outlined"
                fullWidth />
            </Grid>
          </Grid>
          <Grid container item>
            <Grid xs={12}>
              <TextField
                id="outlined-basic"
                label="비밀번호"
                variant="outlined"
                fullWidth />
            </Grid>
          </Grid>
          <Grid container item>
            <Grid xs={12}>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained">
                로그인
              </Button>
            </Grid>
          </Grid>
          <Grid container item>
            <Grid xs={8}>
              회원이 아니신가요?{' '}
              <NextLink
                href="/register"
              >
                회원가입
              </NextLink>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Login;
