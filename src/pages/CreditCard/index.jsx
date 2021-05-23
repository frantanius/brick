// Packages
import { useState, useEffect } from 'react'
// Components
import Layout from 'components/Layout'
import Form from 'components/Form'
import Card from 'components/Card'
import Container from 'components/Container'
import Row from 'components/Row'
// Utils
import {
  expiryFormat,
  numberOnly,
  creditCardFormat,
  creditCardType,
  ccGenerator,
} from 'utils/cardFormat'

export default function CreditCard() {
  const [form, setForm] = useState({
    name: '',
    cardNumber: '',
    expiration: '',
    securityCode: '',
    cardType: '',
  })
  const [isFlipped, setIsFlipped] = useState(false)

  const { name, cardNumber, expiration, securityCode, cardType } = form

  const handleChange = (event) => {
    const { name, value } = event.target
    let formattedValue

    switch (name) {
      case 'name':
        formattedValue = value
        break
      case 'cardNumber':
        formattedValue = creditCardFormat(value)

        setForm((prevState) => ({
          ...prevState,
          cardType: creditCardType(value),
        }))
        break
      case 'expiration':
        formattedValue = expiryFormat(value)
        break
      case 'securityCode':
        formattedValue = numberOnly(value)
        break
      default:
        formattedValue = value
        break
    }

    setForm((prevState) => ({
      ...prevState,
      [name]: formattedValue,
    }))
  }

  const handleGeneratorCC = () => {
    const number = ccGenerator()
    const formattedNumber = creditCardFormat(number)
    const cardIssuer = creditCardType(number)

    setForm((prevState) => ({
      ...prevState,
      cardNumber: formattedNumber,
      cardType: cardIssuer,
    }))
  }

  /* 
    Handle event flip
  */
  const handleFlipped = (event) => {
    if (event.target.name === 'securityCode') {
      setIsFlipped(true)
    } else {
      setIsFlipped(false)
    }
  }

  useEffect(() => {
    const inputs = document.querySelectorAll('input')
    inputs.forEach((element) =>
      element.addEventListener('click', handleFlipped),
    )
    // cleanup
    return () => {
      inputs.forEach((element) =>
        element.removeEventListener('click', handleFlipped),
      )
    }
  }, [])

  return (
    <Layout title="Credit Card">
      <Container>
        <Row gap="2rem">
          <Card
            name={name}
            number={cardNumber}
            expiration={expiration}
            securityCode={securityCode}
            cardType={cardType}
            isFlipped={isFlipped}
          />
          <Form
            cardNumber={cardNumber}
            handleChange={handleChange}
            handleGeneratorCC={handleGeneratorCC}
            expiration={expiration}
            securityCode={securityCode}
          />
        </Row>
      </Container>
    </Layout>
  )
}
