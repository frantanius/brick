import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: ${({ gap }) => gap || '1rem'};

  @media screen and (max-width: 600px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`

export default Row
