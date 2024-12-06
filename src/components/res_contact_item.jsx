import React from "react";

const ResumeContactItem = (props) => {
	const {label, content, _link} = props;
	return (
		<div className="text-center">
			<h5 className="label text-mustard">{label}</h5>
            {
                _link ? <a href={_link}><h5>{content}</h5></a> : <h5>{content}</h5>
			}
		</div>
	);
};

export default ResumeContactItem;
