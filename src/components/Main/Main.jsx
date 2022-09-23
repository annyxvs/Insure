import * as S from './style'
import Intro from '../../assets/images/image-intro-mobile.jpg'
import bgR from '../../assets/images/bg-pattern-intro-right-desktop.svg'
import { Button } from '../Button/Button'

export const Main = () =>{
    return(
        <S.Main>
            <S.Content>
                <h1>Humanizing your insurance.</h1>

                <p>
                    Get your life insurance coverage easier and faster.We blend our expertise and 
                    technology to hrlp you find the plan that's right for you.Ensure you and your
                    loved ones are protected. 
                </p>

                <Button title='View plans' color='#fff'/>
            </S.Content>

            <S.Aside>
                <div className='forma'>
                    <img src={bgR} alt=""  className='forma'/>                  
                </div>
                <div className="intro">
                    <img src={Intro} alt=""  className='intro'/>  
                </div>
            </S.Aside>
        </S.Main>
    )
}