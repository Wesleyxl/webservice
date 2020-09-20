import styled from 'styled-components';

export const CardArea = styled.div`
    max-width: 350px;
    width: 100%;
    height: 100%;
    border: 2px solid #EEE;
    border-radius: 10px;
    padding: 20px;
    margin: 20px auto;

    h1 {
        font-size: 25px;
        font-weight: bold;
        text-align: center;
        margin: 20px 0;
    }

    .description {
        border: .5px solid #EEE;
        padding: 20px;
        border-radius: 10px;
        margin-bottom: 20px;
    }

    .description p {
        color: #000;
    }

    .btn-area {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .btn-area .btn {
        width: 100px;
        height: 40px;
        border: 1px solid #EEE;
        display: flex;
        justify-content: center;
        align-items: center;
        /* background: #0099CC; */
        background: #000;
        border-radius: 10px;
    }

    .btn-area .btn a {
        color: #FFF;
        text-transform: uppercase;
        text-decoration: none;
    }
    .btn-area .btn a:hover {
        font-weight: bold;
    }

`;
