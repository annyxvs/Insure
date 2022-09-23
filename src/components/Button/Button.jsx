import * as S from  './style'

export const Button = ({title,color}) =>{
    return(
        <S.Button color={color}>{title}</S.Button>
    )
}