import React from "react";

const articleSection = (props) => {
	const { title, content } = props;
	return (
		<>
			<h1 className="display-5 bg-tomato">{title}</h1>
			<p className="bg-antiflashWhite">
				{content}
			</p>
		</>
	);
};

export default articleSection;
