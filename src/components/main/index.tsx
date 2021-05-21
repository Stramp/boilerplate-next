import * as S from './styles'

const Main = ({ text = 'MAIN', text2 = 'testo2' }) => {
  return (
    <S.Wrapper>
      <S.Title>{text}</S.Title>
      <S.Title>{text2}</S.Title>
    </S.Wrapper>
  )
}
export default Main
