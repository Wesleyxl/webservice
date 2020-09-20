import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


import api from '../../services/api';

import { Container } from './styles';

import FormEdit from '../../components/FormEdit';

function Edit() {


    const { id } = useParams();

    const [ product, setProduct ] = useState([]);

    useEffect( async () => {

        const response = await api.get('/products/'+id);
        const data = response.data;

        setProduct(data);

    }, [id] );

    return (

        <Container>
            <FormEdit
                name={product.name}
                description={product.description}
                text={product.text}
                id={product.id}
            />
        </Container>

    );

}

export default Edit;
