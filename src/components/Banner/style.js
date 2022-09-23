import styled from 'styled-components'
import style from '../../assets/cores'

export const Banner = styled.div`
    margin-bottom: 8rem;
    width: 85vw;
    height: 35vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    color: #fff;

    background-color: ${style.primary.darkViolet};
    position: relative;

    .form{
        position: absolute;
        top: 0;
        right:0;
        img{
            height: 35vh;
        }
    }

    h1{
        font-size: 3.6rem;
        width: 38vw;
    }

    button{
        font-size: 0.7rem;
        width: 14vw;
        margin-left: 10rem;
    }
`