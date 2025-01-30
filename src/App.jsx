import Navbar from "./components/Navbar";
import CartsRl from "./components/CartsRl";
import Text from "./components/Text";
import CartsLr from "./components/CardsLr";
import CustomCursor from "./components/CustomCursor/CustomCursor.jsx";
// import Form from "./components/Form.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Hero from "./components/Hero.jsx";
function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Text />
      <CartsRl />
      <CartsLr />
      <HeroSection />
      <Hero />
      {/* <Form /> */}
    </>
  );
}

export default App;
