import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { IntroProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const SectionAboutProject = ({ title, text, image }: IntroProps) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image>
          <source srcSet={getImageUrl(image.url)} type="image/webp" />
          <source srcSet={getImageUrl(image.url)} type="image/png" />
          <img
            src={getImageUrl(image.url)}
            loading="lazy"
            alt="Tela do ecommerce com uma imagem do CMS por trás"
          />
        </S.Image>
        <div>
          <Heading>{title}</Heading>
          <S.Text dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
