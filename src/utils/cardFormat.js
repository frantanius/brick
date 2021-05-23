export function numberOnly(params) {
  return params.replace(/[^0-9]/g, '')
}

export function expiryFormat(params) {
  return numberOnly(params)
    .replace(
      /^([2-9])$/g,
      '0$1', // To handle 3 > 03
    )
    .replace(
      /^(1{1})([3-9]{1})$/g,
      '0$1/$2', // 13 > 01/3
    )
    .replace(
      /^0{1,}/g,
      '0', // To handle 00 > 0
    )
    .replace(
      /^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g,
      '$1/$2', // To handle 113 > 11/3
    )
}

export function creditCardFormat(params) {
  return numberOnly(params)
    .replace(/(.{4})/g, '$1 ')
    .trim()
}

export function creditCardType(params) {
  const number = params.replace(/\s/g, '')
  const visa = new RegExp('^4[0-9]{12}(?:[0-9]{3})?$')
  const mastercard = new RegExp('^5[1-5][0-9]{14}$')
  const mastercard2 = new RegExp('^2[2-7][0-9]{14}$')

  if (visa.test(number)) {
    return 'VISA'
  }

  if (mastercard.test(number) || mastercard2.test(number)) {
    return 'MASTERCARD'
  }

  return undefined
}

export function ccGenerator() {
  let pos
  let str = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  let sum = 0
  let final_digit = 0
  let t = 0
  let len_offset = 0
  let len = 0
  let issuerIndex = Math.floor(Math.random() * 3)
  let issuers = ['Mastercard', 'Visa']
  let issuer = issuers[issuerIndex]

  // Visa
  if (issuer === 'Visa') {
    str[0] = 4
    pos = 1
    len = Math.random() > 0.5 ? 16 : 13
  }

  // Mastercard
  if (issuer === 'Mastercard') {
    str[0] = 5
    t = Math.floor(Math.random() * 5) % 5
    str[1] = 1 + t // Between 1 and 5.
    pos = 2
    len = 16
  }

  while (pos < len - 1) str[pos++] = Math.floor(Math.random() * 10) % 10

  // Calculate the Luhn checksum of the values thus far.
  len_offset = (len + 1) % 2
  for (pos = 0; pos < len - 1; pos++) {
    if ((pos + len_offset) % 2) {
      t = str[pos] * 2
      if (t > 9) {
        t -= 9
      }
      sum += t
    } else {
      sum += str[pos]
    }
  }

  // Choose the last digit so that it causes the entire string to pass the checksum.
  final_digit = (10 - (sum % 10)) % 10
  str[len - 1] = final_digit
  t = str.join('')
  t = t.substr(0, len)

  // if (!t) return
  return t
}
