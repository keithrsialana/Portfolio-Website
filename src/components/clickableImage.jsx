import React from "react";

const clickableImage = (props) => {
    const {url, title, description} = props;
	return (
		<div className="position-relative text-center image-hover no-blur">
			<img
				src={url}
				className="img-fluid glow"
				alt="Image with overlay"
			/>
			<div className="position-absolute top-50 start-50 translate-middle p-1 rounded max-size-90 bg-tomato">
				<h3 className="text-yale-darker">{title}</h3>
				<p>
					{description}
				</p>
			</div>
		</div>
	);
};

export default clickableImage;
