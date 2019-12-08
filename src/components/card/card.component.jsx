import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img alt='poke' src={`https://robohash.org/${props.poke.id}?set=set2&size=180x180`} />
        <h2> {props.poke.name} </h2>
        <p> {props.poke.email} </p>
    </div>
);