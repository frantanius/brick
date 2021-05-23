import styled from 'styled-components'

const Spacing = styled.div`
 margin-top: ${(({ top }) => top || 'unset' )};
 margin-right: ${(({ right }) => right || 'unset' )};
 margin-bottom: ${(({ bottom }) => bottom || 'unset' )};
 margin-left: ${(({ left }) => left || 'unset' )};
`

export default Spacing
