import { Link } from "react-router-dom";
function Home() {
	return (
		<div className="container-fluid">
			<h1 className="text-center display-2">About Keith Sialana</h1>
			<div className="row text-center">
				<div className="col-md-6">
					<div className="text-center">
						<img
							className="img-fluid meLOLimage"
							src="src\assets\MeLOL2.JPEG"
							alt="Keith Sialana"
						/>
					</div>
				</div>
				<div className="col-md-6">
					<h1 className="bg-primary display-5">History</h1>
					<p>
            As a child, Keith grew up super easy-going and had a friendly approach towards interacting with others. Whilst having an interest in Sports and Arts, Keith's interests had always leaned more towards technology.
						Since at the age of 4, Computers and video games have always been a part of Keith's life.
						Keith's interest in programming started in highschool when he took
						both Computer Engineering and Computer Sciences courses. Since then,
						he's taught himself different languages like Python and Javascript
						while learning Visual Basic and Assembly in highschool.
					</p>
					<h1 className="bg-primary display-5">Post-Secondary</h1>
					<p>
						After highschool, he continued to pursue the tech field by taking
						Conestoga College's Computer Programming/Analyst program where he
						learned to create Web/Desktop applications using languages like
						HTML, CSS, Javascript, SQL and C#. Throughout college, he also had
						the chance to create Web applications using technologies like
						ASP.NET Core, ASP.Net MVC, and RESTful API. In 2020, he accumulated
						amazing grades for his first and second years in the program and was
						able to participate in the College's co-op program.
					</p>
					<h1 className="bg-primary display-5">Field-work</h1>
					<p>
						After the second year, he was then hired as a co-op student with Linamar Corp. doing
						Desktop Support Technician work for 8 months, then moved to 4 more
						months of Application Development with the same company. After
						completing his co-op year, he graduated college with an Ontario
						College Advanced Diploma with Distinction at
						2022 with an overall program 3.7 GPA and a 3.9 GPA for his final year.
					</p>
					<h1 className="bg-primary display-5">Current</h1>
					<p>
						As of September 2024, Keith has signed up and is enrolled in EdX's
						Full-Stack Development Bootcamp through the University of Toronto,
						learning everything involved in modern Front-End Development
						technologies.
					</p>
				</div>
			</div>
			<h1 className="text-center display-2">Portfolio</h1>
			<div className="row portfolio-bg blur-bg">
				<Link to="/portfolio">
					<div class="position-relative text-center image-hover no-blur">
						<img
							src="https://cdn.pixabay.com/photo/2020/01/11/07/39/north-4756774_960_720.jpg"
							class="img-fluid"
							alt="Image with overlay"
						/>
						<div class="position-absolute top-50 start-50 translate-middle text-white bg-blue p-3 rounded">
							<h2>Keith's Projects</h2>
							<p>
								Keith has worked on many projects since college, click here to
								see some of his most proud ones!
							</p>
						</div>
					</div>
				</Link>
			</div>
			<h1 className="text-center display-2">Contact Me</h1>
			<div className="row contact-bg blur-bg">
				<Link to="/contact">
					<div class="position-relative text-center image-hover no-blur">
						<img
							src="https://cdn.pixabay.com/photo/2019/09/04/19/14/planet-4452434_960_720.jpg"
							class="img-fluid"
							alt="Image with overlay"
						/>
						<div class="position-absolute top-50 start-50 translate-middle text-white bg-blue p-3 rounded">
							<h2>Contact Keith</h2>
							<p>Click here to find ways to connect and contact Keith!</p>
						</div>
					</div>
				</Link>
			</div>
			<h1 className="text-center display-2">Resume</h1>
			<div className="row resume-bg blur-bg">
				<Link to="/resume">
					<div class="position-relative text-center image-hover no-blur">
						<img
							src="https://cdn.pixabay.com/photo/2018/08/23/07/35/thunderstorm-3625405_960_720.jpg"
							class="img-fluid"
							alt="Image with overlay"
						/>
						<div class="position-absolute top-50 start-50 translate-middle text-white bg-blue p-3 rounded">
							<h2>Keith's Resume</h2>
							<p>
								If you want to learn more about Keith's background, click here
								to read all about it through his resume!
							</p>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Home;
