import LandingPage from './components/LandingPage';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className='relative'>
      <LandingPage />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
