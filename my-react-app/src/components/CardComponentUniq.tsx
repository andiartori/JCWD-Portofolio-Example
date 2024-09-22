interface CardUniqProp {
	projectTitle: string;
	image: any;
	image2?: any;
	explanation: string;
	nextPlan?: string;
}

function CardComponentUniq({
	projectTitle,
	image,
	image2,
	explanation,
	nextPlan,
}: CardUniqProp) {
	return (
		<div className="AllCard">
			<h3 className="projectTitle">{projectTitle}</h3>
			<div className="Cards">
				<img className="image1Project" src={image} alt={image} />
				<div className="Cards2">
					<img className="image2Project" src={image2} alt={image2} />
					<p className="exp">{explanation}</p>
                    <p className="exp">{nextPlan}</p>
				</div>
		
			</div>
		</div>
	);
}

export default CardComponentUniq;
