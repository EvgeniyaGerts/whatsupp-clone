import React from 'react'
import { Toolbar } from '@mui/material'
import styled from 'styled-components'

const Container = styled(Toolbar)`
  background: var(--primary-bg);
  color: var(--primary-text);
  font-size: 20px;
  line-height: 40px;
`

const NavBar: React.FC = () => <Container>Whatsapp Clone</Container>

export default NavBar
