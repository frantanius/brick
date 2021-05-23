import Row from 'components/Row'
import Column from 'components/Column'
import Input from 'components/Input'
import Label from 'components/Label'
import Badge from 'components/Badge'
import Spacing from 'components/Spacing'

export default function Form({
  cardNumber,
  handleChange,
  handleGeneratorCC,
  expiration,
  securityCode,
}) {
  return (
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
  )
}
