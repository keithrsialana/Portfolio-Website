import React from "react";

const articleSection = (props) => {
	const { title, content } = props;
	return (
		<>
			<h1 className="bg-primary display-5">{title}</h1>
			<p>
				{content}
			</p>
		</>
	);
};

export default articleSection;
