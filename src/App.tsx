//Todo COLOR SHIFT ON SCROLL
import { useRef, useState } from "react";
//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
//Helpers
import { skills } from "./helpers/icons";
import { projects } from "./helpers/projects";
//Types
//Library imports
function App() {
  const aboutRef = useRef<HTMLElement>(null);
  const [hover, setHover] = useState(false);
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };



  return (
    <div className="App animate__animated animate__fadeIn  animate__delay-1s ">
      <Header scrollToAbout={scrollToAbout} />
      {/* <div className="test-art"></div>

      <div className="test-art2"></div> */}
      <main className="hero">
        <section className="section landing ">
          <div className="inner-container">
            <div className="content">
              <h2 className="small-text">Hi, my name is</h2>
              <h1 className="light">Patrik Lussi</h1>
              <h1>Frontend web developer</h1>

              <div className="landing-text-box">
                <p>
                  I'm a swedish web developer who enjoys creating complex and good looking things on the web.
                  <br />
                  <span className="light">
                    {" "}
                    Im currently looking for new opportunities to work and use
                    my skills.{" "}
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
          </div>
        </section>

        <section ref={aboutRef} className="section about-me">
          <div className="inner-container">
            <div className="content-container">
              <div className="para-container">
                <h2 className="category-h2">About me</h2>
                <p>
                  As a junior frontend developer, I thrive on building dynamic
                  and engaging user interfaces using React, HTML, CSS, Svelte,
                  and other cutting-edge tools. I'm passionate about creating
                  seamless digital experiences that keep users coming back for
                  more. With a commitment to staying up-to-date with the latest
                  industry trends and best practices, I'm always looking for
                  opportunities to grow my skills and contribute to innovative
                  projects. Let's connect and build something great together!
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
          </div>
        </section>
        <section className="section skills">
          <div className="inner-container">
            <div className="skills-content-container">
              <h2 className="category-h2">Skills</h2>
              <p>
                My skills and passion reside mostly on the frontend as i enjoy
                creating good looking applications people can interact with. The
                primary technologies i work with are HTML, CSS, JavaScript ,
                React and Vue.{" "}
              </p>
              <p>
                I love exploring new frameworks and libraries in the JavaScript
                ecosystem such as Qwik, Svelte and Astro. My backend experience
                is limited to Node.Js and a little bit of .NET & C#
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
          </div>
        </section>
        <section className="section experience">
          <div className="inner-container">
            <h2 className="category-h2">Work experience</h2>
            <p>These are some of the places i have worked recently </p>
          </div>
        </section>
        <section className="section projects">
          <div className="inner-container">
            <h2 className="category-h2">My projects</h2>

            <div className="featured-projects"></div>

            <div className="project-content-container">
              <div className="grid-container-p">
                {projects?.map((item) => (
                  <>
                    <article className="project-card">
                      <header>
                        <div className="tag-container">
                          <ul className="tag-list">
                            {item.tags.map((tags) => (
                              <li>{tags}</li>
                            ))}
                          </ul>
                        </div>
                        <h3>{item.name}</h3>
                        <div className="desc-container">
                          <p className="small-desc">{item.desc}</p>
                        </div>
                      </header>

                      <footer>
                        <a className="project-card-a" href={item.url}>
                          View project
                        </a>
                      </footer>
                    </article>
                  </>
                ))}
              </div>
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
