import React from "react";
import "../Features.css";
import SideNav from "./SideNav";
import FeatureMenu from "../FeatureMenu";

const FeatureOne = () => {
	const infoArray = ["react-burgers", "onClickOutside"];

	return (
		<div className="container-fluid featureContainer">
			<SideNav />
			<div className="row" style={{ marginTop: "100px" }}>
				<div className="col-6 offset-3">
					<FeatureMenu
						name={"Side Nav"}
						source={
							"https://github.com/eesa94/react-features/tree/master/src/Components/Features/1.FeatureOne"
						}
						info={infoArray}
					/>
					<div className="row">
						<div className="col-10 offset-1">
							<h1 className="white changa8 mb3">How it Works</h1>
							<p className="changa2 white howItWorksText">
								This is an example of an off-canvas side navigation component.
							</p>
							<p className="changa2 white howItWorksText">
								The parent component contains an array of links to output in the
								menu.
							</p>
							<p className="changa2 white howItWorksText">
								The menu is toggled using a separate npm package called
								react-burgers, which is a react-specific version of Jonathan
								Suh's animated CSS hamburgers.
							</p>
							<p className="changa2 white howItWorksText">
								Also used here is a higher order component called
								onClickOutside, which provides a method called
								handleClickOutside to toggle the menu and burger when clicking
								outside the menu component.
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="row" style={{ marginTop: "100px" }}>
					<div className="col-lg-10 offset-lg-1">
					</div>
				</div> */}
		</div>
	);
};

export default FeatureOne;
