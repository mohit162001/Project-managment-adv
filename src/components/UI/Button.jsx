import React from 'react'
import './CSS/button.css'
function Button({children, ...props}) {
  return (
    <button className='btn' {...props}>
    {children}
    </button>
  )
}

export default Button