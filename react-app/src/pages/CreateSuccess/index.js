import React from 'react';

import { Container, Alert } from './styles';

import Form from '../../components/Form';

function Create() {

    return (

        <Container>
            <Alert>
                <p>Produto Cadastrado com sucesso</p>
            </Alert>
            <Form />
        </Container>

    );

}

export default Create;
