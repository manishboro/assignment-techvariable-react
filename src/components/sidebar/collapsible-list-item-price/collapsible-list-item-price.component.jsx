import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core";

import { typography } from "../../../constants/typography";

const useStyles = makeStyles((theme) => ({
	priceRange: {
		marginLeft: "1rem",
		color: theme.palette.text.secondary,
	},

	listItemText: { fontSize: typography.fontSizePrimary },

	sliderRoot_0: { padding: "0 4rem 2rem 4rem" },

	sliderRoot: { height: 4 },

	sliderTrack: { backgroundColor: "#FFBF00", height: 3 },

	sliderRail: { backgroundColor: theme.palette.text.secondary, height: 3 },

	sliderThumb: {
		backgroundColor: "#FFBF00",
	},

	valueLabel: {
		top: "3rem",

		"& > span": {
			backgroundColor: "transparent",
			fontSize: 16,
		},

		"& > span > span": { color: theme.palette.text.secondary },
	},
}));

const RangeSlider = ({ value, handleChange }) => {
	const classes = useStyles();

	return (
		<div className={classes.sliderRoot_0}>
			<Slider
				value={value}
				onChange={handleChange}
				valueLabelDisplay='on'
				aria-labelledby='range-slider'
				color='secondary'
				valueLabelFormat={(value) => `₹${value}`}
				min={500}
				max={3000}
				step={50}
				classes={{
					colorSecondary: classes.sliderColorSecondary,
					rail: classes.sliderRail,
					track: classes.sliderTrack,
					thumb: classes.sliderThumb,
					valueLabel: classes.valueLabel,
				}}
			/>
		</div>
	);
};

const CollapsibleListItemPrice = ({ sliderValue, handleChange }) => {
	const classes = useStyles();

	// to expand and close menu
	const [open, setOpen] = React.useState(false);
	const handleClick = () => setOpen(!open);

	return (
		<>
			<ListItem button onClick={handleClick}>
				<ListItemText
					primary={
						<span>
							Price
							<span className={classes.priceRange}>
								₹{sliderValue[0]} - ₹{sliderValue[1]}
							</span>
						</span>
					}
					classes={{ primary: classes.listItemText }}
				/>
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItem>

			<Collapse in={open} timeout='auto' unmountOnExit>
				<RangeSlider value={sliderValue} handleChange={handleChange} />
			</Collapse>
		</>
	);
};

export default CollapsibleListItemPrice;
