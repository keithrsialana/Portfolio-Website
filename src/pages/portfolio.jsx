import React from "react";
import ProjectElement from "../components/projectElement";
import {projects} from "../data/projects";

const portfolio = () => {
	
	return (
		<div className="container-fluid">
			<h1 className="text-center display-2 text-mustard mb-4">
				Here are some projects I've done!
			</h1>
			<div className="card-group vh-100">
				<div className="row">
					{projects.map((project) => {
						return (
							<div className="col-md-4 mb-2">
								<ProjectElement
									title={project.title}
									tech={project.tech}
									description={project.description}
									imgUrl={project.imgUrl}
									gitHubUrl={project.gitHubUrl}
									deployedUrl={project.deployedUrl}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default portfolio;
