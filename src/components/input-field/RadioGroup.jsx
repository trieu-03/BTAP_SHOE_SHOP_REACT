import React from 'react'
import './input.scss'
function RadioGroup(props) {
    
  return (
    <>
       <div className="gender_choosen d-flex align-content-center">
                <p className='label_form lable_gender'>Gender: </p>
                <div className="form-check">
                  <label className="form-check-label lable_radio label_form text-center" htmlFor="male">
                  <input className="form-check-input" type="radio" name="gender" id="male"
                 
                 />
                  <span className="design"></span>
                    <span className='value_gender'>Male</span>
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label lable_radio label_form" htmlFor="female">
                  <input className="form-check-input" type="radio" name="gender" id="female" 
                 
                 />
                  <span className="design"></span>
                    <span className='value_gender'>Female</span>
                  </label>
                </div>
              </div>
    </>
  )
}

export default RadioGroup