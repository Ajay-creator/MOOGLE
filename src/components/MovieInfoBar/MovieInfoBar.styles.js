import styled from "styled-components";

export const Wrapper = styled.div`
    width:100%;
    background:var(--darkGray);
    padding:10px 10px;
    display: flex;
    justify-content: center;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    max-width: var(--maxWidth);
    width: 100%;
    .column{
        background:var(--medGray);
        padding:0 20px;
        border-radius: 30px;
        margin: 10px;
        width:250px;
        text-align: center;
        @media screen and (max-width:768px){
            display: block;
            width: 100%;
        }
    }
`;

