import React from "react";

const projectElem = (props) => {
	const { title, description, imgUrl, gitHubUrl, deployedUrl, tech } = props;
	return (
		<li>
			<a href={gitHubUrl} class="card">
				<img src={imgUrl} class="card__image" alt="" />
				<div class="card__overlay">
					<div class="card__header">
						<svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
							<path />
						</svg>
						<img
							class="card__thumb"
							src="https://i.imgur.com/7D7I6dI.png"
							alt=""
						/>
						<div class="card__header-text">
							<h3 class="card__title">{title}</h3>
							<span class="card__status">[{tech}]</span>
						</div>
					</div>
					<p class="card__description">{description}</p>
                    <button className=""></button>
				</div>
			</a>
		</li>
	);
};

export default projectElem;
