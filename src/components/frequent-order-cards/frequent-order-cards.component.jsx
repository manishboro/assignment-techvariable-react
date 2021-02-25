import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Container, IconButton } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

import CardFrequentlyOrdered from "../card-frequent-order/card-frequent-order.component";
import { useStyles } from "./frequent-order-cards.styles";
import { frequentOrdersData, frequentOrdersSliderSettings } from "./data";

const CustomArrow = ({ onClick, ...rest }) => {
	const { direction } = rest;
	const classes = useStyles({ direction });

	return (
		<IconButton className={classes.iconButton} onClick={onClick}>
			<KeyboardArrowRightIcon className={classes.icon} />
		</IconButton>
	);
};

export default function FrequentOrderCards() {
	const classes = useStyles();

	return (
		<section className={classes.root}>
			<Container className={classes.containerRoot}>
				<div className={classes.sectionHeading}>Most Frequently Ordered</div>

				<Carousel
					swipeable={false}
					draggable={false}
					showDots={false}
					responsive={frequentOrdersSliderSettings}
					infinite={true}
					autoPlay={false}
					keyBoardControl={true}
					transitionDuration={300}
					containerClass='carousel-container'
					itemClass='carousel-item'
					customRightArrow={<CustomArrow />}
					customLeftArrow={<CustomArrow direction='left' />}
				>
					{frequentOrdersData.map((card) => (
						<CardFrequentlyOrdered data={card} key={card.id} />
					))}
				</Carousel>
			</Container>

			<style jsx='true'>{`
				.carousel-container {
					margin-top: 2rem;
				}

				.carousel-item {
					padding: 1rem;
				}

				@media (max-width: 500px) {
					.carousel-item {
						padding: 0;
					}
				}
			`}</style>
		</section>
	);
}
