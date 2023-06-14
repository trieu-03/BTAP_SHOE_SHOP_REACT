import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { saveLocalStorage } from '../../utils';
import { ACCESS_TOKEN } from '../../constant';
import { useNavigate } from 'react-router-dom';
import trailingIcon from '../../assets/icons/trailingIcon.svg'
import eyelidclose from '../../assets/icons/eyelidclose.png'
import fbIcon from "../../assets/icons/fbIcon.svg"
import "./login.scss"





const schemaLogin = Yup.object({
	email: Yup.string().email().required('Email is required'),
	password: Yup.string()
		.required('Password is required')
		.min(6, 'Must be at least 2 characters')
		.max(10, 'Must be 10 characters or less'),
});


function Login() {
	const [hide, setHide] = useState(false)
 	const navigate = useNavigate();

	const responseFacebook = (response) => { 
		console.log(response)
	}

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},

		validationSchema: schemaLogin,

		onSubmit: async (values) => {
			try {
				const resp = await axios.post(
					'https://shop.cyberlearn.vn/api/Users/signin',
					{
						password: values.password,
						email: values.email,
					}
				);
				saveLocalStorage(ACCESS_TOKEN, resp.data.content.accessToken);

				navigate('/profile');
			} catch (err) {
				alert('Email hoặc password không hợp lệ');
				console.log(err);
			}
		},
	});


  return (
    <form className='log-Container' onSubmit={formik.handleSubmit}>
      <h1 className='log-Header'>Login</h1>
      <hr />
      <div className='d-flex justify-content-center'> 
	  	<div className='log-Form'>
		  	<div className='log-Frame mt-2'>
              <h2>Email</h2>
              <input
                  type='text'
                  name='email'
                  placeholder='email'
                  {...formik.getFieldProps('email')}
              />

              {formik.errors.email && formik.touched.email && (
                  <p className='log-Error'>{formik.errors.email}</p>
              )}
            </div>

            <div className='log-Frame mt-2'>
              <h2>Password</h2>
              <div  className='log-Pass'>
                <input type={hide?'text':'password'} name='password' placeholder='password'
                  {...formik.getFieldProps("password")}
                  />

                <button className='log-Img' type='button'>
                  <img src={hide?trailingIcon:eyelidclose} alt="" onClick={() => {setHide(!hide)}}/>
                </button>

              </div>

              {formik.errors.password && formik.touched.password && (
                  <p className='log-Error'>{formik.errors.password}</p>
              )}
            
            </div>

			<div className='d-flex justify-content-end align-items-center mt-4'>
				<a className='log_to_reg mr-4' href="" onClick={() => {navigate("/register")}}><p>Register Now ?</p></a>
				<button className='submit ml-5' type='submit'>Submit</button>
			</div>

			<button className="log-Fb mt-3" type='button'>
				<img className='log-fbIcon' src={fbIcon} alt="" />
				Continue with Facebook
			</button>

	
			
			
		</div>

      </div>
    </form>
  )
}

export default Login