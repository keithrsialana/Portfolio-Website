import React from "react";

const ResumeItem = (props) => {
	const { title, position, dateRange, content, _result } = props;
	return (
		<div>
			<h4 className="label text-mustard">{title}</h4>
			<h4 className="label text-mustard">
				{position} | {_result}
			</h4>
			<h5>{dateRange}</h5>
			<p>
				{content}
			</p>
		</div>
	);
};

export default ResumeItem;
