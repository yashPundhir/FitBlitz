import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
	return (
		<Box mt="80px" bgcolor="#fff3f4">
			<Stack gap="40px" px="40px" pt="50px" alignItems="center">
				<img src={Logo} alt="logo" width="200px" height="40px" />
			</Stack>
			<Typography
				variant="h5"
				sx={{ fontSize: { lg: "28px", xs: "20px" } }}
				mt="31px"
				textAlign="center"
				pb="50px"
			>
				Made by Yash Pundhir
			</Typography>
		</Box>
	);
};

export default Footer;
