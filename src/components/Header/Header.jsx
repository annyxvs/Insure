import * as S from './style'

import Logo from '../../assets/images/logo.svg'
import { Button } from '../Button/Button'
import { Link } from '../Link/Link'

export function Header (){
    return(
        <S.Header>
            <div className="logo"><img src={Logo} alt="logo insure"/></div>
            <nav>
                <Link title='How we work'/>
                <Link title='Blog'/>
                <Link title='Account'/>

                <Button color='black' title="View plans"/>
             </nav>
        </S.Header>
    )
}