import styled from 'styled-components';

export const Container = styled.div`
    max-width: 700px;
    width: 100%;
    border: 1px solid #EEE;
    text-align: center;
    border-radius: 10px;
    padding: 30px;
`;
export const FormArea = styled.div`
    width: 100%;
    padding: 20px;
    margin: 0 10px;

    .input {
        max-width: 700px;
        width: 100%;
        height: 40px;
        margin-bottom: 20px;
        border-radius: 10px;
    }

    .input input {
        width: 100%;
        height: 100%;
        padding-left: 20px;
        border-radius: 10px;
        border: 1px solid #EEE;
    }

    .input input:focus {
        border: 1px solid #000;
    }

    .textArea {
        max-width: 700px;
        margin-bottom: 20px;
    }

    .textArea textarea {
        width: 100%;
        border: 1px solid #EEE;
        padding: 5px 20px;
        border-radius: 10px;
    }
    .textArea textarea:focus {
        border: 1px solid #000
    }
`;

export const BtnArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    .btn {
        width: 100px;
        height: 50px;
        border: 1px solid #EEE;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .btn button {
        width: 100%;
        height: 100%;
        border:none;
        background: none;
        color: #FFF;
    }

    .btn a {
        color: #FFF;
        text-decoration: none;
    }
    .btn a:hover {
        font-weight: bold;
    }

    .btn button:hover {
        cursor: pointer;
        box-shadow: 0 0 5px #EEE;
        font-weight: bold;
    }

    .btn-success {
        background: #007E33;
    }

    .btn-primary {
        background: #0099CC
    }

`;
