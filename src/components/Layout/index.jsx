import styled from 'styled-components'
import PropTypes from 'prop-types'

const Background = styled.div`
  color: #ffffff;
  background: linear-gradient(to bottom, #245e69, #85aeaa);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

export default function Layout({ children }) {
  return (
    <Background>
      {children}
    </Background>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
}
