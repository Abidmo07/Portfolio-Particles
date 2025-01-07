
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero'
import Main from './components/Main';
import Navbar from './components/Navbar'
import Particle from './components/Particle';
import Projects from './components/Projects';




function App() {
 
  return (
<>
<div className="absolute inset-0 -z-10 h-screen">
  <Particle />
</div>

<Navbar />
<Hero />
<Main />
<Projects />
<Contact/>
<Footer />
</>
  )
}

export default App