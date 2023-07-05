// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { ASYNC_ROUTES } from "../reduxConstants/async.constants";
// import { loadJSONDataService, loadDebugEndPointsService, processedDebuglogInfoService, sensorDatalogInfoService } from "../services";

// export const loadDebugEndPointsAsync = createAsyncThunk(ASYNC_ROUTES.LOAD_DEBUG_END_POINTS, async (payload, { rejectWithValue }) => {
// 	try {
// 		const response = await loadDebugEndPointsService(payload);
// 		return response;
// 	} catch (err) {
// 		return rejectWithValue(err);
// 	}
// });

// export const loadJsonFileAsync = createAsyncThunk(ASYNC_ROUTES.LOAD_JSON_END_POINTS, async (payload, { rejectWithValue }) => {
// 	try {
// 		const response = await loadJSONDataService(payload);
// 		return response;
// 	} catch (err) {
// 		return rejectWithValue(err);
// 	}
// });

// export const processedDebuglogInfoAsync = createAsyncThunk(ASYNC_ROUTES.PROCESSED_DEBUG_LOG_INFO, async (payload, { rejectWithValue }) => {
// 		try {
// 			const response = await processedDebuglogInfoService(payload);
// 			return response;
// 		} catch (err) {
// 			return rejectWithValue(err);
// 		}
// 	},
// );
// export const sensorDataAsync = createAsyncThunk(ASYNC_ROUTES.SENSOR_DATA_LOG_INFO, async (payload, { rejectWithValue }) => {
// 	try {
// 		const response = await sensorDatalogInfoService(payload);
// 		return response;
// 	} catch (err) {
// 		return rejectWithValue(err);
// 	}
// },
// );

