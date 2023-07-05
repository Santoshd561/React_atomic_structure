import Axios from "axios";
import { METHODS, SERVICE_ROUTES } from "../reduxConstants/service.contants";

export function loginService(data) {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.LOGIN,
      method: METHODS.POST,
      data,
      headers: {
        "Content-Type": "application/json",
      },
    };

    Axios.request(config)
      .then((response) => {
        return resolve(response);
      })
      .catch((error) => {
        return reject(error);
      });
  });
}

export function verifyOtpService(data) {
  return new Promise((resolve, reject) => {
    return resolve(true);
    let config = {
      url: SERVICE_ROUTES.VERIFY_OTP,
      method: METHODS.POST,
      data,
      headers: {
        "Content-Type": "application/json",
      },
    };
    
    Axios.request(config)
      .then((response) => {
        return resolve(response);
      })
      .catch((error) => {
        return reject(error);
      });
  });
}