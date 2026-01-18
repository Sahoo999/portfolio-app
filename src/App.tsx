
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Background3D from './components/Background3D';

function App() {
  return (
    <div className="min-h-screen text-white selection:bg-blue-500/30 relative">
      <Background3D />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Contact />

      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 bg-slate-900">
        <p>© {new Date().getFullYear()} Debangsu Sahoo. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
