import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileThunk, updateProfileThunk } from '../../redux/redux-user/User';
import trailingIcon from '../../assets/icons/trailingIcon.svg'
import eyelidclose from '../../assets/icons/eyelidclose.png'
import * as Yup from 'yup'
import {useFormik} from 'formik'

import './profile.scss'
import OrderHistory from './OrderHistory';


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
    phone: Yup.number()
        .required('Phone is required')
        .typeError('Phone must be number')
        .positive('Phone input is inappropriate'),
});



function Profile() {
    const [hide, setHide] = useState("")
    const {userProfile} = useSelector((state) => state.UserReducer);
    const [gender, setGender] = useState(userProfile.gender)
    const [proMenu, setproMenu] = useState(true)
	const dispatch = useDispatch();

	useEffect(() =>  {
		const actionThunk = getProfileThunk();
		dispatch(actionThunk);
	}, []);    

    const formik = useFormik({
        initialValues: { 
            email: "_",
            name: "_",
            password: "",
            phone: "_",
            gender: "_"
        },

        validationSchema: schemaRegister, 
        
        onSubmit: async (values) => {
          try {
            let newValue = {
                ...values,
                gender: gender
            }

            const actionThunk = updateProfileThunk(newValue);
            dispatch(actionThunk)
            console.log(userProfile)

            alert("Update thành công")
          } catch (err) {
            alert("Không hợp lệ")
            console.log(err);
          }
		},

    })  


    return (
        
        <div>
            <h1 className='px-5 py-2 my-5 profile-Banner'>Profile</h1>
           
                <form className='row mx-4 w-100'  onSubmit={formik.handleSubmit}>
                    <div className='col-md-3 col-sm-12 d-flex align-items-center justify-content-center'>
                        <img src={userProfile.avatar} alt="" 
                            style={{
                                borderRadius: "50%",
                                width: "80%"}}/>
                    </div>

                    <div className='col-md-9 col-sm-12 row pro-Form '>
                        <div className="col-lg-6 col-md-12">
                            <div className='pro-Frame mt-2'>
                                <h2>Email</h2>
                                <input
                                    type='text'
                                    name='email'
                                    placeholder='email'
                                    {...formik.getFieldProps('email')}
                                    value = {formik.values.email === "_" ? userProfile.email : formik.values.email}
                                />

                                {formik.errors.email && formik.touched.email && (
                                    <p className='pro-Error'>{formik.errors.email}</p>
                                )}
                            </div>

                            <div className='pro-Frame mt-2'>
                                <h2>Phone</h2>
                                <input 
                                type="text" 
                                name='phone' 
                                placeholder='phone'
                                {...formik.getFieldProps("phone")}
                                value = {formik.values.phone === "_" ? userProfile.phone : formik.values.phone}
                                />
                                {formik.errors.phone && formik.touched.phone && (
                                    <p className='pro-Error'>{formik.errors.phone}</p>
                                )}
                            </div>

                            
                        </div>
                        <div className="col-lg-6 col-md-12">

                            <div className='pro-Frame mt-2'>
                                <h2>Name</h2>
                                <input 
                                type="text" 
                                name='name' 
                                placeholder='name'
                                {...formik.getFieldProps("name")}
                                value = {formik.values.name === "_" ? userProfile.name : formik.values.name}
                                />

                                {formik.errors.name && formik.touched.name && (
                                    <p className='pro-Error'>{formik.errors.name}</p>
                                )}
                            </div>

                            <div className='pro-Frame mt-2'>
                                <h2>Password</h2>
                                <div  className='pro-Pass'>
                                    <input type={hide?'text':'password'} name='password' placeholder='password'
                                    {...formik.getFieldProps("password")}
                                    />

                                    <button className='pro-Img' type='button'>
                                        <img src={hide?trailingIcon:eyelidclose} alt="" onClick={() => {setHide(!hide)}}/>
                                    </button>

                                </div>

                                {formik.errors.password && formik.touched.password && (
                                    <p className='pro-Error'>{formik.errors.password}</p>
                                )}
                                
                            </div>

                            <div className='d-flex justify-content-between align-items-center' >
                                <div className='pro-Gender d-flex align-items-center'>
                                    <h2 className='mr-5'>Gender</h2>
                                    <div className='text-center mr-5'>
                                        <div className="pro-Circle">
                                            <input
                                            type="radio" 
                                            name='gender' 
                                            value="true"
                                            onChange={() => {setGender(true)}}
                                            checked={gender}
                                            />
                                        </div>
                                        <p>Male</p>
                                    </div>

                                    <div className='text-center'>
                                        <div className="pro-Circle">
                                            <input
                                            type="radio" 
                                            name='gender' 
                                            value="false"
                                            onChange={() => {setGender(false)}}
                                            checked={!gender}
                                            />
                                        </div>
                                        <p>Female</p>
                                    </div>

                                    {formik.errors.gender && formik.touched.gender && (
                                        <p className='pro-Error'>{formik.errors.gender}</p>
                                    )}
                                </div>
                                
                                <button className='submit' type='submit'>Update</button>
                            </div>
                            
                        </div>
                    </div>
                </form>

                <hr className='mx-4'/>
                <div className="log-Menu btn-group btn-group-toggle" data-toggle="buttons">
                    <label className="btn btn-pro ml-4 px-4">
                        <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked onClick={() => {setproMenu("true")}}/> Order History
                    </label>
                    <label className="btn btn-pro px-4 ">
                        <input type="radio" name="options" id="option2" autoComplete="off" onClick={() => {setproMenu("false")}}/> Favourite
                    </label>
                </div>

           
            
            {proMenu === "true" ? <OrderHistory/> : ""}
            
        </div>
    )
}

export default Profile