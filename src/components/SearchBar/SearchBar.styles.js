import styled from 'styled-components';

export const Wrapper = styled.div`
    background:var(--darkGray);
    width: 100%;
    padding:20px;
`;

export const Content = styled.div`
    width: 90%;
    max-width: var(--maxWidth);
    background:var(--medGray);
    border-radius: 20px;
    padding:10px;
    height:50px;
    margin:0 auto;
    position: relative;
    img{
        width:30px;
        height: 30px;
        position:absolute;
        left:10px;
    }
    input{
        position:absolute;
        left:60px;
        width:70%;
        height:30px;
        background:none;
        outline:none;
        border:none;
        font-size:1.2em;
        padding: 0 ;
        color:var(--white);
    }
`;