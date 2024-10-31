import React from "react";
import ProjectElement from "../components/projectElement";
const portfolio = () => {
	const projects = [
		{
			title: "HMRDiscordBot",
			tech: "Javascript",
			description:
				"Using Discord.js, Keith created from scratch, this General-Use Bot for his server in a social platform called Discord.",
			imgUrl:
				"https://cdn.pixabay.com/photo/2024/03/11/19/15/ai-generated-8627457_960_720.png",
			gitHubUrl: "https://github.com/keithrsialana/HMRDiscordBot",
			deployedUrl: "",
		},
		{
			title: "Voice Assistant",
			tech: "Python",
			description:
				"Keith's voice assistant is an attempt to make a voice responsive task bot like Siri, Bigsby, and Cortana.",
			imgUrl:
				"https://cdn.pixabay.com/photo/2018/12/07/17/57/futuristic-3862179_960_720.jpg",
			gitHubUrl: "https://github.com/keithrsialana/Voice-Assistant",
			deployedUrl: "",
		},
		{
			title: "Portfolio-Website",
			tech: "React.js, Javascript",
			description:
				"Using React and Bootstrap, Keith made this very portfolio website!",
			imgUrl:
				"https://cdn.pixabay.com/photo/2018/05/14/16/54/cyber-3400789_960_720.jpg",
			gitHubUrl: "https://github.com/keithrsialana/Portfolio-Website",
			deployedUrl: "",
		},
		{
			title: "Project-README",
			tech: "Javascript",
			description:
				"A small application that generates a README.md file for the user after answering some prompts in a console",
			imgUrl:
				"https://cdn.pixabay.com/photo/2020/02/15/16/09/loveourplanet-4851331_960_720.jpg",
			gitHubUrl: "https://github.com/keithrsialana/Project-README",
			deployedUrl: "",
		},
		{
			title: "TalentMap",
			tech: "Typescript, PostgreSQL",
			description:
				"A simple application that lets Keith apply database manipulation through a Node.js console environment",
			imgUrl:
				"https://cdn.pixabay.com/photo/2023/08/09/19/47/ai-generated-8180209_960_720.jpg",
			gitHubUrl: "https://github.com/keithrsialana/TalentMap",
			deployedUrl: "",
		},
		{
			title: "AstroCloud",
			tech: "Typescript",
			description:
				"A small application that Keith created to exercise RESTful API request and response prompts",
			imgUrl:
				"https://cdn.pixabay.com/photo/2024/08/17/10/25/ai-generated-8975559_960_720.jpg",
			gitHubUrl: "https://github.com/keithrsialana/AstroCloud",
			deployedUrl: "https://astrocloud.onrender.com/",
		},
		{
			title: "AutoRunApp",
			tech: "C#",
			description:
				"This mini-project was created to let the user auto-launch Windows .exe applications after it was detected that it had closed.",
			imgUrl:
				"https://cdn.pixabay.com/photo/2018/04/12/18/13/update-3314287_960_720.png",
			gitHubUrl: "https://github.com/keithrsialana/AutoRunApp",
			deployedUrl: "",
		},
	];
	return (
		<div className="container-fluid">
			<h1 className="text-center display-2">
				Here are some projects I've done!
			</h1>
			<div className="card-group">
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
