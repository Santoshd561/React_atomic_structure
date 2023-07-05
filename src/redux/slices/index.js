import { combineReducers } from "redux";
import authSlice from "./auth.slices";
export default combineReducers({
	auth: authSlice,
});
