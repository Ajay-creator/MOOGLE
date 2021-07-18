import styled from "styled-components";

export const Wrapper = styled.div`
    color:#000;
    text-align:center;
    p{
        color:#000;
    }
`;

export const Image = styled.img`
    border-radius:10px;
    object-fit: cover;
    width:100%;
    max-width: 200px;
    box-shadow:3px 3px 15px rgba(0,0,0,0.3), -3px -3px 20px rgba(0,0,0,0.25);
    transition:0.3s;
    :hover{
        box-shadow:none;
    }
`;

