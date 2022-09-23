import * as S from './style'

export const Card = ({img,title,text}) =>{
    return(
        <S.Card>
            <img src={img} alt="" />
            <h2>{title}</h2>
            <p>{text}</p>
        </S.Card>
    )
}