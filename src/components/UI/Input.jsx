import React from 'react'
import './CSS/input.css'
import { forwardRef } from 'react'

const input = forwardRef(function Input({label,textarea,...props},ref) {
  return (
    <p className='input-p'>
        <label ref={ref} className='input-lable'>{label}</label>
        {textarea?<textarea ref={ref} className='input-inputfield' {...props}/>:<input ref={ref} className='input-inputfield' {...props}/>}
    </p>
  )
}
)
export default input;