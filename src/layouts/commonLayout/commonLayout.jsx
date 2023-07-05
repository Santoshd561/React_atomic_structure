import React from "react";
import { Outlet } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import styles from "./commonLayout.module.css";
export const CommonLayout = () => {
	return (
		<Grid container component="main" sx={{ height: "100vh" }}>
			<Grid
				item
				xs={false}
				sm={4}
				md={6.5}
				className={styles.bannerImg}
			/>
			<Grid item xs={12} sm={8} md={5.5} component={Paper} elevation={6} square>
				<Outlet />
			</Grid>
		</Grid>
	);
};