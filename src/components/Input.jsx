import React from 'react'

const Input = ({ type, id, value, placeholder, onChange }) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default Input