import React, { useState } from "react";
import { CartIcon, CompareIcon, LikeIcon } from "../../assets/icons";

export default function ProductCard({product, openModal}) {
	const [selectedColor, setSelectedColour] = useState(product?.colours[1])
	const [selectedSize, setSelectedSize] = useState(product?.sizes[1])
	const [selectedSizeConversion, setSelectedSizeConversion] = useState({ UK: "UK" })
	const [selectedPreviewImage, setSelectedPreviewImage] = useState(product?.images[0]) // TODO add colours options 				

	const conversionMapper = [
		{ UK: "UK" },
		{ US: "US" },
		{ EU: "EU" },
		{ cm: "Foot Length (cm)" },
	];

	const convertSize = (size) => {
		return size.title.find(size => size[Object.keys(selectedSizeConversion)[0]] !== undefined)[Object.keys(selectedSizeConversion)[0]]
	}


	return (
		<section className="card">
			<div className="card__preview">
				<div className="card__main-photo">
					<img src={selectedPreviewImage.url} alt={selectedPreviewImage.alt} />
				</div>
					
				<div className="card__gallery">
					{product.images.map((image) => (
						<button
							className={`
								image-button
								${image.id === selectedPreviewImage.id ? "image-button--selected" : ""}
							`}
							key={image.url}
							onClick={() => setSelectedPreviewImage(image)}
					>
							<img src={image.url} alt={image.alt} />
						</button>
					))}
				</div>
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
								<button
									key={colour.id} 
									className={`
										image-button
										${selectedColor.id === colour.id ? "image-button--selected" : ""}
									`}
									onClick={() => setSelectedColour(colour)}
									disabled={!colour.available}
								>
									<img 
										src={colour.image} 
										alt={colour.title} 
										className="card__colour-image"
									/>
								</button>
							);
						})}
					</div>
				</div>

				<div className="card__size-configurator">
					<p className="card__size-label">
						Size: 
						<span className="card__selected-size">{convertSize(selectedSize)}</span>
						<span className="card__selected-conversion">{Object.keys(selectedSizeConversion)[0]}</span>
					</p>

					<div className="card__size-conversion-picker">
						{conversionMapper.map((conversion) => {
							const key = Object.keys(conversion)[0];
							const label = conversion[key];

							return (
								<button
									key={key}
									className={`
										plain-button
										${Object.keys(selectedSizeConversion)[0] === key ? "plain-button--selected" : ""}
									`}
									onClick={() => setSelectedSizeConversion(conversion)}
								>
									{label}
								</button>
							);
						})}
					</div>

					<div className="card__size--picker">
						{product.sizes.map((size) => {
							const foundSize = convertSize(size);

							return (
								<button
									key={size.id}
									className={`
										outlined-button
										${selectedSize?.id === size.id ? "outlined-button--selected" : "" }
									`}
									disabled={!size.available}
									onClick={() => setSelectedSize(size)}
								>
									{foundSize}
								</button>
							)
						})}
					</div>

					<div className="card__size--info" >
						<button onClick={openModal} className="plain-button">Size guide</button>
					</div>
				</div>

				<div className="card__actions">
					<button className="primary-button"><CartIcon />Add to cart</button>
					<button className="outlined-button"><LikeIcon /></button>
					<button className="plain-button"><CompareIcon /></button>
				</div>
			</div>
		</section>
	)
}