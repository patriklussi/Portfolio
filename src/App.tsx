//Todo COLOR SHIFT ON SCROLL
import { useRef, useState } from "react";
//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
//Helpers
import { skills } from "./helpers/icons";
//Types
//Library imports
function App() {
  const aboutRef = useRef<HTMLElement>(null);
  const [hover, setHover] = useState(false);
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  console.log(hover);

  return (
    <div className="App animate__animated animate__fadeIn  animate__delay-1s ">
      <Header scrollToAbout={scrollToAbout} />
      {/* <div className="test-art"></div>

      <div className="test-art2"></div> */}
      <main className="hero">
        <section className="section landing ">
          <div className="landing-content-container">
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
                  <article>
                    <img width={50} src={item.src} alt={item.alt} />
                    <p>{item.name}</p>
                  </article>
                ))}
              </div>
            </div>
            <div>
              <p className="skill-container-title">Backend & other tools</p>
            </div>
          </div>
        </section>
        <section className="section experience">
          <h2 className="category-h2">Previous work</h2>
        </section>
        <section className="section projects">
          <h2 className="category-h2">My projects</h2>

          <div className="featured-projects"></div>

          <div className="project-content-container">
            <div className="grid-container-p">
              <article className="project-card">
                <header>
                  <h3>Project name</h3>
                  <div className="desc-container">
                    <p className="small-desc">
                      Small description of said project meant to entice the
                      reader into reading more
                    </p>
                  </div>
                </header>

                <footer>
                  <div className="tag-container">
                    <ul className="tag-list">
                      <li>Frontend</li>
                      <li>React</li>
                      <li>TypeScript</li>
                    </ul>
                  </div>
                </footer>
              </article>
              <article className="project-card">
                <header>
                  <h3>Project name</h3>
                  <div className="desc-container">
                    <p className="small-desc">
                      Small description of said project meant to entice the
                      reader into reading more
                    </p>
                  </div>
                </header>

                <footer>
                  <div className="tag-container">
                    <ul className="tag-list">
                      <li>Frontend</li>
                      <li>React</li>
                      <li>TypeScript</li>
                    </ul>
                  </div>
                </footer>
              </article>
              <article className="project-card">
                <header>
                  <h3>Project name</h3>
                  <div className="desc-container">
                    <p className="small-desc">
                      Small description of said project meant to entice the
                      reader into reading more
                    </p>
                  </div>
                </header>

                <footer>
                  <div className="tag-container">
                    <ul className="tag-list">
                      <li>Frontend</li>
                      <li>React</li>
                      <li>TypeScript</li>
                    </ul>
                  </div>
                </footer>
              </article>
              <article className="project-card">
                <header>
                  <h3>Project name</h3>
                  <div className="desc-container">
                    <p className="small-desc">
                      Small description of said project meant to entice the
                      reader into reading more
                    </p>
                  </div>
                </header>

                <footer>
                  <div className="tag-container">
                    <ul className="tag-list">
                      <li>Frontend</li>
                      <li>React</li>
                      <li>TypeScript</li>
                    </ul>
                  </div>
                </footer>
              </article>
              <article className="project-card">
                <header>
                  <h3>Project name</h3>
                  <div className="desc-container">
                    <p className="small-desc">
                      Small description of said project meant to entice the
                      reader into reading more
                    </p>
                  </div>
                </header>

                <footer>
                  <div className="tag-container">
                    <ul className="tag-list">
                      <li>Frontend</li>
                      <li>React</li>
                      <li>TypeScript</li>
                    </ul>
                  </div>
                </footer>
              </article>
            </div>
          </div>
        </section>
        <section className="section contact">contact</section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
