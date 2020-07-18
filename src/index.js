import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './Logo';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import './index.css';
import Slideshow from './slides.js';

ReactDOM.render(
  <React.StrictMode>
  	<div>
  		<head>
  		<tittle>Pat and Mat Home Repair</tittle>
  		<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/>
  		</head>
    	<Logo />
    	<div class='landingtext'>
    		<h1>Need something fixed?</h1>
			<h2>Trust in our hands!</h2>

			<h3>We are a team of professionals available to your needs,
			You can count on our services for:</h3>
			<div class='services'>
				<li>New Paint/Repaint</li>
				<li>Maintenance</li>
				<li>Installation</li>
				<li>Repairs</li>
				<li>Flooring</li>
				<li>Drywall</li>
				<li>Carpentery</li>
				<li>Pressure Cleaner</li>
				<li>And more...!</li>
			</div>
		</div>
		<h1>Check out our latest work</h1>
		<Slideshow />				
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
