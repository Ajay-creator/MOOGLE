import styled from 'styled-components';

export const Image = styled.img`
    width:100%;
    max-width: 400px;
    object-fit: cover;
    border-radius: 10px;
    animation:animateThumb 0.5s;
    transition:all 0.5s;
    box-shadow:2px 2px 15px rgba(0,0,0,0.3), -3px -3px 15px rgba(0,0,0,0.25);
    position: relative;
    z-index:10;
    :hover{
        box-shadow:none;
    }

    @keyframes animateThumb{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
`;