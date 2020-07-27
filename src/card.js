import React from 'react';
import Card from 'react-bootstrap/Card';
import './card.css'


const Cards = (props) => {
	return(
		<Card style={{ width: '18rem' }}>
  			<Card.Img variant="top" src={props.image} />
  			<Card.Body>
    			<Card.Title style={{height: '2em'}}>{props.tittle}</Card.Title>
    			<Card.Text className='text'>
      			{props.description}
    		</Card.Text>
  		</Card.Body>
		</Card>
	)
}

export default Cards;
