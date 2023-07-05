import { CommonLayout } from "../layouts";
import { Login } from "../UI/pages";
import { ROUTE_CONSTANTS } from "../utils/constants";

export const AUTH_ROUTES = [
	{
		element: <CommonLayout />,
		children: [
			{
				path: ROUTE_CONSTANTS.BASE,
				element: <Login />,
			},
		],
	},
];
