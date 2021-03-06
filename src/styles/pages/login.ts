import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .box {
    width: 300px;
    padding: 40px 0px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${props => props.theme.colors.background};
    background-color: rgba(0, 0, 0, 0.8);
    text-align: center;
    border-radius: 24px;
  }

  .box h1 {
    color: ${props => props.theme.colors.primary};
    text-transform: uppercase;
    font-weight: 500;
  }

  .box input[type='text'],
  .box input[type='password'] {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #3498db;
    padding: 14px 10px;
    width: 200px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
  }

  .box input[type='text']:focus,
  .box input[type='password']:focus {
    width: 280px;
    border-color: #2ecc71;
  }

  .box input[type='submit'] {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #2ecc71;
    padding: 14px 40px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer;
  }

  .box input[type='submit']:hover {
    background: #2ecc71;
  }
`
