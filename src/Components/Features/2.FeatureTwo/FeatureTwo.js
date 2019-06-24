import React from "react";
import "../Features.css";
import ScrollNav from "./ScrollNav";
import FeatureMenu from "../FeatureMenu";

const FeatureTwo = () => {
	const infoArray = ["No additional packages required"];

	return (
		<div className="container-fluid featureContainer">
			<FeatureMenu
				name={"Scroll Nav"}
				source={
					"https://github.com/eesa94/react-features/tree/master/src/Components/Features/2.FeatureTwo"
				}
				info={infoArray}
			/>
			<div className="row" style={{ marginTop: "50px", height: "250px" }}>
				<div className="col-lg-10 offset-lg-1">
					<ScrollNav />
				</div>
			</div>
			<div className="row" style={{ height: "800px" }}>
				<div className="col-lg-6 offset-lg-3 position-fixed text-left">
					<h1 className="white changa8 mb3">How it Works</h1>
					<p className="changa2 white howItWorksText">
						An example of a top navigation bar that changes upon scrolling down
						the page.
					</p>
					<p className="changa2 white howItWorksText">
						This technique can be used for subtly modifying the styling e.g.
						transparent to opaque background, size of text, or width of the nav
						bar.
					</p>
					<p className="changa2 white howItWorksText">
						Requires a function to detect scroll position which can then be used
						to style components dynamically.
					</p>
				</div>
			</div>
		</div>
	);
};

export default FeatureTwo;
