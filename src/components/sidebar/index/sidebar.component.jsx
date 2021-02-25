import React from "react";

import List from "@material-ui/core/List";
import { Button, ListItem } from "@material-ui/core";

import CollapsibleListItem from "../collapsible-list-item/collapsible-list-item.component";
import CollapsibleListItemPrice from "../collapsible-list-item-price/collapsible-list-item-price.component";
import { useStyles } from "./sidebar.styles";
import { formatListsData, occasionListsData } from "../data";

export default function Sidebar({ display }) {
	const classes = useStyles({ display });

	// to handle slider value
	const [sliderValue, setSliderValue] = React.useState([500, 2000]);
	const handleChange = (event, newValue) => setSliderValue(newValue);

	// to handle checkbox
	const [checked, setChecked] = React.useState([]);
	const handleToggle = (value) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) newChecked.push(value);
		else newChecked.splice(currentIndex, 1);

		setChecked(newChecked);
	};

	// to reset values
	const handleReset = () => {
		setSliderValue([500, 2000]);
		setChecked([]);
	};

	return (
		<>
			<List
				component='nav'
				aria-labelledby='nested-list-subheader'
				className={classes.root}
			>
				<ListItem className={classes.listItemFirst}>
					<div className={classes.heading}>Filters</div>
					<Button className={classes.button} onClick={handleReset}>
						Reset all
					</Button>
				</ListItem>

				<CollapsibleListItem
					heading='Format'
					listItemsData={formatListsData}
					checked={checked}
					handleToggle={handleToggle}
				/>
				<CollapsibleListItemPrice
					sliderValue={sliderValue}
					handleChange={handleChange}
				/>
				<CollapsibleListItem
					heading='Occasion'
					listItemsData={occasionListsData}
					checked={checked}
					handleToggle={handleToggle}
				/>
			</List>
		</>
	);
}
