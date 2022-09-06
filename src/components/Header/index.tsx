import React from 'react';
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles';

import LogoImg from '../../assets/logo.svg';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImg} alt="Logo Dt Money" />
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
};
