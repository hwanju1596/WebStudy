import React from 'react'
import Head from 'next/head';
import NextLink from 'next/link';
import { Button, Stack, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';

const Register = () => {
    return (
        <>
          <Head>
            <title>회원가입 | 포트폴리오</title>
          </Head>
          <Stack   
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}>
            <NextLink
            href="/"
            passHref>
              <Button
                component="a"
                startIcon={<ArrowBackIcon fontSize="small" />}>
                홈
              </Button>
            </NextLink>
            <Typography 
              variant="h4"
              color="primary">
              환영합니다.
            </Typography>
            <TextField 
              id="outlined-basic" 
              label="별명"  
              variant="outlined" 
              fullWidth/>
            <TextField 
              id="outlined-basic" 
              label="이메일" 
              variant="outlined" 
              fullWidth/>
            <TextField 
              id="outlined-basic" 
              label="비밀번호"  
              variant="outlined" 
              fullWidth/>
            <TextField 
              id="outlined-basic" 
              label="비밀번호 확인"  
              variant="outlined" 
              fullWidth/>
           <Button
              color="primary"
              fullWidth
              size="large"
              type="submit"
              variant="contained">
                회원가입
            </Button>
          </Stack>
        </>
    );
}

export default Register;
