import React, {useState} from 'react'

import {useFormik} from 'formik'
import { useNavigate } from 'react-router-dom';

import './register.scss'
import axios from 'axios';
import * as Yup from 'yup'
import trailingIcon from '../../assets/icons/trailingIcon.svg'
import eyelidclose from '../../assets/icons/eyelidclose.png'

const schemaRegister = Yup.object({
	email: Yup.string().email().required('Email is required'),
	name: Yup.string()
		.required('Name is required')
		.min(2, 'Must be at least 2 characters')
		.max(10, 'Must be 10 characters or less'),
	password: Yup.string()
		.required('Password is required')
		.min(2, 'Must be at least 2 characters')
		.max(10, 'Must be 10 characters or less'),
	confirmPassword: Yup.string()
		.required('Confirm Password is required')
		.oneOf([Yup.ref('password')], 'Confirm Password must be matched') 
		.min(2, 'Must be at least 2 characters')
		.max(10, 'Must be 10 characters or less'),
  phone: Yup.number()
    .required('Phone is required')
    .typeError('Phone must be number')
    .positive('Phone input is inappropriate'),

});

 
function Register() {
    const [hide, setHide] = useState(false)
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: { 
            name: '',
            password: '',
            confirmPassword: '',
            phone:'',
            gender: false
        },

        validationSchema: schemaRegister, 
        
        onSubmit: async (values) => {
          try {
            const resp = await axios.post(
              'https://shop.cyberlearn.vn/api/Users/signup',
              {
                email: values.email,
                password: values.password,
                name: values.name,
                gender: values.gender,
                phone: values.phone,
              }
            );

            navigate('/login');

          } catch (err) {
            alert("Email đã được sử dụng")
            console.log(err);
          }
		    },



    })  
  

  return (
    <form className='reg-Container' onSubmit={formik.handleSubmit}> 
      <h1 className='reg-Header'>Register</h1>
      <hr />
      <div className='reg-Form row'>
        <div className='col-md-6 col-sm-12'>
            <div className='reg-Frame mt-2'>
              <h2>Email</h2>
              <input
                  type='text'
                  name='email'
                  placeholder='email'
                  {...formik.getFieldProps('email')}
              />

              {formik.errors.email && formik.touched.email && (
                  <p className='reg-Error'>{formik.errors.email}</p>
              )}
            </div>

            <div className='reg-Frame mt-2'>
              <h2>Password</h2>
              <div  className='reg-Pass'>
                <input type={hide?'text':'password'} name='password' placeholder='password'
                  {...formik.getFieldProps("password")}
                  />

                <button className='reg-Img' type='button'>
                  <img src={hide?trailingIcon:eyelidclose} alt="" onClick={() => {setHide(!hide)}}/>
                </button>

              </div>

              {formik.errors.password && formik.touched.password && (
                  <p className='reg-Error'>{formik.errors.password}</p>
              )}
            
            </div>

            <div className='reg-Frame mt-2'>
              <h2>Confirm Password</h2>
              <input type={hide?'text':'password'} name='confirmPassword' placeholder='password confirm'
                {...formik.getFieldProps("confirmPassword")}
                />

                {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                    <p className='reg-Error'>{formik.errors.confirmPassword}</p>
                )}
            </div>
            
        </div>

      
        <div className='col-md-6 col-sm-12'>
          <div className='reg-Frame mt-2'>
            <h2>Name</h2>
            <input 
              type="text" 
              name='name' 
              placeholder='name'
              {...formik.getFieldProps("name")}
              />

              {formik.errors.name && formik.touched.name && (
                  <p className='reg-Error'>{formik.errors.name}</p>
              )}
          </div>

          <div className='reg-Frame mt-2'>
            <h2>Phone</h2>
            <input 
              type="text" 
              name='phone' 
              placeholder='phone'
              {...formik.getFieldProps("phone")}
              />
              

              {formik.errors.phone && formik.touched.phone && (
                  <p className='reg-Error'>{formik.errors.phone}</p>
              )}
          </div>

          <div className='reg-Gender mt-3 d-flex align-items-center'>
            <h2 className='mr-5'>Gender</h2>
            <div className='text-center mr-5'>
              <div className="reg-Circle">
                <input 
                  type="radio" 
                  name='gender' 
                  value='true'
                  onChange={formik.handleChange}
                  checked
                />
              </div>
              <p>Male</p>
            </div>

            <div className='text-center'>
              <div className="reg-Circle">
                <input 
                  type="radio" 
                  name='gender' 
                  value='false'
                  onChange={formik.handleChange}
                />
              </div>
                <p>Female</p>
              </div>

              {formik.errors.gender && formik.touched.gender && (
                  <p className='reg-Error'>{formik.errors.gender}</p>
              )}
          </div>

          <button className='submit' type='submit'>Submit</button>
        </div>
        
      </div>
      
    </form>
  )
}

export default Register