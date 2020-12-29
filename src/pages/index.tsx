import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'

import SwordIcon from './../assets/Sword.svg'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Buglândia</title>
      </Head>
      <SwordIcon />
      <h1>Buglândia</h1>
      <p>A ReactJS + Next.js application</p>
    </Container>
  )
}

export default Home
