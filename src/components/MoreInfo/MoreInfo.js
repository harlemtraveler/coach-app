import React, { Component } from 'react';
import '../../styles/font-awesome.min.css';
import '../../styles/noscript.css';
// import '../../styles/wrapper.css';
import '../../styles/main.css';



function MoreInfo(props) {
    return (
    <section id="one" class="wrapper style1 special">
    	<div class="inner">
    		<header class="major">
    			<h2>Arcu aliquet vel lobortis ata nisl<br />
    			eget augue amet aliquet nisl cep donec</h2>
    			<p>Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet eleifend<br />
    			fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.</p>
    		</header>
    		<ul class="icons major">
    			<li><span class="icon fa-diamond major style1"><span class="label">Lorem</span></span></li>
    			<li><span class="icon fa-heart-o major style2"><span class="label">Ipsum</span></span></li>
    			<li><span class="icon fa-code major style3"><span class="label">Dolor</span></span></li>
    		</ul>
    	</div>
    </section>
  );
}

export default MoreInfo;
