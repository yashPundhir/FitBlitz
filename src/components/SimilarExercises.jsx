import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
	return (
		<Box
			sx={{
				mt: { lg: "100px", xs: "20px" },
			}}
		>
			<Typography
				sx={{ fontSize: { lg: "46px", xs: "25px" }, ml: "20px" }}
				fontWeight={500}
				color="#000"
				mb="33px"
			>
				Similar <span style={{ color: "#ff2625" }}>Target Muscle</span>{" "}
				Exercises
			</Typography>
			<Stack
				direction="row"
				sx={{
					p: "2",
					position: "relative",
				}}
			>
				{targetMuscleExercises.length ? (
					<HorizontalScrollbar data={targetMuscleExercises} />
				) : (
					<Loader />
				)}
			</Stack>
			{/* ****************** */}
			{/* ****************** */}
			{/* ****************** */}
			<Typography
				sx={{
					fontSize: { lg: "46px", xs: "25px" },
					ml: "20px",
					mt: { lg: "100px", xs: "60px" },
				}}
				fontWeight={500}
				color="#000"
				mb="33px"
			>
				Similar <span style={{ color: "#ff2625" }}>Equipment</span> Exercises
			</Typography>
			<Stack
				direction="row"
				sx={{
					p: "2",
					position: "relative",
				}}
			>
				{equipmentExercises.length ? (
					<HorizontalScrollbar data={equipmentExercises} />
				) : (
					<Loader />
				)}
			</Stack>
		</Box>
	);
};

export default SimilarExercises;
