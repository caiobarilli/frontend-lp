import React from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import * as S from './styles'
import { AboutProps } from 'types/api'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = ({ cardPlans }: AboutProps) => (
  <>
    {cardPlans.map(
      ({
        id,
        fullPrice,
        parcels,
        parcelPrice,
        price,
        content,
        ButtonText,
        ButtonUrl
      }) => (
        <S.Box key={id}>
          <S.Prices>
            <S.FullPrice>
              De <span>R${fullPrice}</span> por apenas
            </S.FullPrice>
            <S.DiscountPrice>
              <span>{parcels}x de</span> R${parcelPrice}
            </S.DiscountPrice>
          </S.Prices>
          <S.BenefitsList dangerouslySetInnerHTML={{ __html: content }} />
          <Button href={ButtonUrl} onClick={onClick} withPrice>
            <p>{ButtonText}</p>
            <div>
              <S.ButtonFullPrice>R${fullPrice}</S.ButtonFullPrice>
              <S.ButtonDiscountPrice>R${price}</S.ButtonDiscountPrice>
            </div>
          </Button>
        </S.Box>
      )
    )}
  </>
)

export default PricingBox
