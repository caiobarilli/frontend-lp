import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { AboutProps } from 'types/api'

const SectionAgenda = ({ title, text }: AboutProps) => (
  <Container id="agenda">
    <Heading reverseColor>{title}</Heading>
    <S.Text dangerouslySetInnerHTML={{ __html: text }} />
  </Container>
)

export default SectionAgenda
