import styled from "styled-components"
import fulanoArt from '../../assets/arte-fulano.png'
import odontoArt from '../../assets/arte-odonto.png'

const ContainerBackgroundPortfolio = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 1540px;
  height: 1400px;
  margin: 128px auto;
  border-right: 5px solid #fff;
`

const ElementRotateSectionPortfolio = styled.div`
  width: 1543px;
  height: 112px;
  background-color: #fff;
  rotate: -4deg;
  margin-top: -56px;
`

const ContainerCases = styled.div`
  display: flex;  
  flex-direction: column;
  width: 1140px;
  height: 82%;
  align-self: center;
  justify-content: space-between;
  z-index: 99;
`

const CaseContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 500px;
`

const FulanoArt = styled.img`
  width: 600px;
  height: 600px;
  margin: -18px 0 0 -18px;
`

const ContainerInfoCase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: auto 0;
  width: 455px;
  height: 415px;
`
const DividerCaseFulano = styled.span`
  width: 64px;
  height: 3px;
  transform: translate(50px, 28px);
  background-color: #FC0312;
  rotate: 90deg;
`

const TitleCase = styled.h1`
  font-size: 32px;
  margin-left: 16px;
`

const SubtitleCaseFulano = styled.h2`
  color: #FC0312;
  font-size: 16px;
  margin: -28px 0 0 16px;
`

const InfoCase = styled.p`
  font-family: "Inter";
  color: #444444;
  line-height: 27.5px;
`

const BtnAcessFulano = styled.button`
  width: 141px;
  height: 37px;
  font-size: 18px;
  background-color: #FC0312;
  border: 0;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
`

const DividerCaseOdonto = styled(DividerCaseFulano)`
  background-color: #00756D;
`

const OdontoArt = styled.img`
  width: 560px;
  height: 500px;
  margin: 0;
  box-shadow: 5px 6px 10px 4px #00756d60;
`

const SubtitleCaseOdonto = styled(SubtitleCaseFulano)`
  color: #00756D;
`

const BtnAcessOdonto = styled(BtnAcessFulano)`
  background-color: #00756D;
`

const Cases:React.FC = () => {
  return(
    <ContainerBackgroundPortfolio>
      <ElementRotateSectionPortfolio/>
      <ContainerCases>
        <CaseContainer>
          <FulanoArt src={fulanoArt} alt="case-fulano-art"/>
          <ContainerInfoCase>
            <DividerCaseFulano/>
            <TitleCase>LOJA DO FULANO</TitleCase>
            <SubtitleCaseFulano>E-COMMERCE</SubtitleCaseFulano>
            <InfoCase>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </InfoCase>
            <InfoCase>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
              qui officia deserunt mollit anim id est laborum.
            </InfoCase>
            <BtnAcessFulano>ACESSAR</BtnAcessFulano>
          </ContainerInfoCase>
        </CaseContainer>
        <CaseContainer> 
          <OdontoArt src={odontoArt} alt="case-odonto-art"/>
          <ContainerInfoCase>
            <DividerCaseOdonto/>
            <TitleCase>EMPRESARIAL NOVAIS</TitleCase>
            <SubtitleCaseOdonto>LANDING PAGE</SubtitleCaseOdonto>
            <InfoCase>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </InfoCase>
            <InfoCase>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
              qui officia deserunt mollit anim id est laborum.
            </InfoCase>
            <BtnAcessOdonto>ACESSAR</BtnAcessOdonto>
          </ContainerInfoCase>
        </CaseContainer>
      </ContainerCases>
    </ContainerBackgroundPortfolio>
  )
}

export default Cases