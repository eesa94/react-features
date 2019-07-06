import React from "react";
import "../Features.css";
import Navbar from "./Navbar";
import FeatureMenu from "../FeatureMenu";

const FeatureThree = () => {
	const infoArray = ["No additonal packages required"];

	return (
		<div>
			<Navbar />
			<div className="container-fluid featureContainer">
				<div className="row" style={{ paddingTop: "180px" }}>
					<div className="col-6 offset-3">
						<FeatureMenu
							name={"Nav Hover FX"}
							source={
								"https://github.com/eesa94/react-features/tree/master/src/Components/Features/3.FeatureThree"
							}
							info={infoArray}
						/>

						<div className="row">
							<div className="col-10 offset-1">
								<h1 className="white changa8 mb1">How it Works</h1>
								<p className="howItWorksText changa2 white">
									A simple example of individual hover effects without using CSS
								</p>
								<p className="howItWorksText changa2 white">
									The outer Navbar component contains an array of links which
									will be rendered in the navbar.
								</p>
								<p className="howItWorksText changa2 white">
									This array is mapped through, outputting a NavLink component
									for each item. The index of each element is passed down as a
									prop to the NavLink component.
								</p>
								<p className="howItWorksText changa2 white">
									NavLink is a stateful component which uses an 'activeLink'
									property in its state to manage which element is hovered.
								</p>
								<p className="howItWorksText changa2 white">
									The 'handleMouseEnter' function takes in the index prop as a
									parameter, and sets the value of the activeLink property in
									the state to the current index. Without this, every link would
									be affected on hover.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeatureThree;
