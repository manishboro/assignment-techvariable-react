import HotelSaravana from "../../static/images/hotel_saravana.webp";
import BarbequeDelight from "../../static/images/barbeque_delight.webp";
import MalabarHotel from "../../static/images/malabar_hotel.webp";
import PunjabiDhaba from "../../static/images/punjabi_dhaba.webp";

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

const frequentOrdersData = [
	{
		id: 1,
		image: HotelSaravana,
		hotelName: "Hotel Saravana Delight",
		hotelLocation: "Indra nagar",
	},
	{
		id: 2,
		image: BarbequeDelight,
		hotelName: "Barbeque Delight",
		hotelLocation: "Venkatapura",
	},
	{
		id: 3,
		image: MalabarHotel,
		hotelName: "Malabar Hotel",
		hotelLocation: "Koramangala",
		discount: "60%",
	},
	{
		id: 4,
		image: PunjabiDhaba,
		hotelName: "Punjabi Dhaba",
		hotelLocation: "Teachers colony",
	},
];

export const getFrequentOrdersData = () => frequentOrdersData;
