import styled from 'styled-components'
import PropTypes from 'prop-types'

const BadgeStyle = styled.button`
  color: #fff;
  background-color: #6c757d;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid #6c757d;
  padding: .3rem;
  font-size: 0.7rem;
  border-radius: .25rem;
`

export default function Badge({ 
  onClick, 
  className, 
  id, 
  children,
  ...restProps 
}) {
  return (
    <BadgeStyle 
      id={id} 
      className={className} 
      onClick={onClick} 
      {...restProps}
    >
      {children}
    </BadgeStyle>
  )
}

Badge.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string, 
  onClick: PropTypes.func, 
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
}
