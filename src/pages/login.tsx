import React from 'react'
import { Container } from '../styles/pages/login'

const Home: React.FC = () => {
  return (
    <Container>
      <form className="box" action="/">
        <h1>Login</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Login" />
        {/* <input type="submit" value="Register" /> */}
      </form>
    </Container>
  )
}

export default Home
