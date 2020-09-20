import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import { Container } from './styles';

import Card from '../../components/Card';

export default class Product extends Component {

    state = {
        products: []
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {

        const response = await api.get('/products');

        const data = response.data;
        this.setState( {products: data} );

    }

    render() {
        return(
            <Container>
                
                { this.state.products  <= 1 ? <h1>Não Há registro</h1> : this.state.products.map( product => (
                    <Card
                        key={product.id}
                        title={product.name}
                        description={product.description}
                        url={"produtos/show/"+product.id}
                    />
                ) )}

               
            </Container>
        );
    }
}

