import FoodItem from "../../static/images/food-item-1.jpeg";

export const frequentOrdersSliderSettings = {
	desktop: {
		breakpoint: { max: 3000, min: 1300 },
		items: 4,
	},
	tabletLandscape: {
		breakpoint: { max: 1300, min: 1000 },
		items: 3,
	},
	tabletPortrait: {
		breakpoint: { max: 1000, min: 650 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 650, min: 0 },
		items: 1,
	},
};

export const frequentOrdersData = [
	{
		id: 1,
		image: FoodItem,
		hotelName: "Hotel Saravana Delight",
		hotelLocation: "Indra nagar",
	},
	{
		id: 2,
		image: FoodItem,
		hotelName: "Barbeque Delight",
		hotelLocation: "Venkatapura",
	},
	{
		id: 3,
		image: FoodItem,
		hotelName: "Malabar Hotel",
		hotelLocation: "Koramangala",
		discount: "60%",
	},
	{
		id: 4,
		image: FoodItem,
		hotelName: "Punjabi Dhaba",
		hotelLocation: "Teachers colony",
	},
];
