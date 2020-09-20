import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    width: 100%;
    min-height: calc(100vh - 160px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 15px;
`;

export const Alert = styled.div`
    max-width: 700px;
    width: 100%;
    height: 50px;
    background: #007E33;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;

    p {
        color: #FFF;
    }
`;
