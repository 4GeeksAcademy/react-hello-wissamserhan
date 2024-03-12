import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbars from "./Navbars.jsx";
import Cards from "./Cards.jsx";
import Jumbotrons from "./Jumbotrons.jsx";
import Footers from "./Footers.jsx";

//create your first component
const Home = () => {
	return (

		<div className="text-center">
			<Navbars />
			<Jumbotrons />
			<div className="container">
				<div className="Cards">

					<Cards img="https://i.ebayimg.com/images/g/aMcAAOSwWhtgzetK/s-l1200.jpg" titulo="Sneakers" texto="All models from different brands are here." boton="Press the button!" />
					<Cards img="https://cdn.shopify.com/s/files/1/0094/2252/files/14_eb269b64-06f4-462e-9379-41c20e1d990f.jpg?v=1518824660" titulo="Clothes" texto="All models from different brands are here." boton="Press the button!" />
					<Cards img="https://imboldn.com/wp-content/uploads/2023/05/KITH-Raffia-Capsule-01-800x450.jpg" titulo="Accessories" texto="All models from different brands are here." boton="Press the button!" />
					<Cards img="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA2L2pvYjE2OC1udW5vb24tMTMuanBn.jpg" titulo="About Us" texto="For more information about us, please " boton="Press the button!" />


				</div>
			</div>

			<Footers />
		</div>

	);
};

export default Home;

