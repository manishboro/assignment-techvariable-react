import { makeStyles } from "@material-ui/core";
import { palette } from "../../constants/palette";
import { typography } from "../../constants/typography";

export const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: palette.backgroundColorPrimary,
	},

	containerRoot: {
		padding: "3rem 1rem",
	},

	sectionHeading: {
		fontSize: typography.fontSizeHeading,
		fontWeight: 600,
		fontFamily: typography.fontPrimary,
		textTransform: "uppercase",

		"@media (max-width:650px)": { textAlign: "center" },
	},

	gridContainer: {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fill, minmax(28rem, 1fr))",
		gap: "2rem",
		placeItems: "center",
		marginTop: "2rem",
	},

	//////////////////////////////////////
	iconButton: ({ direction }) => ({
		position: "absolute",
		right: direction === "left" ? "inherit" : 0,
		left: direction === "left" ? 0 : "inherit",
		backgroundColor: "white",
		border: "1px solid #FFC300",
		padding: ".6rem",

		"&:hover": {
			backgroundColor: "white",
		},
	}),

	icon: ({ direction }) => ({
		fontSize: "3rem",
		color: "#FFC300",
		transform: direction === "left" ? "rotate(180deg)" : "rotate(0deg)",
	}),
}));
