import React from "react";

import { Container } from "@material-ui/core";

import FoodItemCards from "../food-item-cards/food-item-cards.component";
import Sidebar from "../sidebar/index/sidebar.component";
import { useStyles } from "./food-items-overview.styles";
import { getFoodItemsData } from "../food-item-cards/data";

export default function FoodItemsOverview() {
	const classes = useStyles();
	const foodItemsData = getFoodItemsData();

	return (
		<Container className={classes.rootContainer}>
			<Sidebar />
			<FoodItemCards foodItemsData={foodItemsData} />
		</Container>
	);
}
