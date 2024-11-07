import React, { useState } from "react";

const product = {
	title: "ASICS GEL-KAYANO 14",
	price: 155.00,
	colours: [
		{
			id: '123',
			title: "Metropolis/Jasper Green",
			image: "http://cdn.mcauto-images-production.sendgrid.net/76382aa1ad255297/409d3422-65aa-4b80-b7cc-5980ed16499f/77x46.png",
			available: false,
		},
		{
			id: '12we3',
			title: "Metropolis/Jasper Green",
			image: "http://cdn.mcauto-images-production.sendgrid.net/76382aa1ad255297/409d3422-65aa-4b80-b7cc-5980ed16499f/77x46.png",
			available: true,
		},
		{
			id: '123x3',
			title: "White/Tai Chi Yellow",
			image: "http://cdn.mcauto-images-production.sendgrid.net/76382aa1ad255297/409d3422-65aa-4b80-b7cc-5980ed16499f/77x46.png",
			available: false,
		},
		{
			id: '12ewe3',
			title: "White/Tai Chi Yellow",
			image: "http://cdn.mcauto-images-production.sendgrid.net/76382aa1ad255297/409d3422-65aa-4b80-b7cc-5980ed16499f/77x46.png",
			available: false,
		},,
		{
			id: '12wwe3',
			title: "White/Tai Chi Yellow",
			image: "http://cdn.mcauto-images-production.sendgrid.net/76382aa1ad255297/409d3422-65aa-4b80-b7cc-5980ed16499f/77x46.png",
			available: true,
		},
	],
	sizes: [
		{
			id: "1",
			title: [
				{ "UK": "6" },
				{ "US": "7" },
				{ "EU": "39" },
				{ "cm": "24" }, // cm length
			],
			available: true,
		},
		{
			id: "2",
			title: [
				{ "UK": "6.5" },
				{ "US": "7.5" },
				{ "EU": "39.5" },
				{ "cm": "24.5" },
			],
			available: true,
		},
		{
			id: "3",
			title: [
				{ "UK": "7" },
				{ "US": "8" },
				{ "EU": "40" },
				{ "cm": "25" },
			],
			available: true,
		},
		{
			id: "4",
			title: [
				{ "UK": "7.5" },
				{ "US": "8.5" },
				{ "EU": "41" },
				{ "cm": "25.5" },
			],
			available: true,
		},
		{
			id: "5",
			title: [
				{ "UK": "8" },
				{ "US": "9" },
				{ "EU": "42" },
				{ "cm": "26" },
			],
			available: true,
		},
		{
			id: "6",
			title: [
				{ "UK": "8.5" },
				{ "US": "9.5" },
				{ "EU": "42.5" },
				{ "cm": "26.5" },
			],
			available: true,
		},
		{
			id: "7",
			title: [
				{ "UK": "9" },
				{ "US": "10" },
				{ "EU": "43" },
				{ "cm": "27" },
			],
			available: true,
		},
		{
			id: "8",
			title: [
				{ "UK": "9.5" },
				{ "US": "10.5" },
				{ "EU": "44" },
				{ "cm": "27.5" },
			],
			available: true,
		},
		{
			id: "9",
			title: [
				{ "UK": "10" },
				{ "US": "11" },
				{ "EU": "44.5" },
				{ "cm": "28" },
			],
			available: true,
		},
		{
			id: "10",
			title: [
				{ "UK": "10.5" },
				{ "US": "11.5" },
				{ "EU": "45" },
				{ "cm": "28.5" },
			],
			available: true,
		},
		{
			id: "11",
			title: [
				{ "UK": "11" },
				{ "US": "12" },
				{ "EU": "46" },
				{ "cm": "29" },
			],
			available: true,
		},
		{
			id: "12",
			title: [
				{ "UK": "11.5" },
				{ "US": "12.5" },
				{ "EU": "46.5" },
				{ "cm": "29.5" },
			],
			available: true,
		},
		{
			id: "13",
			title: [
				{ "UK": "12" },
				{ "US": "13" },
				{ "EU": "47" },
				{ "cm": "30" },
			],
			available: true,
		},
		{
			id: "14",
			title: [
				{ "UK": "12.5" },
				{ "US": "13.5" },
				{ "EU": "47.5" },
				{ "cm": "30.5" },
			],
			available: true,
		},
		{
			id: "15",
			title: [
				{ "UK": "13" },
				{ "US": "14" },
				{ "EU": "48" },
				{ "cm": "31" },
			],
			available: true,
		},
	]
}

export default function ProductCard({}) {
	const [selectedColor, setSelectedColour] = useState(product.colours[1])
	// eslint-disable-next-line 
	const [selectedSize, setSelectedSize] = useState(product.sizes[1])
	const [selectedSizeConversion, setSelectedSizeConversion] = useState("UK")

	const conversionMapper = [
		{ UK: "UK" },
		{ US: "US" },
		{ EU: "EU" },
		{ cm: "Foot Length (cm)" },
	];


	return (
		<main class="product-page">
			<nav className='breadcrumps'>
				<a href="/" className="link">Home</a> 
				<span className="separator">/</span>
				<a href="/" className="link">Unisex Shoes</a>
				<span className="separator">/</span>
				<a href="/" className="link link--active">Unisex SportStyle Shoes</a>
			</nav>

			<section class="card">
				<div>
					image
				</div>

				<div className="card__info">
					<h1 className="card__title">{product.title}</h1>
					<h3 className="card__price">${product.price}</h3>

					<div className="card__colour-configurator">
						<p className="card__colour-label">
							Colour: 
							<span className="card__selected-colour">{selectedColor?.title}</span>
						</p>

						<div className="card__colour-images">
							{product.colours.map((colour) => {
								return (
									<div 
										key={colour.id} 
										className={`
											card__colour-item 
											${!colour.available ? "card__colour-item--disabled" : ""}
											${selectedColor.id === colour.id ? "card__colour-item--selected" : ""}
										`}
										onClick={() => colour.available && setSelectedColour(colour)}
									>
										<img 
											src={colour.image} 
											alt={colour.title} 
											className="card__colour-image"
										/>
									</div>
								);
							})}
						</div>
					</div>

					<div className="card__size-configurator">
						<p className="card__size-label">
							Size: 
							{/* <span className="card__size-selected-size">{selectedSizeConversion}</span> */}
						</p>

						<div className="card__size-conversion-selector">
							{conversionMapper.map((conversion) => {
								const key = Object.keys(conversion)[0];
								const label = conversion[key];

								return (
									<button
										key={key}
										className="size-button"
										onClick={() => setSelectedSizeConversion(key)}
									>
										{label}
									</button>
								);
							})}
						</div>

					</div>
				</div>
			</section>
		</main>
	)
}