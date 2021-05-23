export default function AllowedKey(key) {
  const keyboardCode = [
    48, 49, 50, 51, 51, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103,
    104, 105,
  ]

  return keyboardCode.includes(key)
}
