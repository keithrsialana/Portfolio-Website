import React from "react";

const projectElem = (props) => {
	const { title, description, imgUrl, gitHubUrl, deployedUrl, tech, onClick } = props;
	return (
		<li>
			<div class="card dropshadow" onClick={onClick}>
				<img src={imgUrl} class="card__image" alt="" />
				<div class="card__overlay">
					<div class="card__header">
						<svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
							<path />
						</svg>
						<img class="card__thumb" src="pfp.png" alt="" />
						<div class="card__header-text">
							<h3 class="card__title">{title}</h3>
							<span class="card__status">[ {tech} ]</span>
						</div>
					</div>
					<p class="card__description">{description}</p>
				</div>
			</div>
		</li>
	);
};

export default projectElem;
