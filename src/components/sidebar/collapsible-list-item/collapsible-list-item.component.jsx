import React from "react";

import { makeStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Checkbox from "@material-ui/core/Checkbox";

import { typography } from "../../../constants/typography";

const useStyles = makeStyles((theme) => ({
	nested: { padding: "0 0 0 3rem" },

	listItemText: { fontSize: typography.fontSizePrimary },

	nestedListItemText: {
		fontSize: typography.fontSizeSecondary,
		color: theme.palette.text.secondary,
	},

	checkbox: { "& svg": { fontSize: "2.2rem" } },

	checkedColor: { "& svg": { fill: "#FFB400" } },
}));

const CollapsibleListItem = ({
	heading,
	listItemsData,
	checked,
	handleToggle,
}) => {
	const classes = useStyles();

	// to expand and close menu
	const [open, setOpen] = React.useState(false);
	const handleExpand = () => setOpen(!open);

	return (
		<>
			<ListItem button onClick={handleExpand}>
				<ListItemText
					primary={heading}
					classes={{ primary: classes.listItemText }}
				/>
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItem>

			<Collapse in={open} timeout='auto' unmountOnExit>
				<List component='div' disablePadding>
					{listItemsData.map((el, idx) => (
						<ListItem
							button
							className={classes.nested}
							key={el.id}
							value={el.name}
							onClick={handleToggle(el.name)}
						>
							<Checkbox
								edge='start'
								checked={checked.indexOf(el.name) !== -1}
								tabIndex={-1}
								disableRipple
								classes={{
									root: classes.checkbox,
									colorSecondary: classes.checkedColor,
								}}
								color='secondary'
							/>

							<ListItemText
								primary={el.name}
								classes={{
									primary: classes.nestedListItemText,
								}}
							/>
						</ListItem>
					))}
				</List>
			</Collapse>
		</>
	);
};

export default CollapsibleListItem;
