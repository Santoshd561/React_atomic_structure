import { backendHosts } from "../../utils/helper";

export const SERVICE_ROUTES = {
	LOGIN: `${backendHosts().AUTH_SERVICE}auth-service/v1/_oauth`,
	VERIFY_OTP: "_verify_otp",
};

export const METHODS = {
	GET: "GET",
	POST: "POST",
	PUT: "PUT",
	DELETE: "DELETE",
	PATCH: "PATCH",
};

export const replaceUrl = (url, data) => {
	var regex = new RegExp(":(" + Object.keys(data).join("|") + ")", "g");
	return url?.replace(regex, (m, $1) => data[$1] || m);
};
