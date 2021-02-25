import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	menuItem: {
		fontSize: 16,
		minWidth: "16rem",
	},

	button: {
		textTransform: "none",
		cursor: "pointer",
		fontSize: `16px !important`,
		minWidth: "16rem",

		"&:hover": {
			backgroundColor: "transparent",
		},
	},
}));
