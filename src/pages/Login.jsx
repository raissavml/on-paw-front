import React from 'react';
import styled from 'styled-components';
import { FiLock, FiMail } from 'react-icons/fi';
import homeImage from '../images/home.svg';
import Button from '../components/Button';
import Input from '../components/Input';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${homeImage});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 30%;
  height: 30%;
  margin-bottom: 25%;

  color: white;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 30%;
  height: 30%;
  padding: 16px;
  margin-bottom: 25%;

  color: var(--color6);
  background-color: var(--color3);
  opacity: 93%;
`;

const Login = () => (
  <Background>
    <LogoContainer>
      <h1>LOGO</h1>
      <h3>Tudo para amantes de pets em um só lugar!</h3>
      <ButtonsContainer>
        <Button>Cadastre-se</Button>
        <Button>Esqueci a senha</Button>
      </ButtonsContainer>
    </LogoContainer>
    <Form>
      <h2>Login</h2>
      <Input Icon={FiMail} placeholder="Email" />
      <Input Icon={FiLock} placeholder="Password" />
      <Button>Entrar</Button>
    </Form>
  </Background>
);

export default Login;
