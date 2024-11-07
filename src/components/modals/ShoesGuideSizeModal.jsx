import React from "react";
import guideImage from "../../assets/size-guide.png"

export default function ShoesGuideSizeModal () {
	return (
		<div className="shoes-size-modal">
			<h1>Size Guide</h1>

			<h2>How to measure shoe size?</h2>
			
			<div className="shoes-size-modal__info">
				<div className="shoes-size-modal__desription">
					<p>
						Follow the simple steps below to determine your shoe size. Make sure you do this during or at the end of day to ensure the right size (feet typically swell during the day).
					</p>
					<ol>
						<li>Put a piece of blank paper under your feet. Stand up straight and have your heel lightly touching against the wall.</li>
						<li>Have someone mark the end of the longest toe and the back of your heel on the sheet with a pen or pencil. Afterwards measure the length of your feet from heel to toe.</li>
						<li>Repeat the steps for your other foot and compare it with our size chart below.</li>
					</ol>
				</div>
				<div className="shoes-size-modal__image">
					<img src={guideImage} alt="shoes guide"/>
				</div>
			</div>
		</div>
	)
}