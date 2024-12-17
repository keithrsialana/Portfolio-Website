import React from "react";

const articleSection = (props) => {
	const { title, content } = props;
	return (
		<>
		<div className="hover-anim">
			<h1 className="display-5 bg-tomato">{title}</h1>
			<p className="bg-antiflashWhite dropshadow">
				{content}
			</p>
		</div>
		</>
	);
};

export default articleSection;
