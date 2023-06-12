import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getLocalStorage } from '../../utils';
import { ACCESS_TOKEN } from '../../constant';
import { axiosWithAuth } from '../../services/config.services';

const initialState = {
	userProfile: {},
};

export const getProfileThunk = createAsyncThunk(
	'UserSlice/getProfileThunk',
	async () => {
		const resp = await axiosWithAuth.post('/Users/getProfile');

		return resp;
	}
);

export const updateProfileThunk = createAsyncThunk(
	'UserSlice/updateProfileThunk',
	async (user) => { 
		try{
			const resp = await axiosWithAuth.post('/Users/updateProfile'
			,
			{
				email: user.email,
				password: user.password,
				name: user.name,
				gender: user.gender,
				phone: user.phone,
			}
			);
			return resp;

		} catch(err) {
			console.log(err)
		}

	}
);

const UserSlice = createSlice({
	name: 'UserSlice',
	initialState,
	reducers: {
		resetUserProfile: (state, action) => {
			state.userProfile = {};
		},
	},
    
	extraReducers: (builder) => {
		builder.addCase(getProfileThunk.fulfilled, (state, action) => {
			state.userProfile = action.payload.data.content;
		});

		builder.addCase(updateProfileThunk.fulfilled, (state, action) => { 
			const newData = action.payload.config.data;
			state.userProfile = {
				...state.userProfile,
				newData
			}
			
			
		}); 
	},
});

export const { resetUserProfile } = UserSlice.actions;

export default UserSlice.reducer;