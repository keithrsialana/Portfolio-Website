import React from "react";
import myLocalPdf from "../../src/assets/CV_Keith_Sialana.pdf";
import ResumeContactItem from "../components/res_contact_item";
import { FaReact } from "react-icons/fa6";
import { DiJavascript, DiPostgresql } from "react-icons/di";
import { SiTypescript, SiMongodb } from "react-icons/si";
import { TbBrandCSharp, TbSql } from "react-icons/tb";
import { FaCss3Alt } from "react-icons/fa";

const resume = () => {
	return (
		<div className="resume">
			<h1 className="text-center display-2 text-mustard">
				Keith Ronald Sialana
			</h1>
			<ResumeContactItem label="Location" content="Guelph, ON, Canada" />
			<ResumeContactItem
				label="Email"
				content="keith.sialana@gmail.com"
				_link="mailto:keith.sialana@gmail.com"
			/>
			<ResumeContactItem
				label="LinkedIn"
				content="https://www.linkedin.com/in/keithrsialana/"
				_link="https://www.linkedin.com/in/keithrsialana/"
			/>
			<ResumeContactItem
				label="GitHub"
				content="https://github.com/keithrsialana/"
				_link="https://github.com/keithrsialana/"
			/>
			<div className="container mt-3">
				<h2 className="text-center bg-tomato display-6 pb-2">
					Professional Summary
				</h2>
				<p>
					Proficient Full-Stack Developer with expertise in ReactJS,
					Javascript/Typescript, Python, SQL and C#. Skilled in building
					responsive full-stack applications with modern tools and practices.
					Achieved Graduation with Distinction after graduating college.
					Completed freeCodeCamp’s Foundational C# with Microsoft Certificate in
					October 2024.
				</p>
				<h2 className="text-center bg-mustard display-6 pb-2 pt-2 text-black">
					<FaReact className="enlarge-anim" style={{ fontSize: "1.5em" }} />
					<DiJavascript
						className="enlarge-anim"
						style={{ fontSize: "1.5em" }}
					/>
					<SiTypescript
						className="enlarge-anim"
						style={{ fontSize: "1.5em" }}
					/>
					<FaCss3Alt className="enlarge-anim" style={{ fontSize: "1.5em" }} />
					<DiPostgresql
						className="enlarge-anim"
						style={{ fontSize: "1.5em" }}
					/>
					<SiMongodb className="enlarge-anim" style={{ fontSize: "1.5em" }} />
					<TbSql className="enlarge-anim" style={{ fontSize: "1.5em" }} />
					<TbBrandCSharp
						className="enlarge-anim"
						style={{ fontSize: "1.5em" }}
					/>
				</h2>
				<h2 className="text-center bg-tomato display-6 pb-2">Education</h2>
				<h4 className="label text-mustard">University of Toronto</h4>
				<h4 className="label text-mustard">
					Full-Stack Development Bootcamp | EdX Bootcamp Certificate
				</h4>
				<h5>September 2024 – December 2024</h5>
				<p>
					<ul>
						<li>
							Built scalable single-page and full-stack applications using MERN
							stack and PostgreSQL.
						</li>
						<li>
							Created e-commerce platforms with inventory management and JWT
							authentication.
						</li>
						<li>
							Collaborated in agile teams to deliver responsive, accessible, and
							secure applications.
						</li>
					</ul>
				</p>
				<h4 className="label text-mustard">Conestoga College</h4>
				<h4 className="label text-mustard">
					Computer Programmer/Analyst | Advanced Diploma; 3.7 GPA
				</h4>
				<h5>September 2019 – April 2022</h5>
				<p className="ml-md-4">
					<ul>
						<li>
							Led a team in planning, documenting, and developing multi-featured
							web applications, managing the project life cycle from start to
							finish.
						</li>
						<li>
							Built responsive and accessible Web/Desktop applications,
							prioritizing UI/UX design and accessibility.
						</li>
						<li>
							Developed small Windows desktop applications with C# based
							frameworks and local SQL databases, designing the project forms UI
							and functionality on Visual Studio Community 2019.
						</li>
					</ul>
				</p>
				<h2 className="text-center bg-tomato display-6 pb-2">Experience</h2>
				<h4 className="label text-mustard">
					Linmar Corporation; Guelph, ON, Canada
				</h4>
				<h4 className="label text-mustard">Application Developer | Co-op</h4>
				<h5>May 2021 - August 2021</h5>
				<p>
					<ul>
						<li>
							Identified and fixed UI bugs while enhancing front-end aesthetics
							with CSS, leading to a 20% increase in user satisfaction.
						</li>
						<li>
							Updated language localization features, ensuring the application
							was accessible to a broader user base.
						</li>
						<li>
							Utilized Azure DevOps with the development team to manage the
							project’s plan, version control, and tasks, enhancing team
							collaboration.
						</li>
					</ul>
				</p>
				<h4 className="label text-mustard">
					Linmar Corporation; Guelph, ON, Canada
				</h4>
				<h4 className="label text-mustard">
					Desktop Support Technician | Co-op
				</h4>
				<h5> September 2020 - April 2021</h5>
				<p>
					<ul>
						<li>
							Provided technical support to company users, immediately resolving
							issues with computers and other devices to ensure smooth operation
							and user satisfaction.
						</li>
						<li>
							Automated routine tasks using PowerShell and Bash scripts, and
							created comprehensive documentation for using the scripts,
							significantly reducing manual workload and improving task
							efficiency for other technicians.
						</li>
						<li>
							Developed a custom Windows 11 installation USB with pre-installed
							company applications, streamlining the Windows setup process for
							company devices.
						</li>
					</ul>
				</p>
				<h2 className="text-center bg-tomato display-6 pb-2">
					Other Proficiencies & Interests
				</h2>
				<h4 className="label text-mustard">Technologies</h4>
				<p>
					Docker • REST APIs • Azure DevOps • MySQL • ASP.NET Core • Entity
					Framework • PowerShell • Java • PHP
				</p>
				<h4 className="label text-mustard">Interests</h4>
				<p>
					Astronomy • StarTalk Podcast • Listening to ‘Chill’ music • Video
					Games • Digital Art • Playing Basketball
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
