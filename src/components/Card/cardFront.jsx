import styled from 'styled-components'

const CardFront = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  border-radius: 1.3rem;
  padding: 1rem 1.7rem;
  overflow: hidden;
`
const PositionRelative = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`
const SectionTop = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const SectionMiddle = styled.section`
  position: absolute;
  bottom: 32%;
  left: 0;
  right: 0;
`
const SectionBottom = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`
const Title = styled.span`
  display: block;
  font-size: 10px;
  margin-bottom: 5px;
  text-transform: none;
  font-weight: normal;
  letter-spacing: normal;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const CardChip = styled.div`
  width: 10%;
  height: 10%;
`

const CardLogo = styled.div`
  width: 15%;
  height: 15%;
`

const CardNumber = styled.div`
  font-size: 1.8rem;
  letter-spacing: 3px;
  font-weight: 700;
`

const CardName = styled.div`
  font-weight: 500;
  text-transform: uppercase;
`
const CardExpiration = styled.div`
  font-weight: 500;
  letter-spacing: 3px;
  width: 24%;
`
const ExpirationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const TitleValid = styled(Title)`
  width: 23%;
  font-size: 8px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 0;
`
const ArrowRightWrapper = styled.div`
  display: flex;
  width: 5%;
`

export default function CardFrontComponent({
  cardType,
  number,
  name,
  expiration,
}) {
  const imgUrl = `${process.env.PUBLIC_URL}/images`
  return (
    <CardFront>
      <PositionRelative>
        <SectionTop>
          <CardChip>
            <Image src={`${imgUrl}/chip.svg`} alt="chip" />
          </CardChip>
          <CardLogo>
            {cardType === 'MASTERCARD' ? (
              <Image src={`${imgUrl}/master.svg`} alt="master-card" />
            ) : cardType === 'VISA' ? (
              <Image src={`${imgUrl}/visa.svg`} alt="master-card" />
            ) : null}
          </CardLogo>
        </SectionTop>
        <SectionMiddle>
          <Title>card number</Title>
          <CardNumber>{number}</CardNumber>
        </SectionMiddle>
        <SectionBottom>
          <CardName>
            <Title>cardholder name</Title>
            {name}
          </CardName>
          <CardExpiration>
            <Title>expiration</Title>
            <ExpirationWrapper>
              <TitleValid>VALID THRU</TitleValid>
              <ArrowRightWrapper>
                <Image src={`${imgUrl}/rightArrow.svg`} alt="right" />
              </ArrowRightWrapper>
              {expiration}
            </ExpirationWrapper>
          </CardExpiration>
        </SectionBottom>
      </PositionRelative>
    </CardFront>
  )
}
