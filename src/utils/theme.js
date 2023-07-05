import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
	palette: {
		primary: {
			main: "#fff",
			contrastText: "#333333",
		},
		secondary: {
			main: "#089bab",
			contrastText: "#ffffff",
			light: "#e5f4f6",
		},
		error: {
			main: "#e82323",
			light: "#fff3ee",
			contrastText: "#333333",
		},
	},
	typography: {
		subtitle1: {
			fontSize: "16px",
			fontWeight: "600",
            color: "#333333",
		},
		subtitle2: {
			fontSize: "16px",
			fontWeight: "normal",
            color: "#333333",
		},
		body1: {
			fontSize: "14px",
			fontWeight: "normal",
			color: "#8f8d8d",
		},
		body2: {
			fontSize: "14px",
			fontWeight: "normal",
            color: "#333333",
		},
		button: {
			fontSize: "14px",
			fontWeight: 500,
            color: "#ffffff",
		},
		caption: {
            fontSize: "11px",
            fontWeight: "normal",
        }
	},
});

theme = responsiveFontSizes(theme);

export {theme}