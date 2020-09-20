import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import api from '../../services/api';
import { Container, FormArea, BtnArea } from './styles';


const Form = (props) => {


    const [values, setValues] = useState();
    const history = useHistory();
    const { id } = useParams();

    console.log(props);

    function change(ev) {

        const { name, value } = ev.target;

        setValues({ ...values, [name]: value });

    }

    function submitForm(ev) {
        ev.preventDefault();

        api.post('/products/edit/'+id, values).then( (response) => {

            window.alert('Dados Editados')

        } );


    }

    function toBack() {
        history.push('/cadastro');
    }

    return (
        <Container >
            <h1>Editar</h1>

            <FormArea>
                <form onSubmit={submitForm}>
                    <div className="input">
                        <input type="text" id="name" name="nome" placeholder="Nome" onChange={change} defaultValue={props.name}/>
                    </div>

                    <div className="textArea">
                        <textarea rows="5" id="description" name="descrição" placeholder="Descrição" onChange={change} defaultValue={props.description}></textarea>
                    </div>

                    <div className="textArea">
                        <textarea rows="5" id="text" name="texto" placeholder="Descrição" onChange={change} defaultValue={props.text} ></textarea>
                    </div>

                    <BtnArea>
                        <div className="btn btn-success">
                            <button type="submit">Editar</button>
                        </div>

                        <div className="btn btn-primary">
                            <a href={"/produtos/show/"+props.id} >Voltar</a>
                        </div>
                    </BtnArea>
                </form>

            </FormArea>

        </Container>

    );

}

export default Form;
