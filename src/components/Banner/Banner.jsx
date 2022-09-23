import {Button} from '../Button/Button'
import Form from '../../assets/images/bg-pattern-how-we-work-desktop.svg'
import * as S from './style'

export const Banner = () =>{
    return(
        <S.Banner>
            <h1>Find out more about how we work</h1>
            <div className="form"><img src={Form} alt="AAAAAA" /></div>
            <Button title='How we work' color='#fff'/>
        </S.Banner>
    )
}