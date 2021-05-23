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
const TitlePage = styled.h1`
  position: absolute;
  top: 5%;

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
    top: 0;
    z-index: 5;
  }
`

export default function Layout({ title, children }) {
  return (
    <Background>
      <TitlePage>{title}</TitlePage>
      {children}
    </Background>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
