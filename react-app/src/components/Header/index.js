import React from 'react';

import { Container } from './styles';

function Header() {
  return(
        <Container>
            <nav>
                <ul>
                    <li> <a href="/" title="Home">Home</a> </li>
                    <li> <a href="/cadastro" title="Cadastro">Cadastro</a> </li>
                </ul>
            </nav>
        </Container>
  );
}

export default Header;
