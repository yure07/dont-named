import styled from "styled-components"
import logoName from '../../assets/logo-name.png'

const ContainerHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 1120px;
  height: 30px;
  margin: 56px auto;
  font-size: 16px;
  font-weight: 700;
`

const LogoName = styled.img`
  width: 222px;
  height: 19px;
`

const ContainerLinks = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 362px;
  height: 100%;
`

const BtnContact = styled.button`
  width: 111px;
  height: 31px;
  background-color: #0339D9;
  color: #fff;
  border: 0;
  font-weight: 700;
  cursor: pointer;
`

const Header:React.FC = () => {
  return(
    <ContainerHeader>
      <LogoName src={logoName} alt="logo-dont-named"/>
      <ContainerLinks>
        <a href="/">HOME</a>
        <a href="/">PORTFOLIO</a>
        <a href="/">LOCATIONS</a>
        <BtnContact>CONTACT</BtnContact>
      </ContainerLinks>
    </ContainerHeader>
  )
}

export default Header