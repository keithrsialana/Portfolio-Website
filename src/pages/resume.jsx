import React from "react";
import myLocalPdf from "../../src/assets/CV_Keith_Sialana.pdf";
import ResumeContactItem from "../components/res_contact_item";
import ResumeItem from "../components/resumeItem";
import { FaReact } from "react-icons/fa6";
import { DiJavascript, DiPostgresql } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { TbBrandCSharp, TbSql } from "react-icons/tb";
import { FaCss3Alt } from "react-icons/fa";

const resume = () => {
	return (
		<div className="resume">
			<h1 className="text-center display-2 text-mustard">Keith Ronald Sialana</h1>
			<ResumeContactItem label="Location" content="Guelph, ON, Canada"/>
			<ResumeContactItem label="Email" content="keith.sialana@gmail.com" _link="mailto:keith.sialana@gmail.com"/>
			<ResumeContactItem label="Phone Number" content="+1 (519) 731-5141"/>
			<ResumeContactItem label="LinkedIn" content="https://www.linkedin.com/in/keithrsialana/" _link="https://www.linkedin.com/in/keithrsialana/"/>
			<ResumeContactItem label="GitHub" content="https://github.com/keithrsialana/" _link="https://github.com/keithrsialana/"/>
			<div className="container mt-3">
				<h2 className="text-center bg-tomato display-6 pb-2">
					Professional Summary
				</h2>
				<p>
				Proficient Full-Stack Developer with expertise in ReactJS, Javascript/Typescript, Python, SQL and C#. Adept at designing and implementing responsive applications with strong back-end integration using modern deployment practices.
				</p>
				<h2 className="text-center bg-mustard display-6 pb-2 pt-2 text-black"> 
				<FaReact style={{ color: "black", fontSize: "1.5em" }} />
				<DiJavascript style={{ color: "black", fontSize: "1.5em" }} />
				<SiTypescript style={{ color: "black", fontSize: "1.5em" }} />
				<FaCss3Alt style={{ color: "black", fontSize: "1.5em" }} />
				<DiPostgresql style={{ color: "black", fontSize: "1.5em" }} />
				<TbSql style={{ color: "black", fontSize: "1.5em" }} />
				<TbBrandCSharp style={{ color: "black", fontSize: "1.5em" }} />
				</h2>
				<h2 className="text-center bg-tomato display-6 pb-2">Experience</h2>
				<h4 className="label text-mustard">Linmar Corporation; Guelph, ON, Canada</h4>
				<h4 className="label text-mustard">Application Developer | Co-op</h4>
				<h5>May 2021 - August 2021</h5>
				<p>
					•  Identified and amended language conversion bugs in various UIs of internally-utilized applications during CI/CD cycles using error logs and developer tools
					<br />•  Implemented new functionalities to front ends of critical internally-utilized applications, resulting in seamless integration during CI/CD cycles
					<br />•  Enhanced UI aesthetics with new CSS through Docker and VS Code, boosting user satisfaction by 20%
				</p>
				<h4 className="label text-mustard">Linmar Corporation; Guelph, ON, Canada</h4>
				<h4 className="label text-mustard">Desktop Support Technician | Co-op</h4>
				<h5> September 2020 - April 2021</h5>
				<p>
					• Assisted users via Linamar's Support Ticketing System, ensuring 95% of technical issues with desktops/mobile devices were addressed promptly and adequately with applicable solutions
				</p>
				<h2 className="text-center bg-tomato display-6 pb-2">Education</h2>
				<h4 className="label text-mustard">University of Toronto</h4>
				<h4 className="label text-mustard">
					Full-Stack Development Bootcamp | EdX Bootcamp Certificate
				</h4>
				<h5>September 2024 – December 2024</h5>
				<p>
					• Applied modern frameworks like React.js and Node.js to build responsive, scalable applications.
					<br />• Gained expertise in modern frameworks and tools, including PostgreSQL, React.js, Node.js, and RESTful APIs.
					<br />• Created a full-stack e-commerce platforms with PostgreSQL and React.js, featuring dynamic inventory management and secure user authentication
				</p>
				<h4 className="label text-mustard">Conestoga College</h4>
				<h4 className="label text-mustard">
					Computer Programmer/Analyst | Advanced Diploma; 3.7 GPA
				</h4>
				<h5>September 2019 – April 2022</h5>
				<p className="ml-md-4">
					• Led a team in planning, documenting, and developing multi-featured web applications, managing the project life cycle from start to finish.
					<br />• Built responsive and accessible Web/Desktop applications, prioritizing UI/UX design and accessibility.
					<br />• Developed Windows Desktop applications with C# and SQL local databases.
					<br />• Gained foundational knowledge in cloud-based databases and game development with C# and MonoGame.
				</p>
				<h2 className="text-center bg-tomato display-6 pb-2">
					References
				</h2>
				<h4 className="label text-mustard"><a href="https://www.linkedin.com/in/jazztazz/" style={{color:'#FED766'}}>Cody Chase</a></h4>
				<p>(WIP)</p>
				<h4 className="label text-mustard"><a href="https://www.linkedin.com/in/404pandas/" style={{color:'#FED766'}}>Mary Elenius</a></h4>
				<p>EdX Teacher Assistant | Knoxville, Tennessee | <a href="mailto:mary.panda.jackson@gmail.com">mary.panda.jackson@gmail.com</a> | 772-834-2342</p>
				<h2 className="text-center bg-tomato display-6 pb-2">
					Other Proficiencies & Interests
				</h2>
				<h4 className="label text-mustard">Technologies</h4>
				<p>
				Docker • REST APIs • Azure DevOps • MySQL • ASP.NET Core • Entity Framework • PowerShell • Java • PHP
				</p>
				<h4 className="label text-mustard">Interests</h4>
				<p>
					Astronomy • StarTalk Podcast • Listening to ‘Chill’ music • Video Games • Digital Art • Playing Basketball
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
