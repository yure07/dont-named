import styled from "styled-components";

import Header from "./components/Header";
import Branding from "./components/Branding";
import Cases from "./components/Cases";
import Footer from "./components/Footer";

const BackgroundScreen = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #000056;
`

const App:React.FC = () => {
  return (
    <BackgroundScreen>
      <Header/>
      <Branding/>
      <Cases/>
      <Footer/>
    </BackgroundScreen>
  );
}

export default App;