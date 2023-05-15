import { useRef, useState } from "react";
//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
//Helpers
import { skills } from "./helpers/icons";
//Types
import { IIcon } from "./helpers/types";
//Library imports
function App() {
  const aboutRef = useRef<HTMLElement>(null);
  const [selectedSkill, setSelectedSkill] = useState<IIcon>();
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };


  const tabs = ["Swedcon18", "Sensera AB", "Learnpoint"];
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
            <h2 className="category-h2">Skills</h2>
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
          </div>
        </section>
        <section className="section experience">
          <h2 className="category-h2">Experience</h2>
          <div className="experience-box">
 
                    {/* Implement horizontal tabs */}
                    <ul className="tabs">
                        {tabs.map((item) => (
                          <li className={`tab-item  ${item === "Swedcon18" ? "active-tab" : ""}`}>{item}</li>
                        ))}
                    </ul>
            {/* <article className="experience-card">
              {" "}
              <img
                className="card-img"
                src="https://images.unsplash.com/photo-1512144915806-39e29c5565a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
                alt="nothing currently"
              />
              <div className="experience-card-content-box">
                <h3>Carelyo</h3>

                <p className="description">
                  Worked as a frontend developer on the african health care app
                  Carelyo.
                </p>

                <div className="tagBox">
                  <article className="tag">Frontend</article>
                  <article className="tag">UX/UI</article>
                  <article className="tag">React</article>
                  <article className="tag">TypeScript</article>
                </div>

                <a href="#" className="company-link">
                  View company
                </a>
              </div>
            </article>
            <article className="experience-card">
              {" "}
              <img
                className="card-img"
                src="https://images.unsplash.com/photo-1512144915806-39e29c5565a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
                alt="nothing currently"
              />
              <div className="experience-card-content-box">
                <h3>Sensera AB</h3>

                <p className="description">
                  Worked at Sensera with their LMS web application
                </p>
                <div className="tagBox">
                  <article className="tag">React</article>
                  <article className="tag">TypeScript</article>
                  <article className="tag">Figma</article>
                  <article className="tag">UX/UI</article>
                </div>

                <a href="#" className="company-link">
                  View company
                </a>
              </div>
            </article>
            <article className="experience-card">
              <img
                className="card-img"
                src="https://images.unsplash.com/photo-1512144915806-39e29c5565a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
                alt="nothing currently"
              />

              <div className="experience-card-content-box">
                <h3>Schoolsoft</h3>

                <p className="description">
                  Worked at ViaEcole as a frontend developer creating a web
                  based screensharing application
                </p>
                <div className="tagBox">
                  <article className="tag">JavaScript</article>
                  <article className="tag">P2P</article>
                  <article className="tag">WebSockets</article>
                  <article className="tag">WebRTC</article>
                </div>

                <a href="#" className="company-link">
                  View company
                </a>
              </div>
            </article> */}
          </div>
        </section>
        <section className="section projects">
          <h2 className="category-h2">My projects</h2>
          <div className="highlighted-projects"></div>
          <article className="project-card">

          </article>
        </section>
        <section className="section contact">contact</section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
