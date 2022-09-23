import styled from 'styled-components'
import styles from '../../assets/cores'

export const Form = styled.div`
    position: relative;
    margin-bottom: 16rem;
    
    .form{
        position: absolute;
        top: -170px;
    }
`

export const Content = styled.div`
    width: 100vw;
    margin: 8rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h1{
        font-size: 3.9rem;
        position: relative;

        &::before{
            content: '';
            width: 8vw;
            height: 1px;
            position: absolute;
            top: -2.125rem;
            background-color:${styles.neutral.veryDarkViolet};
            opacity: 0.3;
        }

        margin-bottom: 6rem;
    }

    .cards{
        overflow-x: hidden;
        width: 100vw;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: center;
        align-items: center;
    }
`

export const Banner = styled.div`
    height: 40vh;

    display: flex;
    justify-content: center;
    align-items: center;
`