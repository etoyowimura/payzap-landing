import Faq from "./component/Faq.jsx";
import Footer from "./component/Footer.jsx";
import Header from "./component/Header";
import Section1 from "./component/sections/Section1.jsx";
import Section2 from "./component/sections/Section2.jsx";
import Section3 from "./component/sections/Section3.jsx";
import Section4 from "./component/sections/Section4.jsx";
import Bottom from "./component/Bottom.jsx";
import Secondary from "./component/sections/Secondary.jsx";


export const isMobile = window.innerWidth <= 768;

function App() {
  return (
    <div>
      <Header />
      <Section1 />
      <Secondary />
      <Section2 />
      <Section3 />
      <Section4 />
      <Faq />
      <Footer />
      <Bottom />
    </div>
  );
}

export default App;
