import styled from 'styled-components';

export const Wrapper = styled.button`
    position:relative;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    margin:50px 0 20px 0;
    text-align: center;
    background:var(--darkGray);
    border-radius:20px;
    width:25%;
    min-width:200px;
    height: 50px;
    color:var(--white);
    font-size: var(--fontMed);
    cursor: pointer;
    border: none;

    :hover{
        opacity:0.8;
    }
`;