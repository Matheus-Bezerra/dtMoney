import React from 'react'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import LogoImg from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImg} alt="Logo Dt Money" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
