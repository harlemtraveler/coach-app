import React, { Component } from 'react';
import '../../styles/font-awesome.min.css';
import '../../styles/noscript.css';
import '../../styles/main.css';
// import './Banner.css';

function Banner(props) {
  return (
    <section id="banner">
    	<div class="inner">
    		<h2>Myers Consulting</h2>
    		<p>Career Coaching Rethought<br />
    		launch your career<br />
    		to the next level.</p>
    		<ul class="actions special">
    			<li><a href="#" class="button primary">Activate</a></li>
    		</ul>
    	</div>
    	<a href="#one" class="more scrolly">Learn More</a>
    </section>
  );
};

export default Banner;
