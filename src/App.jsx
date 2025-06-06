import './App.css';
import About from './components/About';
import Features from './components/Features';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Story from './components/Story';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <main className="realtive min-h-screen w-screen overflow-x-hidden ">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
