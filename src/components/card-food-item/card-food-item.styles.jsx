import { makeStyles } from "@material-ui/core";
import styled from "styled-components";

import { palette } from "../../constants/palette";
import { typography } from "../../constants/typography";

export const useStyles = makeStyles((theme) => ({
	root: {
		// overflow: "hidden",
		position: "relative",
	},

	imageContainer: {
		width: "26rem",
		height: "14rem",
		borderBottom: `1px solid ${palette.borderColor}`,
	},

	image: { width: "100%", height: "100%" },

	descriptionContainer: {
		display: "grid",
		padding: "2rem 1.5rem",
		borderTop: "none",
		border: `1px solid ${palette.borderColor}`,
		gap: "1rem 0",
		font: typography.fontPrimary,
	},

	//-------------------------------------------------//

	hotelNameAndRatingsContainer: { gridArea: "1 / 1 / 2 / 3" },

	hotelName: {
		fontSize: typography.fontSizePrimary,
	},

	priceAndDishesContainer: {
		margin: ".1rem 0",
		fontSize: typography.fontSizeTertiary,
		color: theme.palette.text.secondary,
	},

	price: { color: theme.palette.secondary.main },

	//-------------------------------------------------//

	ratingsContainer: {
		gridArea: "2 / 1 / 3 / 2",
		display: "flex",
		alignItems: "center",
		fontSize: typography.fontSizeTertiary,
	},

	rating: {
		backgroundColor: "red",
		padding: ".2rem .8rem",
		display: "flex",
		alignItems: "center",
		borderRadius: ".3rem",
	},

	noOfRatings: {
		paddingLeft: ".8rem",
		color: theme.palette.text.secondary,
	},

	//-------------------------------------------------//

	foodTypeContainer: {
		gridArea: "2 / 2 / 3 / 3",
		placeSelf: "center end",
		display: "flex",
	},

	foodTypeIndicator: () => ({
		border: "1px solid #26C100",
		padding: ".5rem",
		margin: "0 .25rem",

		"& > div": () => ({
			height: ".8rem",
			width: ".8rem",
			borderRadius: "50%",
			backgroundColor: "#26C100",
		}),
	}),

	foodTypeIndicatorNonVeg: {
		border: "1px solid red !important",

		"& > div": {
			backgroundColor: "red  !important",
		},
	},
}));

export const Rating = styled.div`
	background-color: ${({ color }) => color ?? "green"};
	padding: 0.2rem 0.8rem;
	display: flex;
	align-items: center;
	border-radius: 0.3rem;
`;
