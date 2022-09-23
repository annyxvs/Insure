import styled from 'styled-components'
import style from '../../assets/cores'

export const Main = styled.main`
    width: 100vw;
    min-height: 90vh;

    background-color: ${style.primary.darkViolet};
    color: #fff;

    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    h1{
        font-size: 4rem;
        margin-bottom: 3rem;
        line-height: 4.45rem;
        position: relative;

        ::before{
            position: absolute;
            content: '';
            width: 10vw;
            height: 1px;
            background-color: #fff;
            color: #fff;
            top: -1.563rem;
            opacity: 0.5;
        }
    }

    margin-left: 12rem;
    height: 72vh;
    min-width: 35vw;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p{
        font-size: 1.2rem;
        opacity: 0.5;
        margin-bottom: 3rem;
    }
`

export const Aside = styled.aside`
    display: flex;
    flex-direction: column;

    position: relative;

    .forma{
        position: absolute;
        top: -15.313rem;
        right: 0;
    }

    .intro{
        position: absolute;
        top: -8.125rem;
        left: 5.763rem;

        img{
            min-height: 80vh;
            min-width: 30vw;
        }
    }
`