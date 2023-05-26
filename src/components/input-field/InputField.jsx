import React from 'react'
import './input.scss'
function InputField(props) {
    const {title, field} = props;
  return (
    <>
         <div className="form-group">
                <label  className='label_form' htmlFor={field}>{title}</label>
                <input type="text" className='form-control input_form' placeholder={title} id={field} name={field} 
                
                />
                <p className='validate'>validate</p>
              </div>
    </>
  )
}

export default InputField