import { makeStyles } from "@material-ui/core";
import { palette } from "../../constants/palette";
import { typography } from "../../constants/typography";

export const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: "white",
		width: "28.5rem",
		margin: "auto",
		border: `1px solid ${palette.borderColor}`,
		borderRadius: 2,
		position: "relative",
	},

	imageContainer: {
		width: "100%",
		height: "16rem",
		borderBottom: `1px solid ${palette.borderColor}`,
	},

	image: { width: "100%", height: "100%" },

	descriptionContainer: {
		padding: "2rem 1rem",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},

	hotelName: {
		fontSize: typography.fontSizePrimary,
		font: typography.fontPrimary,
	},

	hotelLocation: { fontSize: typography.fontSizeSecondary, color: "#BCBCBC" },

	reorderButton: { fontSize: typography.fontSizeSecondary },
}));
