import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { TechProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const SectionTech = ({ title, techs }: TechProps) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{title}</Heading>
      <S.IconsContainer>
        {techs.map(({ title, image }) => (
          <S.Icon key={title}>
            <S.Icons src={getImageUrl(image.url)} alt={title} loading="lazy" />
            <S.IconsName>{title}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
