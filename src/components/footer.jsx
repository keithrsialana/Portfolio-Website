import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
function Footer() {
	return (
		<footer className="text-center p-5 bg-yale-darker">
			<p>Made with sweaty palms 🥲 2024</p>
			<p>
				<a href="https://github.com/keithrsialana">
					<FaGithub style={{ color: "white", fontSize: "1.5em" }} />
				</a>{" - "}
				<a href="https://www.linkedin.com/in/keithrsialana/">
					<FaLinkedin style={{ color: "white", fontSize: "1.5em" }} />
				</a>{" - "}
				<a href="mailto:keith.sialana@gmail.com">
					<IoMdMail style={{ color: "white", fontSize: "1.5em" }} />
				</a>
			</p>
		</footer>
	);
}

export default Footer;
