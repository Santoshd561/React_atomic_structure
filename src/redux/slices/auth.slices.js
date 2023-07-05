import { createSlice } from "@reduxjs/toolkit";
import { THUNK_STATUS } from "../reduxConstants/async.constants";
import { loginAsync, verifyOTPAsync } from "../asyncThunks";

const initialState = {
	user: null,
	loginStatus: null,
	loginResults: [],
    verifyOTPStatus: null,
    verifyOTPResults: [],
};

export const AuthSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		removeToken: (state, action) => {
			state.token = null;
			state.user = null;
		},
	},
	extraReducers: (builder) => {
        // login
		builder.addCase(loginAsync.pending, (state, action) => {
			state.loginStatus = THUNK_STATUS.LOADING;
		});
		builder.addCase(loginAsync.fulfilled, (state, action) => {
			state.loginStatus = THUNK_STATUS.SUCCESS;
			state.loginResults = action.payload.data;
		});
		builder.addCase(loginAsync.rejected, (state, action) => {
			state.loginStatus = THUNK_STATUS.FAILED;
		});

        // verify OTP
		builder.addCase(verifyOTPAsync.pending, (state, action) => {
			state.verifyOTPStatus = THUNK_STATUS.LOADING;
		});
		builder.addCase(verifyOTPAsync.fulfilled, (state, action) => {
			state.verifyOTPStatus = THUNK_STATUS.SUCCESS;
			state.verifyOTPResults = "verify OTP Results";
		});
		builder.addCase(verifyOTPAsync.rejected, (state, action) => {
			state.verifyOTPStatus = THUNK_STATUS.FAILED;
		});
	},
});

export const { removeToken } = AuthSlice.actions;

export default AuthSlice.reducer;