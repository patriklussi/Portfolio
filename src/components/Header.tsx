import { Menu } from "react-feather";
const Header = ({scrollToAbout} : {scrollToAbout: ()=> void}) => {
	return (
		<header className='portfolio-header'>
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
