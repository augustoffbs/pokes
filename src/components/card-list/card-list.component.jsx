import React from 'react';
import {Card} from '../card/card.component'
import './card-list.styles.css';

export const CardList = (props) => {
    return (
    <div className='card-list'>
        {props.pokes.map(poke => (
            <Card key={poke.id} poke={poke}/>
        ))}
    </div>);
};