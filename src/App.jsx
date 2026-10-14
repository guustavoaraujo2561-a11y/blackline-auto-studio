import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#servicos">
        Pular para os serviços
      </a>
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
      <Footer />
    </>
  )
}
