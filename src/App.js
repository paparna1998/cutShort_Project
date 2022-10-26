
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HeaderPage from './Components/HeaderPage';
import ImageSlider from './Components/Slider/ImageSlider';
import Card from './Components/Cards/Card';
import Content from './Components/Content';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeaderPage />
      <ImageSlider />
      <Content />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
