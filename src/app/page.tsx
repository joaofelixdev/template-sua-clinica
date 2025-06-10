import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Specialties from './components/Specialties/Specialties'
import Structure from './components/Structure/Structure'
import Testimonials from './components/Testimonials/Testimonials'
import LocationContact from './components/LocationContact/LocationContact'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Specialties />
        <Structure />
        <Testimonials />
        <LocationContact />
      </main>
      <Footer />
    </>
  )
}