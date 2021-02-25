import { makeStyles } from "@material-ui/core";
import { palette } from "../../../constants/palette";
import { typography } from "../../../constants/typography";

export const useStyles = makeStyles((theme) => ({
	root: ({ display }) => ({
		minWidth: "30rem",
		padding: 0,
		height: "max-content",

		"@media (max-width:749px)": { display: display ?? "none" },
	}),

	listItemFirst: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		borderBottom: `1px solid ${palette.borderColor}`,
		height: "6rem",
		padding: "0 1.5rem",
	},

	heading: {
		fontSize: typography.fontSizePrimary,
		textTransform: "uppercase",
		fontWeight: 600,
		fontFamily: typography.fontPrimary,
	},

	button: {
		fontSize: typography.fontSizeSecondary,
		textTransform: "none",
		color: theme.palette.text.secondary,
	},
}));
