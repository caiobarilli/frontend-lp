import React from 'react'
import Slider from 'react-slick'

import Container from 'components/Container'
import Heading from 'components/Heading'
import ReviewCard from 'components/ReviewCard'

import * as S from './styles'
import { ReviewsProps } from 'types/api'

const settings = {
  dots: true,
  arrows: false,
  slidesToShow: 2,
  infinite: false,
  speed: 500,
  rows: 2,
  slidesPerRow: 1,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        rows: 2,
        slidesPerRow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

const SectionReviews = ({ title, reviews }: ReviewsProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      <Slider {...settings}>
        {reviews.map(({ fullname, photo, description }, index) => (
          <ReviewCard
            key={index}
            fullname={fullname}
            photo={photo !== null ? photo.url : null}
            description={description}
            id={index}
          />
        ))}
      </Slider>
    </S.Content>
  </Container>
)

export default SectionReviews
