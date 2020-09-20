import React from 'react';

import { CardArea } from './styles';

function Card(props) {
    return (

        <CardArea>
            <div className="title-area">
                <h1>{props.title}</h1>
            </div>
            <div className="description">
                <p>{props.description}</p>
            </div>
            <div className="btn-area">
                <div className="btn">
                    <a href={props.url}> Detalhe</a>
                </div>
            </div>
        </CardArea>

    );
}

export default Card;
