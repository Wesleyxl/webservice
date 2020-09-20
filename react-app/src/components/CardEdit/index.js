import React from 'react';
import { useHistory } from 'react-router-dom';

import { CardArea } from './styles';
import api from '../../services/api';

const  Card = (props) => {


    // const history = useHistory();
    const id =  props.id;

    const history = useHistory();

    function toDelete() {

        api.get('/products/delete/'+id).then( (response) => {
            history.push('/');
        } );

    }

    return (

        <CardArea>

            <button className="btn-delete" onClick={toDelete}>
                <span>x</span>
            </button>


            <div className="title-area">
                <h1>{props.title}</h1>
            </div>
            <div className="description">
                <p><strong>Descrição: </strong>{props.description}</p>
            </div>
            <div className="text">
                <p><strong>Texto: </strong>{props.text}</p>
            </div>
            <div className="btn-area">
                <div className="btn btn-back">
                    <a href={props.url}> Voltar</a>
                </div>
                <div className="btn btn-edit">
                    <a href={props.edit}>Editar</a>
                </div>
            </div>
        </CardArea>

    );
}

export default Card;
