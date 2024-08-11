import React from 'react'

const Button = ({children, type, onClick, color}) => {
  if(type) {
    return <button style={{backgroundColor: color, color: "white"}} type={type} onClick={onClick}>{children}</button>
  }
  return <button style={{backgroundColor: color, color: "white"}} onClick={onClick}>{children}</button>
}

export default Button