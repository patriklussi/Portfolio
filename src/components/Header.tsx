import { Menu } from "react-feather";
import useHeaderScroll from "../hooks/useHeaderScroll";
const Header = ({scrollToAbout} : {scrollToAbout: ()=> void}) => {
	const scrollDirection = useHeaderScroll();
	console.log(scrollDirection);
	return (
		<header className={`portfolio-header ${scrollDirection === "down" ? "hide" : ""}`}>
            <div>
              <a href="https://www.linkedin.com/in/patriklussi/">  <h2 className="header-title">
                    PL
                </h2></a>
            </div>
			<Menu size={35} className="menu"/>
			<nav className="header-nav">
				<ul>
					<li>
						<button onClick={scrollToAbout} className="header-button" type='button'>
							About
						</button>{" "}
					</li>
					<li>
						<button  onClick={scrollToAbout} className="header-button" type='button'>
							Skills
						</button>{" "}
					</li>
					<li>
						<button className="header-button" type='button'>
							Contact
						</button>{" "}
					</li>
					<li>
						<button className="header-button bordered" type='button'>
							Resume
						</button>{" "}
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
