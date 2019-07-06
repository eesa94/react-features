import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./ScrollNav.css";

export class Nav extends Component {
	constructor(props) {
		super(props);

		this.state = {
			scrolled: false
		};

		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		document.addEventListener("scroll", this.handleScroll);
	}

	handleScroll = () => {
		const scrolled = window.scrollY > 50;
		if (scrolled !== this.state.scrolled) {
			this.setState({
				scrolled: scrolled
			});
			console.log(scrolled);
		}
	};

	render() {
		const promptTitle = this.state.scrolled ? "Scroll Up" : "Scroll Down";

		return (
			<div className="scrollNavWrapper">
				<nav
					className="navigation"
					style={
						this.state.scrolled
							? { backgroundColor: "white" }
							: { backgroundColor: "rgba(255, 255, 255, 0)" }
					}
				>
					<div
						className={
							this.state.scrolled
								? "navigationInner navigationInnerScrolled"
								: "navigationInner navigationInnerTop"
						}
					>
						<h1
							className={
								this.state.scrolled
									? "brand changa6 black"
									: "brand changa6 cyan"
							}
						>
							BRAND
						</h1>
						<ul className="linkList d-flex flex-row justify-content-center align-items-center">
							<li className="linkListItem">
								<span className="scrollNavLink">Link 1</span>
							</li>
							<li className="linkListItem">
								<span className="scrollNavLink">Link 2</span>
							</li>
						</ul>
					</div>
				</nav>

				<div className="prompt" style={{ float: "right", marginRight: "10%" }}>
					<h3 className="changa8 animated pulse animatedElement">
						{promptTitle}
					</h3>
					{this.state.scrolled ? (
						<p className="changa8 promptArrow animated pulse animatedElement">
							&uarr;
						</p>
					) : (
						<p className="changa8 promptArrow animated pulse animatedElement">
							&darr;
						</p>
					)}
				</div>
			</div>
		);
	}
}

export default withRouter(Nav);
