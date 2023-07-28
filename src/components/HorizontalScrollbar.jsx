import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import BodyPartCard from "./BodyPartCard";
import ExerciseCard from "./ExerciseCard";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const LeftArrow = () => {
	const { scrollPrev } = useContext(VisibilityContext);

	return (
		<Typography onClick={() => scrollPrev()} className="right-arrow">
			<img src={LeftArrowIcon} alt="right-arrow" />
		</Typography>
	);
};

const RightArrow = () => {
	const { scrollNext } = useContext(VisibilityContext);

	return (
		<Typography onClick={() => scrollNext()} className="left-arrow">
			<img src={RightArrowIcon} alt="right-arrow" />
		</Typography>
	);
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
	if (!Array.isArray(data) || data.length === 0) {
		// If data is not an array or is an empty array, you can handle it here
		return (
			<Typography variant="h3" textAlign="center" textTransform="capitalize">
				No data available
			</Typography>
		);
	}

	return (
		<ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
			{data.map((item) => (
				<Box
					key={item.id || item}
					itemId={item.id || item}
					title={item.id || item}
					m="0 40px"
				>
					{/* <BodyPartCard
						item={item}
						bodyPart={bodyPart}
						setBodyPart={setBodyPart}
					/> */}
					{isBodyParts ? (
						<BodyPartCard
							item={item}
							setBodyPart={setBodyPart}
							bodyPart={bodyPart}
						/>
					) : (
						<ExerciseCard exercise={item} />
					)}
				</Box>
			))}
		</ScrollMenu>
	);
};

export default HorizontalScrollbar;
