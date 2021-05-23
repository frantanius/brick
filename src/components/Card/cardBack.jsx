import styled from 'styled-components'

const CardBack = styled.div`
  backface-visibility: hidden;
  border-radius: 1.3rem;
  position: absolute;
  transform: rotateY(180deg);
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const PositionRelative = styled.div`
  backface-visibility: hidden;
  padding: 1rem 1.7rem;
  position: relative;
  height: 100%;
  width: 100%;
`
const CardSecurityCode = styled.div`
  color: #222;
  font-size: 14px;
  font-weight: 700;
  position: absolute;
  left: 80%;
  line-height: 1;
  top: 47%;
`
const Stripe = styled.div`
  background-color: #2a1d16;
  position: absolute;
  top: 13%;
  left: 0;
  height: 22%;
  width: 100%;
`
const Signature = styled.div`
  background: repeating-linear-gradient(
    0.1deg,
    #fff 20%,
    #fff 40%,
    #fea 0,
    #fea 44%,
    #fff 0
  );
  height: 18%;
  left: 5%;
  position: absolute;
  top: 40%;
  width: 75%;
`

export default function CardBackComponent({ securityCode }) {
  return (
    <CardBack>
      <Stripe />
      <PositionRelative id="relative">
        <Signature>
          <CardSecurityCode>{securityCode}</CardSecurityCode>
        </Signature>
      </PositionRelative>
    </CardBack>
  )
}
