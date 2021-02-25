import React from "react";

export default function CornerRibbon({ discount }) {
	return (
		<>
			<div className='ribbon ribbon-top-left'>
				<span>{discount} off</span>
			</div>

			<style jsx='true'>{`
				/* common */
				.ribbon {
					width: 150px;
					height: 150px;
					overflow: hidden;
					position: absolute;
				}

				.ribbon::before,
				.ribbon::after {
					position: absolute;
					z-index: -1;
					content: "";
					display: block;
					border: 5px solid #2980b9;
				}

				.ribbon span {
					position: absolute;
					display: block;
					width: 225px;
					padding: 15px 0;
					background-color: #3498db;
					box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
					color: #fff;
					font: 700 18px/1 "Lato", sans-serif;
					text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
					text-transform: uppercase;
					text-align: center;
				}

				/* top left*/
				.ribbon-top-left {
					top: -10px;
					left: -10px;
				}

				.ribbon-top-left::before,
				.ribbon-top-left::after {
					border-top-color: transparent;
					border-left-color: transparent;
				}

				.ribbon-top-left::before {
					top: 0;
					right: 0;
				}

				.ribbon-top-left::after {
					bottom: 0;
					left: 0;
				}

				.ribbon-top-left span {
					right: -25px;
					top: 30px;
					transform: rotate(-45deg);
				}
			`}</style>
		</>
	);
}
