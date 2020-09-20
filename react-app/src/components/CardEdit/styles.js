import styled from 'styled-components';

export const CardArea = styled.div`
    max-width: 500px;
    width: 100%;
    height: 100%;
    border: 2px solid #EEE;
    border-radius: 10px;
    padding: 20px;
    margin: 20px auto;
    position: relative;

    .btn-delete {
        width: 30px;
        height: 30px;
        border: none;
        background: red;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFF;
        position: absolute;
        top: -5px;
        right: -5px;
    }
    .btn-delete:hover {
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0 0 10px red;
    }

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

    .text {
        border: 1px solid #EEE;
        border-radius: 10px;
        padding: 20px;
        margin-bottom: 20px
    }

    .text p {
        color: #000
    }

    .btn-area {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .btn-area .btn {
        width: 100px;
        height: 40px;
        border: 1px solid #EEE;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
    }

    .btn-area .btn a {
        color: #FFF;
        text-decoration: none;
    }
    .btn-area .btn a:hover {
        font-weight: bold;
    }

    .btn-area .btn-edit {
        background: #007E33;
    }

    .btn-area .btn-back {
        background: #000;
    }

`;
