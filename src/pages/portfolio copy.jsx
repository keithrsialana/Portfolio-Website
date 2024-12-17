import React from "react";
import ProjectElem from "../components/projectElem";
import { projects } from "../data/projects";

const portfolio2 = () => {
	return (
		<div className="container-fluid">
			<h1 className="text-center display-2 text-mustard mb-4">
				Here are some projects I've done!
			</h1>
			<ul class="cards">
				{projects.map((project) => {
					return (
						<ProjectElem
							title={project.title}
							tech={project.tech}
							description={project.description}
							imgUrl={project.imgUrl}
							gitHubUrl={project.gitHubUrl}
							deployedUrl={project.deployedUrl}
						/>
					);
				})}
			</ul>
		</div>
	);
};
export default portfolio2;
