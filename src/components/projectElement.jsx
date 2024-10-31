import React from "react";

const projectElement = (props) => {
	const { title, description, imgUrl, gitHubUrl, deployedUrl, tech } = props;
	return (
		<div className="card h-100">
			<img src={imgUrl} className="card-img-top fixed-img" alt={`${title} - Project Image`} />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
                <p className="text-danger">[{tech}]</p>
				<p className="card-text">{description}</p>
				<div className="container-fluid">
					<div className="row text-center">
						<div className="col-md-6 mb-2">
							<a href={gitHubUrl} className="btn btn-primary">
								View code!
							</a>
						</div>
						<div className="col-md-6">
							{deployedUrl && (
								<a href={deployedUrl} className="btn btn-warning">
									View website!
								</a>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default projectElement;
