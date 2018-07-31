import React, { Component } from 'react';
import '../../styles/font-awesome.min.css';
import '../../styles/noscript.css';
import '../../styles/main.css';
import '../../utils/js/main';
import '../../utils/js/util';

function Header(props) {
  return (
    <header id="header" class="alt">
			<h1><a href="index.html">Myers</a></h1>
			<nav id="nav">
				<ul>
					<li class="special">
						<a href="#menu" class="menuToggle"><span>Menu</span></a>
						<div id="menu">
							<ul>
								<li><a href="index.html">Home</a></li>
								<li><a href="generic.html">Generic</a></li>
								<li><a href="elements.html">Elements</a></li>
								<li><a href="#">Sign Up</a></li>
								<li><a href="#">Log In</a></li>
							</ul>
						</div>
					</li>
				</ul>
			</nav>
		</header>
  );
}

export default Header;
