import React from 'react'
import Head from 'next/head';
import { Box, Button } from '@mui/material';
import { Container } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Login = () => {
  return (
    <>
        <Head>
            <title>WebStudy-LoginPage</title>
        </Head>

        <Box
        component="main"
        sx={{
            alignItems: 'center',
            display: 'flex',
            minHeight: '100%'
        }}
        >
 
        </Box>

        <Container>
        <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
        >
                testee
        </Button>
        </Container>
            
    </>
  )
}

export default Login;
