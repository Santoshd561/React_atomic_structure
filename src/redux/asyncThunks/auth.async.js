import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_ROUTES } from "../reduxConstants/async.constants";
import { loginService, verifyOtpService } from "../services";

export const loginAsync = createAsyncThunk(ASYNC_ROUTES.LOGIN, async (payload, { rejectWithValue }) => {
	try {
		const response = await loginService(payload);
		return response;
	} catch (err) {
		return rejectWithValue(err);
	}
});

export const verifyOTPAsync = createAsyncThunk(ASYNC_ROUTES.VERIFY_OTP, async (payload, { rejectWithValue }) => {
	try {
		const response = await verifyOtpService(payload);
		return response;
	} catch (err) {
		return rejectWithValue(err);
	}
});
