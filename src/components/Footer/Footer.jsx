import Logo from '../../assets/images/logo.svg'

import Facebook from '../../assets/images/icon-facebook.svg'
import Twitter from '../../assets/images/icon-twitter.svg'
import Pinterest from '../../assets/images/icon-pinterest.svg'
import Instagram from '../../assets/images/icon-instagram.svg'

import * as S from './style'

export const Footer = () =>{
    return(
        <S.Footer>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>

            <nav>
                <a href="#"><img src={Facebook} alt="icon facebook" /></a>
                <a href="#"><img src={Twitter} alt="icon twitter" /></a>
                <a href="#"><img src={Pinterest} alt="icon pinterest" /></a>
                <a href="#"><img src={Instagram} alt="icon instagram" /></a>
            </nav>
        </S.Footer>
    )
}