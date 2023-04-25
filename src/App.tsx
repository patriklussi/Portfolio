import { useRef, useState } from "react";
//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
//Helpers
import { skills } from "./helpers/icons";
//Types
import { IIcon } from "./helpers/types";
//Library imports
import { ArrowRight } from "react-feather";
function App() {
	const aboutRef = useRef<HTMLElement>(null);
	const [selectedSkill, setSelectedSkill] = useState<IIcon>();
	const scrollToAbout = () => {
		aboutRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	return (
		<div className="App animate__animated animate__fadeIn  animate__delay-1s ">
			<Header scrollToAbout={scrollToAbout} />

			<main className="hero">
				<section className="section landing ">
					<h2 className="small-text">Hi, my name is</h2>
					<h1 className="light">Patrik Lussi</h1>
					<h1>Frontend web developer</h1>

					<div className="landing-text-box">
						<p>
							Im a junior frontend developer who has a passion for building
							dynamic and engaing user interfaces and web experiences. <br />
							<span className="light">
								{" "}
								Im currently looking for new opportunities to work and use my
								skills.{" "}
							</span>
						</p>
					</div>
					<div className="landing-button-box">
						<a
							type="button"
							href="https://github.com/patriklussi"
							className="btn"
						>
							Github
						</a>
					</div>
				</section>

				<section ref={aboutRef} className="section about-me">
					<div className="content-container">
						<div className="para-container">
							<h2 className="category-h2">About me</h2>
							<p>
								As a junior frontend developer, I thrive on building dynamic and
								engaging user interfaces using React, HTML, CSS, Svelte, and
								other cutting-edge tools. I'm passionate about creating seamless
								digital experiences that keep users coming back for more. With a
								commitment to staying up-to-date with the latest industry trends
								and best practices, I'm always looking for opportunities to grow
								my skills and contribute to innovative projects. Let's connect
								and build something great together!
							</p>
							<p>
								My interest in web development started in highschool here in
								sweden and I have since studied frontend development and I am
								now looking to start working.
							</p>
						</div>

						<div className="img-container">
							<article className="fake-image"></article>
						</div>
					</div>
				</section>
				<section className="section skills">
					<div className="skills-content-container">
						<h2 className="category-h2">Experience & skills</h2>
						<p>
							My skills and passion reside mostly on the frontend as i enjoy
							creating good looking applications people can interact with. The
							primary technologies i work with are HTML, CSS, JavaScript , React
							and Vue.{" "}
						</p>
						<p>
							I love exploring new frameworks and libraries in the JavaScript
							ecosystem such as Qwik, Svelte and Astro. My backend experience is
							limited to Node.Js and a little bit of .NET & C#
						</p>
						<h4 className="skills-h4">Skills</h4>
						<div className="icon-display-container">
							<p className="skills-container-title">Frontend</p>
							<div className="icon-grid-container">
								{skills.map((item) => (
									<article
										onKeyDown={(e) => {
											if (e.key === "Enter") setSelectedSkill(item);
										}}
										onClick={() => setSelectedSkill(item)}
										className="icon-box"
										key={item.id}
									>
										<img width={50} src={item.src} alt={item.alt} />
										<p>{item.name}</p>
									</article>
								))}
							</div>
						</div>
						<h4 className="skills-h4">Experience</h4>
						<div className="experience-box">
							<article className="experience-card">
								<div className="left">
									{" "}
									<img
										src="https://images.unsplash.com/photo-1512144915806-39e29c5565a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
										alt="nothing currently"
									/>
								</div>
								<div className="right">
									<h3>Frontend Developer</h3>

									<section className="tags">
										Swedcon 18 <time>2023 - Current</time>
									</section>
									<p className="description">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
									</p>
									<a className="a-link-btn " href="#">Swedcon 18 <ArrowRight/></a>
								</div>
							</article>
							<article className="experience-card">
								<div className="left">
									{" "}
									<img
										src="https://images.unsplash.com/photo-1512144915806-39e29c5565a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
										alt="nothing currently"
									/>
								</div>
								<div className="right">
									<h3>Frontend Developer</h3>

									<section className="tags">
										Sensera AB <time>2022 - 2022</time>
									</section>
									<p className="description">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
									</p>
									<a className="a-link-btn " href="#">Swedcon 18 <ArrowRight/></a>
								</div>
							</article>
							<article className="experience-card">
								<div className="left">
									<img
										src="https://images.unsplash.com/photo-1512144915806-39e29c5565a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
										alt="nothing currently"
									/>
								</div>
								<div className="right">
									<h3>Frontend Developer</h3>

									<section className="tags">
										ViaEcole <time>2021 - 2022</time>
									</section>
									<p className="description">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
									</p>
									<a className="a-link-btn " href="#">Swedcon 18 <ArrowRight/></a>
								</div>
							</article>
						</div>
					</div>
				</section>

				<section className="section projects">projects</section>
				<section className="section contact">contact</section>
			</main>
			<Footer />
		</div>
	);
}

export default App;

// <div className="cool-stuff">
// <div className="bar1">

// </div>
// <div className="bar2">

// </div>
// <div className="bar3">

// </div>
// </div>
