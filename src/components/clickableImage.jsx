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
			<div className="position-absolute top-50 start-50 translate-middle text-white bg-blue p-3 rounded">
				<h2>{title}</h2>
				<p>
					{description}
				</p>
			</div>
		</div>
	);
};

export default clickableImage;
