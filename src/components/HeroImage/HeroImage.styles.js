import styled from 'styled-components';

export const Wrapper = styled.div`
    background:url(${({image}) => image});
    background-size:cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 550px;
    position: relative;
    animation: animateImage 0.5s;

    @keyframes animateImage{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
`;

export const Content = styled.div`
    position: absolute;
    top:0;
    left: 0;
    height: 100%;
    width: 100%;
    background:linear-gradient(to bottom,rgba(0,0,0,0.1) 30%,rgba(0,0,0,0.8) 100%);
`;

export const Text = styled.div`
    z-index:100;
    position:absolute;
    bottom:40px;
    margin: auto 20px;
    h1{
        font-size: var(--fontSuperBig);
        @media screen and (max-width:720px){
            font-size: var(--fontBig);
        }
    }
    p{
        font-size: var(--fontMed);
        width: 60%;
        @media screen and (max-width:720px){
            font-size: var(--fontSmall);
            width: 90%;
        }
    }
`;
