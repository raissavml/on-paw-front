import React, { useState } from 'react';
import styled from 'styled-components';
import { FiLock, FiMail } from 'react-icons/fi';
import homeImage from '../images/home.svg';
import Button from '../components/Button';
import Input from '../components/Input';
import Text from '../components/Text';
import ButtonLink from '../components/ButtonLink';

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
  gap: 16px;
  width: 30%;
  height: 30%;
  padding: 16px;
  margin-bottom: 30%;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  color: var(--color-black);
  background-color: var(--color-white);
  opacity: 93%;

  p {
    margin-bottom: 24px;
  }

  #submit-form {
    margin-top: 32px;
    width: 100%;
  }
`;

const Login = () => {
  const [formType, setFormType] = useState('login');

  const formMap = {
    login: {
      title: 'Faça seu login e encontre tudo o que seu pet precisa!',
      inputs: [
        { icon: FiMail, placeholder: 'Email' },
        { icon: FiLock, placeholder: 'Senha' }
      ],
      submit: 'Entrar',
      links: [
        { type: 'register', text: 'Cadastre-se' },
        { type: 'forgotPassword', text: 'Esqueci a senha' }
      ]
    },
    register: {
      title: 'Faça seu cadastro para acessar a plataforma!',
      inputs: [
        { icon: FiMail, placeholder: 'Email' },
        { icon: FiLock, placeholder: 'Senha' },
        { icon: FiLock, placeholder: 'Confirme a senha' }
      ],
      submit: 'Cadastrar',
      links: [
        { type: 'login', text: 'Entrar' },
        { type: 'forgotPassword', text: 'Esqueci a senha' }
      ]
    },
    forgotPassword: {
      title: 'Digite seu email para recuperar sua senha.',
      inputs: [{ icon: FiMail, placeholder: 'Email' }],
      submit: 'Enviar email',
      links: [
        { type: 'login', text: 'Entrar' },
        { type: 'register', text: 'Cadastre-se' }
      ]
    }
  };

  return (
    <Background>
      <LogoContainer>
        <h1>LOGO</h1>
        <h3>Tudo para amantes de pets em um só lugar!</h3>
      </LogoContainer>
      <Form>
        <Text size="20px">{formMap[formType].title}</Text>
        {formMap[formType].inputs.map(input => (
          <Input Icon={input.icon} placeholder={input.placeholder} />
        ))}
        <Button id="submit-form">{formMap[formType].submit}</Button>
        <ButtonsContainer>
          {formMap[formType].links.map(link => (
            <ButtonLink onClick={() => setFormType(link.type)}>{link.text}</ButtonLink>
          ))}
        </ButtonsContainer>
      </Form>
    </Background>
  );
};

export default Login;
