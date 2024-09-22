import NavbarComponent from "../../components/NavbarComponent";
// import {navProps} from"../../components/NavbarComponent";
import HeadlineHeadersComponent from "../../components/HeadlineHeadersComponent";
import SocialMediaIconComponent from "../../components/SocialMediaIconComponent";
import FooterComponent from "../../components/FooterComponent";
import ImangeBlockComponent from "../../components/ImageBlockComponent";

import { useNavigate } from "react-router-dom";

function Home() {
	const navigate = useNavigate();
	return (
		<div>
			<div>
				<NavbarComponent
					title="Rizky / Andiarto."
					nav1="my projects here"
                    nav2="@About / Me."
					onClick={() => navigate("/projects/")}
				/>
			</div>

			<div className="HeadTitle">
				<HeadlineHeadersComponent
					title="Welcome to My Portofolio"
					paragraph=""
				/>
			</div>

			<div>
				<SocialMediaIconComponent
					instagram="https://www.instagram.com/andiarto_ri/"
					linkedin="https://www.linkedin.com/in/rizky-andiarto-053b1369"
					gmail="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=rizkyandiarto@gmail.com&tf=1"
				/>
			</div>

			<ImangeBlockComponent
				image="https://images.unsplash.com/photo-1501536563292-5d56009a5942?q=80&w=1529&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				explanation="*This picture is taken from the unsplash website"
			/>

			<div className="AboutMeCombination">
				<div className="AboutMe" id="about">
					<HeadlineHeadersComponent
						title="About / Me."
						paragraph="30 years old human who just learn on how to be a full-stack web-developer. Was 7 years in sales and marketing before decide on learning something new. Because why not ? "
					/>
				</div>

				<div className="AboutMe-Jap">
					<HeadlineHeadersComponent
						title="私 / について."
						paragraph="フルスタックのウェブ・デベロッパーになる方法を学んだばかりの30歳。何か新しいことを学ぼうと決心する前に、私は7年間営業とマーケティングの仕事をしていた。それは悪いことじゃない。"
					/>
				</div>
			</div>

			<div className="AboutMeCombination">
				<div className="AboutMe">
					<HeadlineHeadersComponent
						title="About / Design."
						paragraph="The design of this web-page was inspired from the LifeWear magazine from Uniqlo. The purpose is to have simplicity yet calming panoramic scenery."
					/>
				</div>

				<div className="AboutMe-Jap">
					<HeadlineHeadersComponent
						title="デザイン / について"
						paragraph="このウェブページのデザインは、ユニクロの雑誌「LifeWear」からインスパイアされた。その目的は、シンプルでありながら落ち着きのあるパノラマ風景である。"
					/>
				</div>
			</div>

			<FooterComponent footer="2024 Version 1" />
		</div>
	);
}

export default Home;
