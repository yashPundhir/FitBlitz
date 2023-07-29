import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
	if (!exerciseVideos.length) {
		return "Loading...";
	}

	return (
		<Box
			sx={{
				marginTop: { lg: "80px", xs: "20px" },
			}}
			p="20px"
		>
			<Typography textTransform="capitalize" variant="h3" mb="60px">
				Watch <span style={{ color: "#ff2625" }}>{name}</span> Exercise Videos
			</Typography>
			<Stack
				justifyContent="flex-start"
				flexWrap="wrap"
				alignItems="center"
				sx={{
					flexDirection: { lg: "row" },
					gap: { lg: "110px", xs: "0" },
				}}
			>
				{exerciseVideos?.slice(0, 6).map((item, index) => (
					<a
						href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
						key={index}
						className="exercise-video"
						target="_blank"
						rel="noreferrer"
						style={{
							padding: "20px",
							border: "2px solid #707070",
							borderRadius: "40px",
						}}
					>
						<img
							src={item.video.thumbnails[0].url}
							alt={item.video.title}
							style={{ borderRadius: "25px" }}
						/>
						<Box>
							<Typography
								variant="h5"
								color="#404040"
								mt="5px"
								textAlign="center"
							>
								{item.video.title}
							</Typography>
							<Typography color="#555555" mt="10px" textAlign="center">
								{item.video.channelName}
							</Typography>
						</Box>
					</a>
				))}
			</Stack>
		</Box>
	);
};

export default ExerciseVideos;
