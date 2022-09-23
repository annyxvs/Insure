import styled from 'styled-components'

import style from '../../assets/cores'

export const Link = styled.a`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');

    text-decoration: none;
    color: ${style.darkTransparent};
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;

    margin: 0.5rem;
    margin-right: 1.5rem;
    letter-spacing: 1.5px;
    font-size: 0.8rem;
    position: relative;

    ::after{
        content: '';
        height: 1px;
        background-color: ${style.darkTransparent};
        color: black;
        position: absolute;
        width: 0;
        left: 0;
        top: 1rem;
        transition: 0.7s;
    }

    :hover{
        transition: 1s;
        ::after{
            width: 32px;
        }
    }
`