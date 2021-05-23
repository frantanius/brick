// Packages
import { useState, useEffect } from 'react'
// Components
import Layout from 'components/Layout'
import Card from 'components/Card'
import Input from 'components/Input'
import Label from 'components/Label'
import Badge from 'components/Badge'
import Container from 'components/Container'
import Column from 'components/Column'
import Row from 'components/Row'
import Spacing from 'components/Spacing'
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
    <Layout>
      <Container>
        <Row gap="2rem">
          <Column>
            <Card
              name={name}
              number={cardNumber}
              expiration={expiration}
              securityCode={securityCode}
              cardType={cardType}
              isFlipped={isFlipped}
            />
          </Column>
          <Column>
            <Spacing bottom="1rem">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" onChange={handleChange} />
            </Spacing>
            <Spacing bottom="1rem">
              <Label htmlFor="cardNumber">
                Card Number
                <Badge onClick={handleGeneratorCC}>generate random</Badge>
              </Label>
              <Input
                id="cardNumber"
                name="cardNumber"
                placeholder="xxxx xxxx xxxx xxxx"
                maxLength="19"
                value={cardNumber}
                onChange={handleChange}
              />
            </Spacing>
            <Row>
              <Column>
                <Label htmlFor="expiration">Expiration (mm/yy)</Label>
                <Input
                  id="expiration"
                  name="expiration"
                  placeholder="mm/yy"
                  maxLength="5"
                  value={expiration}
                  onChange={handleChange}
                />
              </Column>
              <Column>
                <Label htmlFor="securityCode">Security Code</Label>
                <Input
                  id="securityCode"
                  name="securityCode"
                  maxLength="3"
                  value={securityCode}
                  onChange={handleChange}
                />
              </Column>
            </Row>
          </Column>
        </Row>
      </Container>
    </Layout>
  )
}
