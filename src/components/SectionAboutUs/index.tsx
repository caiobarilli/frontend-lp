import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import * as S from './styles'
import { TeamProps } from 'types/api'

const SectionAboutUs = ({ title, authors }: TeamProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>
    <S.Content>
      {authors.map(
        ({ id, fullName, role, photo, socialNetworks, description }) => (
          <ProfileCard
            key={id}
            id={id}
            fullname={fullName}
            role={role}
            photo={photo.url}
            socialLinks={socialNetworks}
            description={description}
          />
        )
      )}
    </S.Content>
  </Container>
)

export default SectionAboutUs
