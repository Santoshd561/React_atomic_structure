import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/theme";
// import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import { useRoutes } from "react-router-dom";
// import { APP_ROUTES } from "./routes/app.routes";
import { AUTH_ROUTES } from "./routes/auth.routes";
import { BrowserRouter as Router } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
// import { setAuthToken } from "./redux/slices/auth.slices";


const RoutesComponent = ({ token, offlineMode }) => {
	// if (token) {
	// 	Axios.defaults.headers.common["Authorization"] = "Token " + token;
	// }
	// return useRoutes(token ? APP_ROUTES : AUTH_ROUTES);
	return useRoutes( AUTH_ROUTES);
};

// Axios.interceptors.response.use(response => { return response },
// 	(err) => {
// 		const originalReq = err.config;
// 		if (err.response.status === 403 && !originalReq._retry) {
// 			const data = JSON.parse(originalReq.data)
// 			const refreshToken = localStorage.getItem("refresh_token");
// 			originalReq._retry = true;
// 			fetch(`${process.env.REACT_APP_BASE_URL}users/get_new_token`, {
// 				method: 'POST',
// 				body: JSON.stringify({
// 					"requestInfo": {
// 						"userUUID": data.requestInfo.userUUID,
// 						"refreshToken": refreshToken
// 					}
// 				}),
// 				headers: {
// 					"Content-Type": "application/json",
// 				},

// 			}).then(res => res.json()).then(res => {
// 				localStorage.setItem("refresh_token", res.refreshToken)
// 				localStorage.setItem("auth_token", res.token)
// 				if (res.code === 200) {
// 					let dataParse = JSON.parse(originalReq.data);
// 					dataParse.requestInfo.authToken = res.token;
// 					originalReq.data = JSON.stringify(dataParse);
// 					return Axios(originalReq);
// 				}
// 			}).catch(
// 				function (error) {
// 					if (error.response.status === 403) {
// 						return Promise.reject(error)
// 					}
// 				}
// 			);
// 		}


// 		return Promise.reject(err);
// 	});

function App() {
	// const dispatch = useDispatch();
	// const baseUrl = process.env.REACT_APP_BASE_URL;
	// Axios.defaults.baseURL = baseUrl;
	// const { authToken, loading } = useSelector((state) => state.auth);
	// const localToken = localStorage.getItem("auth_token")


	// const { detailLogStatus, detailLogTextStatus } = useSelector((state) => state.detailLog);
	return (
		<ThemeProvider theme={theme}>
			<Router>
				{/* <Backdrop
					sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
					open={loading}
				>
					<CircularProgress color="inherit" />
				</Backdrop> */}
				<RoutesComponent token={null} offlineMode={null} />
			</Router>
		</ThemeProvider>
	);
}

export default App;
