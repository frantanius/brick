import styled from 'styled-components'

const Column = styled.div`
  flex-basis: 50%;

  @media screen and (max-width: 600px) {
    flex-basis: 100%;
  }
`

export default Column
