import React, { useEffect, useState } from "react";
import { IoMdMail } from "react-icons/io";
const contact = () => {
	const [htmlError, setHTMLError] = useState("");
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");
	// check if valid email with regex
	const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	function handleNameChange(e) {
		setName(e.target.value);
	}

	function handleEmailChange(e) {
		if (!emailPattern.test(email))
			setHTMLError("You have entered an invalid email");
		else setHTMLError("");
		setEmail(e.target.value);
	}

	function handleMessageChange(e) {
		setMessage(e.target.value);
	}

	function onMouseLeave(e) {
		if (e.target.value == "")
			setHTMLError("(Required) You need to fill in all the fields!");
		return;
	}

	useEffect(() => {
		if (htmlError) {
			setHTMLError(htmlError);
		}
	}, [htmlError]);

	function checkInput(e) {
		// prevent page from reloading
		e.preventDefault();

		if (name == "" || message == "" || email == "") {
			if (name == "") {
				setHTMLError("Your name is empty");
				return;
			} else if (!emailPattern.test(email)) {
				setHTMLError("You have entered an invalid email address.");
				return;
			} else if (message == "") {
				setHTMLError("Your message is empty");
				return;
			}
		}

		// send email
		// Not Implemented

		// reset form inputs
		setHTMLError("");
		setName("");
		setMessage("");
		setEmail("");

		// email sent!
		alert("Your email has been sent! 😊");
	}

	return (
		<div className="text-center vh-100">
			<IoMdMail style={{ color: "#F06449", fontSize: "5em" }} />
			<h1 className="display-2 text-mustard">Contact Me (WIP)</h1>
			
			<span hidden>
			//#region previous code
			{/* <p>
				My preferred method of contact is through email. If you would like to
				send me an email, you can use this form.
			</p>
			<form onSubmit={checkInput} className="mx-auto">
				<div className="mb-3 row">
					<div id="errorMessage" className="text-danger fw-bolder bg-yale-darker rounded">
						{htmlError}
					</div>
				</div>
				<div className="mb-3 row">
					<label for="userName" className="col-sm-2 col-form-label">
						<h3>Name</h3>
					</label>
					<div className="col-sm-10">
						<input
							type="text"
							className="form-control"
							id="userName"
							placeholder="John Doe"
							value={name}
							onChange={handleNameChange}
							onMouseLeave={onMouseLeave}
							disabled
						/>
					</div>
				</div>
				<div className="mb-3 row">
					<label for="staticEmail" className="col-sm-2 col-form-label">
						<h3>Email</h3>
					</label>
					<div className="col-sm-10">
						<input
							type="text"
							className="form-control"
							id="staticEmail"
							placeholder="email@example.com"
							value={email}
							onChange={handleEmailChange}
							onMouseLeave={onMouseLeave}
							disabled
						/>
					</div>
				</div>
				<div className="mb-3 row">
					<label for="userMessage" className="col-sm-2 col-form-label">
						<h3>Message</h3>
					</label>
					<div className="col-sm-10">
						<textarea
							type="text"
							className="form-control"
							id="userMessage"
							placeholder="What are your thoughts?"
							rows="5"
							value={message}
							onChange={handleMessageChange}
							onMouseLeave={onMouseLeave}
							disabled
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12">
						<button type="submit" class="btn bg-tomato mb-3 col-sm-6" disabled>
							Send Email
						</button>
					</div>
				</div>
			</form> */}
			//#endregion
			</span>
		</div>
	);
};

export default contact;
