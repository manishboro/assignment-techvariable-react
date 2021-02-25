import React from "react";

import Drawer from "@material-ui/core/Drawer";
import FilterListIcon from "@material-ui/icons/FilterList";

import { useStyles } from "./drawer.styles";
import { IconButton } from "@material-ui/core";
import Sidebar from "../sidebar/index/sidebar.component";

export default function CustomDrawer() {
	const classes = useStyles();

	const [state, setState] = React.useState(false);

	const toggleDrawer = (open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		)
			return;

		setState(open);
	};

	return (
		<div className={classes.root}>
			<IconButton onClick={toggleDrawer(true)}>
				<FilterListIcon className={classes.icon} />
			</IconButton>

			<Drawer anchor={"left"} open={state} onClose={toggleDrawer(false)}>
				<Sidebar display='visible' />
			</Drawer>
		</div>
	);
}
