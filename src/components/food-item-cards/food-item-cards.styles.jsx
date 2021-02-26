import { makeStyles } from "@material-ui/core";
import { palette } from "../../constants/palette";
import { typography } from "../../constants/typography";

export const useStyles = makeStyles((theme) => ({
	root: {
		// width: "calc(100% - 30rem)",
		width: "100%",
		height: "max-content",
		padding: "0 0 2rem 0",
	},

	heading: {
		fontSize: typography.fontSizeHeading,
		textTransform: "uppercase",
		fontWeight: 600,
		fontFamily: typography.fontPrimary,
	},

	innerContainer_1: {
		padding: "0 0 0 3.5rem",
		height: "6rem",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		borderBottom: `1px solid ${palette.borderColor}`,

		"@media (max-width:749px)": { padding: "1rem" },
	},

	innerContainer_2: {
		borderLeft: `1px solid ${palette.borderColor}`,
		width: "100%",

		"@media (max-width:749px)": { border: "none" },
	},

	innerContainer_2_1: {
		padding: "2rem 3.5rem",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",

		"@media (max-width:1000px)": {
			flexDirection: "column-reverse",
			alignItems: "flex-start",
		},
	},

	chipContainer: {
		width: "65%",

		"@media (max-width:1000px)": {
			width: "100%",
			marginTop: "1rem",
		},
	},

	chip: {
		borderRadius: ".5rem",
		fontSize: typography.fontSizeSecondary,
		backgroundColor: palette.borderColor,
		color: theme.palette.text.secondary,
		transition: "all .2s",
		margin: ".5rem 0",

		"&:not(:last-child)": { marginRight: "1rem" },

		"&:hover": {
			cursor: "pointer",
			backgroundColor: "white",
			boxShadow: theme.shadows[2],
		},
	},

	filterSelectMenu: {
		fontSize: typography.fontSizeSecondary,
		fontWeight: 600,
		color: theme.palette.text.secondary,
	},

	innerContainer_2_2: {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fill, minmax(28rem, 1fr))",
		placeItems: "center",
		gap: "2rem 1rem",
		padding: "1rem",
	},
}));
