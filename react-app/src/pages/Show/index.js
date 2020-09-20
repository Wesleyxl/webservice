import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import api from '../../services/api';

import { Container } from './styles';
import CardEdit from '../../components/CardEdit';

function  Show() {

        const { id } = useParams();

        const [ product, setProduct ] = useState([]);

        useEffect( async () => {
            const response = await api.get('/products/'+id);
            const data = response.data;

            setProduct(data);

        }, [id] );

        return(
            <Container>
                <CardEdit
                    key={1}
                    title={product.name}
                    description={product.description}
                    text={product.text}
                    url={"/"}
                    edit={"/produtos/edit/"+product.id}
                    id={id}
                />
            </Container>
        );
}

export default Show;
