import React from "react";
import ProjectElem from "../components/projectElem";
import { projects } from "../data/projects";
import { useState, useRef } from "react";

const portfolio2 = () => {
	const [activeProject, setActiveProject] = useState(null);
	const scrollableRef = useRef(null);

	const handleProjectClick = (project) => {
		setActiveProject(project);
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		if (scrollableRef.current) {
            scrollableRef.current.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
	}; 

	return (
		<div className="container-fluid vh-100" ref={scrollableRef}>
			<h1 className="text-center display-2 text-mustard mb-4">
				Here are some projects I've done!
			</h1>
			{activeProject ? (
				<div className="container">
					<div className="centered">
						<img
							src={activeProject.imgUrl}
							alt=""
							className="page-image glow dropshadow"
						/>
					</div>
					<div className="active-project-card bg-antiflashWhite glow dropshadow dashed-border">
						<div>
							<h2 className="text-tomato">{activeProject.title}</h2>
						</div>
						<div>
							<h5 className="text-yale">{activeProject.tech}</h5>
						</div>
						<div>
							<p className="text-yale-darker">{activeProject.description}</p>
						</div>
						<div>
							{activeProject.gitHubUrl? (<a href={activeProject.gitHubUrl}>
								<button className="btn bg-moonstone">
									View Github Repository
								</button>
							</a>
							):
							<></>}
							
							{activeProject.deployedUrl ? (
								<a href={activeProject.deployedUrl}>
									<button className="btn bg-moonstone ml-3">
										View Deployed
									</button>
								</a>
							) : (
								<></>
							)}
						</div>
					</div>
				</div>
			) : (
				<></>
			)}
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
							onClick={() => { handleProjectClick(project); scrollToTop(); }}
						/>
					);
				})}
			</ul>
		</div>
	);
};
export default portfolio2;
