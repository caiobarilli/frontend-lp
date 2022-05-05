import React from 'react'

import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaTwitter, FaFacebook } from 'react-icons/fa'

import * as S from './styles'
import { getImageUrl } from 'utils/getImageUrl'

const icons = {
  twitter: <FaTwitter />,
  github: <GrGithub />,
  facebook: <FaFacebook />,
  dribbble: <FaDribbble />
}

type socialLinks = {
  socialNetwork: string
  url: string
}
type Props = {
  id: number
  fullname: string
  role: string
  photo: string
  socialLinks: socialLinks[]
  description: string
}

const ProfileCard: React.FC<Props> = ({
  id,
  fullname,
  role,
  photo,
  socialLinks,
  description
}) => (
  <S.Card key={`${id}`}>
    <S.Image>
      <source srcSet={getImageUrl(`${photo}?webp`)} type="image/webp" />
      <source srcSet={getImageUrl(`${photo}`)} type="image/png" />
      <img src={getImageUrl(`${photo}`)} loading="lazy" alt={fullname} />
    </S.Image>
    <S.Name>{fullname}</S.Name>
    <S.Role>{role}</S.Role>
    <S.SocialLinks>
      {socialLinks.map((item) => (
        <S.Link key={item.url}>
          <a href={item.url} title={item.url}>
            {icons[item.socialNetwork]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>
    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard
