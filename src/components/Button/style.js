import styled from 'styled-components'

export const Button = styled.button`
    text-transform: uppercase;
    color: ${props => props.color};
    border: 2px solid ${props => props.color};
    text-align: center;

    font-family: 'Montserrat', sans-serif;

    background-color: transparent;
    padding: 0.7rem;

    font-weight: 800;
    letter-spacing: 1px;

    cursor: pointer;
    transition: .5s;

    max-width: 13vw;
    margin: 1rem;;

    :hover{
        transform: scale(1.15);
    }
`