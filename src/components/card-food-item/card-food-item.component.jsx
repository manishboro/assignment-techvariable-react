import React from "react";
import clsx from "clsx";

import StarIcon from "@material-ui/icons/Star";
import { useTheme } from "@material-ui/core";

import { truncateString } from "../../utils/truncateString";
import { useStyles, Rating } from "./card-food-item.styles";
import CornerRibbon from "../corner-ribbon/corner-ribbon.component";

export default function CardFoodItem({ data }) {
	const classes = useStyles();
	const theme = useTheme();

	const getRatingColor = () => {
		const rating = parseFloat(data.rating);
		const color =
			rating >= 0 && rating <= 2
				? theme.palette.error.main
				: rating > 2 && rating <= 4
				? theme.palette.warning.main
				: theme.palette.success.main;

		return color;
	};

	return (
		<div className={classes.root}>
			{data.discount && <CornerRibbon discount={data.discount} />}
			<div className={classes.imageContainer}>
				<img src={data.image} alt={data.name} className={classes.image} />
			</div>

			<div className={classes.descriptionContainer}>
				<div className={classes.hotelNameAndRatingsContainer}>
					<div className={classes.hotelName}>
						{truncateString(data.hotelName, 30)}
					</div>

					<div className={classes.priceAndDishesContainer}>
						<span className={classes.price}>₹{data.price}/-</span> per head
						<span>
							<span
								style={{
									fontWeight: 1000,
									margin: "0 .6rem",
								}}
							>
								&middot;
							</span>
							{data.dishes} dishes
						</span>
					</div>
				</div>

				<div className={classes.ratingsContainer}>
					<Rating color={getRatingColor()}>
						<StarIcon style={{ color: "white" }} fontSize='small' />{" "}
						<div
							style={{
								paddingLeft: ".3rem",
								color: "white",
							}}
						>
							{data.rating}
						</div>
					</Rating>

					<div className={classes.noOfRatings}>{data.noOfRatings} Ratings</div>
				</div>

				<div className={classes.foodTypeContainer}>
					{data.nonVeg && (
						<div
							className={clsx(
								classes.foodTypeIndicator,
								classes.foodTypeIndicatorNonVeg
							)}
						>
							<div></div>
						</div>
					)}

					{data.veg && (
						<div className={classes.foodTypeIndicator}>
							<div></div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
