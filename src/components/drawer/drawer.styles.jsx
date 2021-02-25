import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	root: {
		height: "max-content",
		"@media (min-width:750px)": { display: "none" },
	},

	icon: { fontSize: "3rem" },
}));
