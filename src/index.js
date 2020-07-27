import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './Logo';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import './index.css';
import Slideshow from './slides.js';
import Cards from './card.js';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import cardcontent from './cardcontent.js'


ReactDOM.render(
  <React.StrictMode>
  	<div>
  		<head>
  		<tittle>Pat and Mat</tittle>
  		<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/>
  		</head>
    	<Logo />
    	<div class='landingtext'>
    		<h1>Need something fixed?</h1>
			<h2>Trust in our hands!</h2>

			<h3>We are a team of professionals available to your needs,
			You can count on our services for:</h3>
			<div class='services'>
				<ul>
					<li>
						<Cards image={cardcontent[0].image} tittle={cardcontent[0].tittle} description={cardcontent[0].description} />
					</li>
					<li>
						<Cards image={cardcontent[1].image} tittle={cardcontent[1].tittle} description={cardcontent[1].description} />
					</li>
				</ul>
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
