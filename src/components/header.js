import React from 'react';
import './header.css';
import logo from '../resources/stacklinelogo.png';

const Header = () => <header>
			<img id="header-logo" 
			     src={logo}
			     alt="Stackline Logo" />
		</header>;

export default Header;
