import styled from 'styled-components'
import PropTypes from 'prop-types'

const LabelStyle = styled.label`
  color: #ddd;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: .5rem;
`

export default function Label({ 
  htmlFor, 
  className, 
  children, 
  ...restProps 
}) {
  return (
    <LabelStyle htmlFor={htmlFor} className={className} {...restProps}>
      {children}
    </LabelStyle>
  )
}

Label.protoType = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
}
