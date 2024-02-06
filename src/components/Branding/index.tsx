import styled from "styled-components"
import logoImg from '../../assets/logo-img.png'
import brandingArte from '../../assets/branding-arte.png'

const ContainerBranding = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 1120px;
  height: 323px;
  margin: 24px auto;
` 

const BrandingArt = styled.img`
  width: 200px;
  height: 200px;
  border: 1px solid red;
  position: absolute;
  top: 150%;
`

const ContainerTextBranding = styled.div`
  display: flex;
  flex-direction: column;
  width: 581px;
  font-size: 56px;
  line-height: 90px;
  color: #fff;
`

const Span = styled.span`
  color: #0339D9;
`

const ImgBranding = styled.img`
  width: 455px;
  height: 323px;
`

const Branding:React.FC = () => {
  return(
    <ContainerBranding>
      <ContainerTextBranding>
        <h1>MAKE THE WORLD</h1>
        <h1>A <Span>BETTER</Span> PLACE</h1>
      </ContainerTextBranding>
      <ImgBranding src={logoImg} alt="logo-img"/>
    </ContainerBranding>
  )
}
export default Branding