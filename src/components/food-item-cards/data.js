import BarbequeDelight from "../../static/images/barbeque_delight.webp";
import FoodBoxClub from "../../static/images/the_food_box_club.webp";
import TheRoofTop from "../../static/images/the_roof_top.webp";

import MeatAndEat from "../../static/images/meat_and_eat.webp";
import FatBelly from "../../static/images/fat_belly.webp";
import TheCornerCafe from "../../static/images/the_corner_cafe.webp";

import TheSteamingMugs from "../../static/images/the_steaming_mugs.webp";
import Loyans from "../../static/images/loyans.webp";
import TableTop from "../../static/images/table_top.webp";

const foodItemsData = [
	{
		id: 1,
		image: BarbequeDelight,
		hotelName: "Barbeque Delight",
		price: 199,
		dishes: 10,
		rating: "1.7",
		noOfRatings: 213,
		veg: true,
		nonVeg: true,
		discount: "30%",
	},
	{
		id: 2,
		image: FoodBoxClub,
		hotelName: "The FoodBox Club",
		price: 199,
		dishes: 10,
		rating: "4.9",
		noOfRatings: 356,
		veg: false,
		nonVeg: true,
	},
	{
		id: 3,
		image: TheRoofTop,
		hotelName: "The Roof Top",
		price: 199,
		dishes: 10,
		rating: "5.0",
		noOfRatings: 450,
		veg: false,
		nonVeg: true,
	},
	{
		id: 4,
		image: MeatAndEat,
		hotelName: "Meat and Eat",
		price: 199,
		dishes: 10,
		rating: "1.1",
		noOfRatings: 156,
		veg: false,
		nonVeg: true,
	},
	{
		id: 5,
		image: FatBelly,
		hotelName: "Fat Belly",
		price: 199,
		dishes: 10,
		rating: "3.7",
		noOfRatings: 403,
		veg: true,
		nonVeg: false,
	},
	{
		id: 6,
		image: TheCornerCafe,
		hotelName: "The Corner's Cafe",
		price: 199,
		dishes: 10,
		rating: "2.5",
		noOfRatings: 154,
		veg: true,
		nonVeg: true,
	},
	{
		id: 7,
		image: TheSteamingMugs,
		hotelName: "The Steaming Mugs",
		price: 199,
		dishes: 10,
		rating: "5.0",
		noOfRatings: 506,
		veg: true,
		nonVeg: false,
	},
	{
		id: 8,
		image: Loyans,
		hotelName: "Loyans",
		price: 199,
		dishes: 10,
		rating: "3.4",
		noOfRatings: 591,
		veg: true,
		nonVeg: false,
		discount: "40%",
	},
	{
		id: 9,
		image: TableTop,
		hotelName: "Table Top",
		price: 199,
		dishes: 10,
		rating: "4.7",
		noOfRatings: 496,
		veg: false,
		nonVeg: true,
	},
];

export const getFoodItemsData = () => foodItemsData;
