import { motion } from 'framer-motion';
import {
  About,
  Contact,
  Cta,
  Footer,
  Hero,
  PartnerBand,
  Process,
  Projects,
  Services,
  StatsBand,
  Testimonials,
} from './components/Sections';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <motion.div
      className="min-h-screen overflow-hidden bg-ink text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
    >
      <Navbar />
      <main>
        <Hero />
        <StatsBand />
        <Services />
        <Projects />
        <Process />
        <Testimonials />
        <About />
        <PartnerBand />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;
