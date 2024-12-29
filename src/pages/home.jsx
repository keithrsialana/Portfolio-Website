import { Link } from "react-router-dom";
import ClickableImage from "../components/clickableImage";
import ArticleSection from "../components/articleSection";
import { FaReact, FaCss3Alt } from "react-icons/fa";
import { DiJavascript, DiPostgresql } from "react-icons/di";
import { SiTypescript, SiMongodb } from "react-icons/si";
import { TbSql, TbBrandCSharp } from "react-icons/tb";

function Home() {
	const bios = [
		{
			title: "History",
			content:
				"As a child, Keith grew up super easy-going and had a friendly approach towards interacting with others. Whilst having an interest in Sports and Arts, Keith's interests had always leaned more towards technology. Since at the age of 4, Computers and video games have always been a part of Keith's life. Keith's interest in programming started in highschool when he took both Computer Engineering and Computer Sciences courses. Since then, he's taught himself different languages like Python and Javascript while learning Visual Basic and Assembly in highschool.",
		},
		{
			title: "Post-Secondary",
			content:
				"After highschool, he continued to pursue the tech field by taking Conestoga College's Computer Programming/Analyst program where he learned to create Web/Desktop applications using languages like HTML, CSS, Javascript, SQL and C#. Throughout college, he also had the chance to create Web applications using technologies like ASP.NET Core, ASP.Net MVC, and RESTful API. In 2020, he accumulated amazing grades for his first and second years in the program and was able to participate in the College's co-op program.",
		},
		{
			title: "Field-Work",
			content:
				"After the second year, he was then hired as a co-op student with Linamar Corp. doing Desktop Support Technician work for 8 months, then moved to 4 more months of Application Development with the same company. After completing his co-op year, he graduated college with an Ontario College Advanced Diploma with Distinction at 2022 with an overall program 3.7 GPA and a 3.9 GPA for his final year.",
		},
		{
			title: "Current",
			content:
				"Finally graduating the EdX Full-Stack Development bootcamp, Keith is now working on expanding and sharpening his portfolio and resume, and is looking for jobs in the tech industry. On top of this, he has started participating in a Unity C# Game Development project to revive a beloved game called Defiance. The project can be found on Steam! If you're interested in giving him a chance through an interview, please don't hesitate to reach out!",
		},
	];
	return (
		<div className="container-fluid">
			<h1 className="text-center display-2 text-mustard">Hello friends!</h1>
			<h2 className="text-center mb-5">
				My name is <span className="text-tomato">Keith Sialana</span>, welcome
				to my website!
			</h2>
			<div className="container">
				<h2 className="text-center bg-mustard display-7 pb-2 pl-2 pr-2 text-black rounded dropshadow">
					<h2 className="centered bg-tomato">Main Technologies</h2>
					<span className="row">
						<span className="col enlarge-anim">
							<FaReact style={{ fontSize: "1.5em" }} />
							<div>React.JS</div>
						</span>
						<span className="col enlarge-anim">
							<DiJavascript
								style={{ fontSize: "1.5em" }}
							/>
							<div>Javascript</div>
						</span>
						<span className="col enlarge-anim">
							<SiTypescript
								style={{ fontSize: "1.5em" }}
							/>
							<div>Typescript</div>
						</span>
						<span className="col enlarge-anim">
							<FaCss3Alt
								style={{ fontSize: "1.5em" }}
							/>
							<div>Javascript</div>
						</span>
					</span>
					<span className="row">
						<span className="col enlarge-anim">
							<DiPostgresql
								style={{ fontSize: "1.5em" }}
							/>
							<div>PostgreSQL</div>
						</span>
						<span className="col enlarge-anim">
							<SiMongodb
								style={{ fontSize: "1.5em" }}
							/>
							<div>MongoDB</div>
						</span>
						<span className="col enlarge-anim">
							<TbSql style={{ fontSize: "1.5em" }} />
							<div>SQL</div>
						</span>
						<span className="col enlarge-anim">
							<TbBrandCSharp
								style={{ fontSize: "1.5em" }}
							/>
							<div>C#</div>
						</span>
					</span>
				</h2>
			</div>
			<div className="container">
				<h2 className="rounded bg-moonstone centered looping-hover-anim mt-5 text-white pt-3 pb-3 dropshadow">
					Mastering the
					<span className="rainbow-text">&#160;art of code&#160;</span>
					with a perpetual drive to explore new technologies
				</h2>
			</div>

			<div className="row text-center mt-5">
				<div className="col-md-6">
					<div className="text-center">
						<img
							className="img-fluid glow profilePic mb-3 dropshadow"
							src="/pfp.png"
							alt="Keith Sialana"
						/>
					</div>
				</div>
				<div className="col-md-6">
					{bios.map((section) => {
						return (
							<ArticleSection title={section.title} content={section.content} />
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Home;
