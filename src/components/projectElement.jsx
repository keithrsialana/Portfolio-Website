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
					<div className="row row-cols-2 text-center">
						<div className="col">
							<a href={gitHubUrl} className="btn btn-primary">
								Check the Code!
							</a>
						</div>
						<div className="col">
							{deployedUrl && (
								<a href={deployedUrl} className="btn btn-warning">
									View the site!
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
