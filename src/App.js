import Faq from "./component/Faq.jsx";
import Footer from "./component/Footer.jsx";
import Header from "./component/Header";
import Section1 from "./component/sections/Section1.jsx";
import Section2 from "./component/sections/Section2.jsx";
import Section3 from "./component/sections/Section3.jsx";
import Section4 from "./component/sections/Section4.jsx";
import Bottom from "./component/Bottom.jsx";
import Secondary from "./component/sections/Secondary.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export const isMobile = window.innerWidth <= 768;

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <Router>
        <Header scrollToSection={scrollToSection} />
        <Section1 />
        <Secondary />
        <Section2 />
        <Section3 />
        <Section4 />
        <Faq />
        <Footer />
        <Bottom />

        <Routes>
          <Route path="/" component={<App /> }/>

          <Route path="/about" component={<Section2 /> } />
          <Route path="/monitor" component={<Section3 /> } />
          <Route path="/myhome" component={<Section4 /> } />
          <Route path="/faq" component={<Faq /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
