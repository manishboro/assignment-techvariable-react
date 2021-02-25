import { Helmet } from "react-helmet";

import FrequentOrderCards from "./components/frequent-order-cards/frequent-order-cards.component";
import FoodItemsOverview from "./components/food-items-overview/food-items-overview.component";

function App() {
	return (
		<div className='App'>
			<Helmet>
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'
					rel='stylesheet'
				/>
			</Helmet>

			<FrequentOrderCards />
			<FoodItemsOverview />
		</div>
	);
}

export default App;
