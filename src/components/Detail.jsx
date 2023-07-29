import React from "react";
import { Typography, Stack, Button } from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
	const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

	const extraDetail = [
		{
			icon: BodyPartImage,
			name: bodyPart,
		},
		{
			icon: TargetImage,
			name: target,
		},
		{
			icon: EquipmentImage,
			name: equipment,
		},
	];

	return (
		<Stack
			gap="100px"
			sx={{
				flexDirection: { lg: "row" },
				p: "20px",
				alignItems: "center",
			}}
		>
			<img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
			<Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
				<Typography
					textTransform="capitalize"
					variant="h2"
					style={{ fontWeight: "700" }}
				>
					{name}
				</Typography>
				<Typography
					variant="h6"
					style={{
						width: "500px",
						fontWeight: "500",
						fontSize: "21px",
						color: "#505050",
					}}
				>
					Exercises keep you strong. {name} {` `} is one of the best exrecises
					to target your {target}. It will help you improve your mood and gain
					energy.
				</Typography>
				{extraDetail.map((item) => (
					<Stack
						key={item.name}
						direction="row"
						gap="40px"
						alignItems="center"
						sx={{ mt: "10px" }}
					>
						<Button
							sx={{
								background: "#fff2db",
								borderRadius: "50%",
								width: "100px",
								height: "100px",
							}}
						>
							<img
								src={item.icon}
								alt={bodyPart}
								style={{ width: "50px", height: "50px" }}
							/>
						</Button>
						<Typography variant="h5" textTransform="capitalize">
							{item.name}
						</Typography>
					</Stack>
				))}
			</Stack>
		</Stack>
	);
};

export default Detail;
