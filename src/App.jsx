import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showreel from './components/Showreel';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Navbar />
      <Hero />
      <Showreel />
      <Portfolio />
      <About />
      <Skills />
      <Services />
      <Contact />
      <footer className="border-t border-white/10 text-white/60 text-sm py-8 text-center">© {new Date().getFullYear()} Olaitan Ekunode — All rights reserved.</footer>
    </div>
  )
}

export default App
