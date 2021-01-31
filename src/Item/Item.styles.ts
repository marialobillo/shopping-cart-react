import styled from 'styled-components';


export const Wrapper = styled.div`
    diplay: block;
    positiion: relative;
    overflow:hidden;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    border: 1px solid lightblue;
    border-radius: 20px;
    height: 100%;

    button{
        border-radius: 0 0 20px 20px;
        background-color: #F59B8E;
        color: #fff;
        float: right;
        width: 100%;

    }

    img {
        max-height: 250px;
        object-fit: cover;
        border-radius: 20px 20px 0 0;
        
    }

    h3{
        padding:0.7rem;
    }

    div{
        font-family: Arial, Helvetica, sans-serif;
        padding: 5px;
        height: 150px;
    }

`;


