import { useNavigate } from "react-router-dom";
import myImage from "./CekKhodam.png";
import myImage1 from "./Khodam2.jpeg";
import myImage2 from "./MedicalHealthCrop.png";
import myImage3 from "./MedicalHealthCrop2.png";
import myImage4 from "./Bakery1.png";
import myImage5 from "./Bakery2.png";

import NavbarComponent from "../../components/NavbarComponent";
// import {navProps} from"../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import CardComponentUniq from "../../components/CardComponentUniq";

function Projects() {
	const navigate = useNavigate();
	return (
		<div className="Whole">
			<div>
				<NavbarComponent
					title="Rizky / Andiarto / Projects."
					nav1="my home here"
					onClick={() => navigate("/")}
				/>
			</div>

			<div className="Card2">
				<CardComponentUniq
					projectTitle="01. MedicalHealth - Exercise."
					image={myImage2}
					image2={myImage3}
					explanation="MedicalHealth Exercise is a landing page to learn about how responsive works. it is responsive with the burger icon appear on mobile devices!"
					nextPlan="Next Plan : Need to optimize the media queries for all media devices"
				/>
			</div>

			<div className="Card2">
				<CardComponentUniq
					projectTitle="02. Bakery-Delight - Exercise."
					image={myImage4}
					image2={myImage5}
					explanation="Bakery Delight Exercise is a landing page to learn about CSS and HTML. "
					nextPlan="Next Plan : Images ratio need to be fixed."
				/>
			</div>

			<div className="Card3">
				<CardComponentUniq
					projectTitle="03. Cek Khodam."
					image={myImage}
					image2={myImage1}
					explanation="This 'Check-Khodam' is used to randomly generated our Khodam. Made as an introduction for DOM selectors and good for simple HTML & CSS basic "
					nextPlan="Next Plan : None."
				/>
			</div>

			<FooterComponent footer="2024 Version 1" />
		</div>
	);
}

export default Projects;
