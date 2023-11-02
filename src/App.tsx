
import Navbar from './Components/Navbar';
import Campaigns from './Components/Campaigns';
import Whoweare from './Components/Whoweare';
import LogoCarousel from "./Components/Logo";
import News from './Components/News';
import Resources from './Components/Resources';
import Form from './Components/Form';
import Footer from './Components/Footer';
import SubFooter from './Components/Subfooter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Campaigns />
      <Whoweare />
      <LogoCarousel />
      <News />
      <Resources />
      <Form/>
      <Footer />
      <SubFooter/>


   
    </div>
  );
}

export default App;
