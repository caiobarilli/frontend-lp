import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { CourseProps } from 'types/api'

const SectionConcepts = ({ title, courses }: CourseProps) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{title}</Heading>
      <S.List>
        {courses.map(({ id, description }) => (
          <S.Item key={id}>{description}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConcepts
