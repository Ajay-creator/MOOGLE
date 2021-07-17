import styled from 'styled-components'

export const Spinner = styled.div`
    border: 5px solid var(--lightGray);
    border-left-color:var(--midGray);
    width:50px;
    height:50px;
    border-radius:50%;
    animation: spin 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)  infinite;
    margin:20px auto;

    @keyframes spin {
        100%{
            transform:rotate(360deg);
        }
    }
`;