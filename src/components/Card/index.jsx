
import styled from 'styled-components'
import PropTypes from 'prop-types'
import CardFront from './cardFront'
import CardBack from './cardBack'

const CardWrapper = styled.div`
  perspective: 1000px;
  height: 16rem;
`

const Card = styled.div`
  border-radius: 1.5rem;
  color: #ffffff;
  position: relative;
  transition: all .4s linear;
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  background: ${({ type }) => 
    type === 'VISA' ? (
        'linear-gradient(25deg, #0f509e, #1399cd)'
      ) : type === 'MASTERCARD' ? (
        'linear-gradient(25deg,#f37b26, #fdb731)'
      ) : (
        'linear-gradient(25deg, #999, #999)'
      )
  };
  transform: ${({ isFlipped }) => isFlipped && 'rotateY(180deg)'};
`

export default function CreditCard(props) {
  const {
    name,
    number,
    expiration,
    securityCode,
    cardType = 'unknown',
    isFlipped,
  } = props  

  return (
    <CardWrapper>
      <Card 
        isFlipped={isFlipped} 
        type={cardType}
      >
        <CardFront  
          id="front"
          name={name}
          number={number}
          expiration={expiration}
          cardType={cardType}
        />
        <CardBack securityCode={securityCode} />
      </Card>
    </CardWrapper>
  )
}

CreditCard.protoType = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  expiration: PropTypes.string.isRequired,
  securityCode: PropTypes.number.isRequired,
  cardType: PropTypes.oneOf(['unknown', 'VISA', 'MASTERCARD']),
  isFlipped: PropTypes.bool,
}
