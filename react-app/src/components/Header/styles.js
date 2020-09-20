import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 80px;
    background: #000;
    position: fixed;
    top: 0;
    ul {
        list-style-type: none;
        width: 350px;
        height:80px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    ul li a {
        color: #FFF;
        font-size: 20px;
        text-decoration: none;
    }
    ul li a:hover {
        font-weight: bold;
    }
`;
