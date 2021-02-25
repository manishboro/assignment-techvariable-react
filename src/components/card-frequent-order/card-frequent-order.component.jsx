import React from "react";

import { Button } from "@material-ui/core";

import { truncateString } from "../../utils/truncateString";
import { useStyles } from "./card-frequent-order.styles";
import CornerRibbon from "../corner-ribbon/corner-ribbon.component";

export default function CardFrequentlyOrdered({ data }) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			{data.discount && <CornerRibbon discount={data.discount} />}
			<div className={classes.imageContainer}>
				<img src={data.image} alt={data.hotelName} className={classes.image} />
			</div>

			<div className={classes.descriptionContainer}>
				<div>
					<div className={classes.hotelName}>
						{truncateString(data.hotelName, 14)}
					</div>
					<div className={classes.hotelLocation}>
						{truncateString(data.hotelLocation, 14)}
					</div>
				</div>

				<Button color='secondary' className={classes.reorderButton}>
					Re-order
				</Button>
			</div>
		</div>
	);
}
