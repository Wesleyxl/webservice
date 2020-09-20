import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import { Container, FormArea, BtnArea } from './styles';

const initialValue = {
    name: "",
    description: "",
    text: '',
}

const Form = () => {

    const [values, setValues] = useState(initialValue);
    const history = useHistory();
    const [ errors, setError ] = useState();

    function change(ev) {

        const { name, value } = ev.target;

        setValues({ ...values, [name]: value });

    }

    function showErrors() {
        window.alert('Error')
    }

    function submitForm(ev) {
        ev.preventDefault();

        api.post('/products/create', values).then( (response) => {

            if (response.data.errors) {

                const errors = response.data.errors;

            }
            history.push('/cadastro/success');

        } );


    }

    function toBack() {
        // history.push('/cadastro');
    }

    return (
        <Container >

            <h1>Cadastro de Produtos</h1>

            <FormArea>
                <form onSubmit={submitForm}>
                    <div className="input">
                        <input type="text" id="name" name="nome" placeholder="Nome" onChange={change} />
                    </div>

                    <div className="textArea">
                        <textarea rows="5" id="description" name="descrição" placeholder="Descrição" onChange={change} ></textarea>
                    </div>

                    <div className="textArea">
                        <textarea rows="5" id="text" name="texto" placeholder="Descrição" onChange={change} ></textarea>
                    </div>

                    <BtnArea>
                        <div className="btn btn-success">
                            <button type="submit">Cadastrar</button>
                        </div>

                        <div className="btn btn-primary">
                            <a href="/" >Voltar</a>
                        </div>
                    </BtnArea>
                </form>

            </FormArea>

        </Container>

    );

}

export default Form;
