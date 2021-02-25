import { Chip } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

import CardFoodItem from "../card-food-item/card-food-item.component";
import CustomMenu from "../custom-select/custom-select.component";
import CustomDrawer from "../drawer/drawer.component";

import { useStyles } from "./food-item-cards.styles";

export default function FoodItemCards({ foodItemsData }) {
	const classes = useStyles();

	// handling chipdata and chip deletion
	const [chipData, setChipData] = React.useState([
		{ key: 0, label: "5+ Ratings" },
		{ key: 1, label: "₹0 - ₹700" },
		{ key: 2, label: "Non-Vegeterian" },
		{ key: 3, label: "0 - 5 kms" },
	]);

	const handleDelete = (chipToDelete) => () =>
		setChipData((chips) =>
			chips.filter((chip) => chip.key !== chipToDelete.key)
		);

	return (
		<div className={classes.root}>
			<div className={classes.innerContainer_1}>
				<div className={clsx(classes.heading)}>
					Results {`(${foodItemsData.length})`}
				</div>

				<CustomDrawer />
			</div>

			<div className={classes.innerContainer_2}>
				<div className={classes.innerContainer_2_1}>
					<div className={classes.chipContainer}>
						{chipData.map((data) => (
							<Chip
								label={data.label}
								key={data.key}
								onDelete={handleDelete(data)}
								className={classes.chip}
							/>
						))}
					</div>

					<div className={classes.filterSelectMenu}>
						<span style={{ marginRight: "1rem" }}>Sort by : </span>
						<CustomMenu
							heading='Most Popular'
							menuItems={[{ name: "Most Popular" }, { name: "Top Rated" }]}
							options={{ endIcon: true, outlined: true }}
						/>
					</div>
				</div>

				<div className={classes.innerContainer_2_2}>
					{foodItemsData.map((foodItem, idx) => (
						<CardFoodItem key={foodItem.id} data={foodItem} />
					))}
				</div>
			</div>
		</div>
	);
}
