import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Highlights from './components/Highlights';
import Amenities from './components/Amenities';
import FloorPlans from './components/FloorPlans';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Highlights />
        <Amenities />
        <FloorPlans />
        <Gallery />
        <Location />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
