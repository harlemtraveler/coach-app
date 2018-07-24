import React, { Component } from 'react';
import '../../styles/font-awesome.min.css';
import '../../styles/noscript.css';
import '../../styles/main.css';
import './Banner.css';

class Banner extends Component {
  render () {
    return (
      <section id="banner">
      	<div class="inner">
      		<h2>Spectral</h2>
      		<p>Another fine responsive<br />
      		site template freebie<br />
      		crafted by <a href="http://html5up.net">HTML5 UP</a>.</p>
      		<ul class="actions special">
      			<li><a href="#" class="button primary">Activate</a></li>
      		</ul>
      	</div>
      	<a href="#one" class="more scrolly">Learn More</a>
      </section>
    );
  }
};

export default Banner;