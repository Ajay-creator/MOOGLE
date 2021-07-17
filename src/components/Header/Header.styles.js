import styled from 'styled-components';

export const Wrapper = styled.div`
    background:var(--darkGray);
    padding:0 20px 0 0;
`;

export const Content = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    /* padding:10px 0; */
    margin:0 auto;
`;

export const LogoImg = styled.img`
    width:200px;
    transform:translateX(-8px);
    @media screen and (max-width:500px){
        width:150px;
    }
`;

export const TMDBLogoImg = styled.img`
    width:120px;
    @media screen and (max-width:500px){
        width:80px;
    }
`;

