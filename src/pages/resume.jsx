import React from "react";
import myLocalPdf from "../../src/assets/Dev_CV_Keith_Sialana.pdf";
import ResumeContactItem from "../components/res_contact_item";
import ResumeItem from "../components/resumeItem";

const resume = () => {
	return (
		<div className="resume">
			<h1 className="text-center display-2 text-mustard">Keith Ronald Sialana</h1>
			<ResumeContactItem label="Location" content="Guelph, ON, Canada"/>
			<ResumeContactItem label="Email" content="keith.sialana@hotmail.com" _link="mailto:keith.sialana@hotmail.com"/>
			<ResumeContactItem label="Phone Number" content="+1 (519) 731-5141"/>
			<ResumeContactItem label="LinkedIn" content="https://www.linkedin.com/in/keithrsialana/" _link="https://www.linkedin.com/in/keithrsialana/"/>
			<ResumeContactItem label="GitHub" content="https://github.com/keithrsialana/" _link="https://github.com/keithrsialana/"/>
			<div className="container mt-3">
				<h2 className="text-center bg-tomato display-6 pb-2">
					Professional Summary
				</h2>
				<p>
					Developer with a strong foundation in Web and Application Development,
					experienced in C#, Java, JavaScript, Python, CSS, HTML, and ReactJS.
					Skilled in back-end integration with MySQL, using SQL, XQuery, and
					LINQ. Additional experience with Docker environments and modern
					deployment practices.
				</p>
				<h2 className="text-center bg-tomato display-6 pb-2">Experience</h2>
				<h4 className="label text-mustard">Linmar Corporation; Guelph, ON, Canada</h4>
				<h4 className="label text-mustard">Application Developer | Co-op</h4>
				<h5>May 2021 - August 2021</h5>
				<p>
					• Identified and amended language conversion bugs in various UIs of
					internally-utilized applications during Continuous Integration and
					Continuous Delivery (CI/CD) cycles using error logs and developer
					tools
					<br />• Implemented new functionalities to front ends of critical
					internally-utilized applications, resulting in seamless integration
					during CI/CD cycles
					<br />• Revamped UI design using Docker, and VS Code to enhance user
					experience and improve overall visual aesthetics
				</p>
				<h4 className="label text-mustard">Linmar Corporation; Guelph, ON, Canada</h4>
				<h4 className="label text-mustard">Desktop Support Technician | Co-op</h4>
				<h5> September 2020 - April 2021</h5>
				<p>
					• Assisted users via Linamar's Support Ticketing System, ensuring
					technical issues with desktops/mobile devices were addressed promptly
					and adequately with applicable solutions
					<br />• Automated and customized Group Policy settings using
					PowerShell scripts, allowing for streamlining of deployment process,
					ensuring consistency across all systems
					<br />• Developed and implemented custom PowerShell scripts to
					optimize and automate routine tasks, significantly enhancing overall
					productivity and process efficiency
				</p>
				<h2 className="text-center bg-tomato display-6 pb-2">Education</h2>
				<h4 className="label text-mustard">University of Toronto</h4>
				<h4 className="label text-mustard">
					Full-Stack Development Bootcamp | EdX Bootcamp Certificate
				</h4>
				<h5>September 2024 – December 2024</h5>
				<p>
					• Developed web and console-based applications using Full-Stack
					Development technologies
					<br />• Polished understanding of technologies like PostgreSQL,
					React.js, Node.js, RESTful API
					<br />• Polished application and understanding of languages; HTML,
					CSS, Javascript, Typescript, Python, and SQL
				</p>
				<h4 className="label text-mustard">Conestoga College</h4>
				<h4 className="label text-mustard">
					Computer Programmer/Analyst | Advanced Diploma; 3.7 GPA
				</h4>
				<h5>September 2019 – April 2022</h5>
				<p className="ml-md-4">
					• Led a team in planning, documenting, and developing multi-featured
					web applications, managing the project life cycle from start to
					finish.
					<br />• Built accessible Web/Desktop applications, prioritizing UI/UX
					design and accessibility.
					<br />• Developed Windows Desktop applications with C# and SQL local
					databases.
					<br />• Created responsive web applications optimized for various
					devices and screen sizes.
					<br />• Gained foundational knowledge in cloud-based databases and
					game development with C# and MonoGame.
				</p>
				<h2 className="text-center bg-tomato display-6 pb-2">
					Technical Proficiencies & Interests
				</h2>
				<h4 className="label text-mustard">Technologies</h4>
				<p>
					Docker; REST APIs; Azure DevOps; MySQL; ASP.NET Core; Entity
					Framework; React.js, PowerShell; PostgreSQL
				</p>
				<h4 className="label text-mustard">Programming Languages</h4>
				<p>C#; Java; HTML5; CSS; Python; JavaScript; Typescript; PHP; SQL</p>
				<h4 className="label text-mustard">Interests</h4>
				<p>
					Astronomy; StarTalk Podcast; Listening to ‘Chill’ music; Video Games; Digital Art; Playing Basketball
				</p>
				<div className="row text-center">
					<div className="col-sm-12">
						<a href={myLocalPdf} download>
							<button type="button" class="btn btn-success mb-3">
								Download my Resume as a PDF
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default resume;
