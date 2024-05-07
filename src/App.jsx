import Header from "./components/header";
import Start from "./parts/start";
import Services from "./parts/services";
import AboutMe from "./parts/aboutme";
import StepByStep from "./parts/stepByStep";
import Footer from "./parts/footer";

function App() {
  const isMobile = window.innerWidth < 768;

  const colorDefault = "#2FCCDB";

  return (
    <>
      <Header />
      <Start isMobile={isMobile} colorDefault={colorDefault} />
      <Services isMobile={isMobile} colorDefault={colorDefault} />
      <AboutMe isMobile={isMobile} colorDefault={colorDefault} />
      <StepByStep isMobile={isMobile} colorDefault={colorDefault} />
      <Footer />
    </>
  );
}

export default App;
