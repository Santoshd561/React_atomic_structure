// import { METHODS, SERVICE_ROUTES } from "../reduxConstants/service.contants";
// import Axios from "axios";

// export function loadDebugEndPointsService(data) {
// 	return new Promise((resolve, reject) => {
// 		let config = {
// 			url: SERVICE_ROUTES.LOAD_DEBUG_END_POINTS,
// 			method: METHODS.POST,
// 			maxBodyLength: Infinity,
// 			data,
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 		};
// 		Axios.request(config)
// 			.then((response) => {
// 				return resolve(response);
// 			})
// 			.catch((error) => {
// 				return reject(error);
// 			});
// 	});
// }

// export function loadJSONDataService(payload) {
// 	return new Promise((resolve, reject) => {
// 		let config = {
// 			url: payload.url,
// 			method: METHODS.GET,
// 			maxBodyLength: Infinity,
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 		};
// 		Axios.request(config)
// 			.then((response) => {
// 				return resolve(response);
// 			})
// 			.catch((error) => {
// 				return reject(error);
// 			});
// 	});
// }

// export function processedDebuglogInfoService(data) {
// 	return new Promise((resolve, reject) => {
// 		let config = {
// 			url: SERVICE_ROUTES.PROCESSED_DEBUG_LOG_INFO,
// 			method: METHODS.POST,
// 			maxBodyLength: Infinity,
// 			data,
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 		};
// 		Axios.request(config)
// 			.then((response) => {
// 				return resolve(response);
// 			})
// 			.catch((error) => {
// 				return reject(error);
// 			});
// 	});
// }
// export function sensorDatalogInfoService(data) {
// 	return new Promise((resolve, reject) => {
// 		let config = {
// 			url: SERVICE_ROUTES.SENSOR_DATA_LOG_INFO,
// 			method: METHODS.POST,
// 			maxBodyLength: Infinity,
// 			data,
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 		};
// 		Axios.request(config)
// 			.then((response) => {
// 				return resolve(response);
// 			})
// 			.catch((error) => {
// 				return reject(error);
// 			});
// 	});
// }