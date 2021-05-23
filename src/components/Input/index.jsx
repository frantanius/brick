import styled from 'styled-components'
import PropTypes from 'prop-types'

const InputStyle = styled.input`
  color: #212529;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: none;
  display: inline-block;
  font-size: 20px;
  outline: none;
  padding: 10px;
  transition: all .4s;
  width: 100%;
  margin: 0;
  &:focus {
    border: 1px solid #5e5ee4;
  }
`

export default function Input({ 
  type = 'text', 
  name,
  id,
  className, 
  placeholder, 
  value,
  onChange, 
  onBlur,
  autoFocus = false,
  disabled = false,
  ...restProps 
}) {
  return (
    <InputStyle 
      type={type} 
      name={name}
      id={id}
      className={className} 
      placeholder={placeholder}
      value={value}
      onChange={onChange} 
      onBlur={onBlur}
      autoFocus={autoFocus}
      disabled={disabled}
      {...restProps}
    />
  )
}

Input.propTypes = {
  type: PropTypes.oneOf([ 'tel', 'text']),
  name: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string, 
  placeholder: PropTypes.string, 
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func, 
  onBlur: PropTypes.func,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
}
