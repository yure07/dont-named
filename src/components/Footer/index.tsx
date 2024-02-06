import styled from "styled-components"

import artFooter from '../../assets/rodape-arte.png'
import linkedinIcon from '../../assets/linkedin-icon.png'
import facebookIcon from '../../assets/facebook-icon.png'
import instaIcon from '../../assets/instagram-icon.png'
import emailIcon from '../../assets/email-icon.png'

const ContainerMain = styled.footer`
  display: flex;
  width: 1540px;
  align-self: center;
  margin-top: -128px;
`

const FooterArt = styled.img`
  margin-left: 88px;
`

const ContainerSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1120px;
  height: 210px;
  align-self: center;
  margin-left: 200px;
  position: absolute;
`

const UpFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 86px;
`

const TextUpFooter = styled.h1`
  font-size: 44px;
  color: #fff;
`

const Span = styled(TextUpFooter)`
  color: #0339D9;
  margin-top: -24px;
`

const IconsUpFooter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`

const Icon = styled.img`
  height: 25px;
  cursor: pointer;
`

const DownFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
  font-family: 'Inter';
`

const ContactEmail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

const AddressEmail = styled.a`
  font-size: 14px;
  text-decoration: underline;
`

const TextCredits = styled.p`
  color: #0339D9;
`

const ContainerPrivacyPolicy = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`

const TextsPrivacy = styled.p`
  color: #fff;
  font-size: 12px;
`

const Footer:React.FC = () => {
  return(
    <ContainerMain>
      <FooterArt src={artFooter} alt="rodape-arte"/>
      <ContainerSection>
        <UpFooter>
          <TextUpFooter>
            COME CHANGE
            <Span>WITH US</Span>
          </TextUpFooter>
          <IconsUpFooter>
            <Icon src={linkedinIcon} alt="icon-linkedin"/>
            <Icon src={facebookIcon} alt="icon-facebook"/>
            <Icon src={instaIcon} alt="icon-insta"/>
          </IconsUpFooter>
        </UpFooter>
        <DownFooter>
          <ContactEmail>
            <Icon src={emailIcon} alt="icon-email"/>
            <AddressEmail>dontnamed00@gmail.com</AddressEmail>
          </ContactEmail>
          <TextCredits>DEVELOPED BY DONTNAMED</TextCredits>
          <ContainerPrivacyPolicy>
            <TextsPrivacy>Privacy Policy</TextsPrivacy>
            <TextsPrivacy>Terms & conditions</TextsPrivacy>
          </ContainerPrivacyPolicy>
        </DownFooter>
      </ContainerSection>
    </ContainerMain>
  )
}

export default Footer