import { Typography } from '@mui/material';
import type { NextPage } from 'next'
import Head from 'next/head'
import NextLink from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>이환주 | 포트폴리오</title>
      </Head>
      <NextLink
      href="/login">
      <Typography
      color="primary">
        로그인
      </Typography>
      </NextLink>
    </>
  )
}

export default Home
