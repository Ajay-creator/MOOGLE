import styled from "styled-components";

import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({backdrop }) =>
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : '#000'
    };
    background-size:cover;
    background-position: center;
    width:100%;
    padding:40px 20px;
    animation:animateMovieInfo 1s ;

    @keyframes animateMovieInfo{
        from{
            opacity:0;
        }
        to{
            opacity: 1;
        }
    }
`;

export const Content = styled.div`
    width:70%;
    max-width: var(--maxWidth);
    display:flex;
    align-items: center;
    justify-content: space-between;
    background:rgba(255,254,254,0.35);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter:blur(5px);
    border-radius:10px;
    flex-wrap: wrap;
    position: relative;
    box-shadow:5px 5px 15px rgba(0,0,0,0.25), -5px -5px 20px rgba(0,0,0,0.3);
    .glass{
        position:absolute;
        top:0;
        left:0;
        height:100%;
        width:100%;
        background:rgba(0,0,0,0.5);
        border-radius:10px;
    }
    @media screen and (max-width:1185px){
        width:100%;
        justify-content: center;
        padding-top:30px
    }
    @media screen and (max-width:450px){
        width:100%;
        justify-content: center;
        padding-top:0;
    }

`;

export const Text = styled.div`
    width:50%;
    padding:0 20px;
    overflow: hidden;
    z-index:10;
    h2{
        color:#fff;
    }
    .directors-rating{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding:20px 0px;
        color:#fff;
        flex-wrap: wrap;
    }
    .score{
        height:40px;
        width:40px;
        border-radius:50%;
        color:#fff;
        background:#000;
        display:flex;
        align-items: center;
        justify-content: center;
    }
    .gap{
        margin-right:10px;
    }
    
    @media screen and (max-width:1185px){
        width:100%;

    }
`;