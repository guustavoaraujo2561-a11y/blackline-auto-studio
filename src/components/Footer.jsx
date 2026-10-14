import Logo from './Logo.jsx'
import Pillars from './Pillars.jsx'
import {
  ArrowRightIcon,
  ArrowUpIcon,
  ClockIcon,
  InstagramIcon,
  PinIcon,
  WhatsAppIcon,
} from './Icons.jsx'
import { hours, links, nav } from '../data/site.js'
import '../styles/footer.css'

const ext = { target: '_blank', rel: 'noopener noreferrer' }

export default function Footer() {
  return (
    <footer className="footer" id="contato" aria-labelledby="rodape-titulo">
      <div className="footer__band" aria-hidden="true">
        <img
          src="/otimizado/detalhamento-1374.webp"
          alt=""
          width="1374"
          height="1145"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__brand">
            <h2 id="rodape-titulo" className="footer__logo">
              <span className="sr-only">BLACKLINE AUTO STUDIO</span>
              <span aria-hidden="true">
                <Logo />
              </span>
            </h2>
            <p>Estética automotiva premium. Cuidado, proteção e excelência em cada detalhe.</p>
            <a className="btn btn--outline" href={links.whatsapp} {...ext}>
              <WhatsAppIcon />
              AGENDAR PELO WHATSAPP
              <ArrowRightIcon className="btn__arrow" />
            </a>
            <a className="btn btn--outline" href={links.instagram} {...ext}>
              <InstagramIcon />
              @GUUSTAVO.AA
              <ArrowRightIcon className="btn__arrow" />
            </a>
          </div>

          <nav className="footer__col" aria-label="Rodapé">
            <h3 className="footer__heading">NAVEGAÇÃO</h3>
            <ul className="footer__nav">
              {nav.map((item) => (
                <li key={item.id}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <h3 className="footer__heading">CONTATO</h3>
            <ul className="footer__list">
              <li>
                <WhatsAppIcon />
                <a href={links.whatsapp} {...ext}>
                  +55 11 97082-4236
                  <small>Atendimento via WhatsApp</small>
                </a>
              </li>
              <li>
                <InstagramIcon />
                <a href={links.instagram} {...ext}>
                  @guustavo.aa
                  <small>Acompanhe nossos trabalhos</small>
                </a>
              </li>
              <li>
                <PinIcon />
                <span>
                  Osasco, SP
                  <small>Localização fictícia</small>
                </span>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">HORÁRIO DE ATENDIMENTO</h3>
            <div className="footer__hours">
              <ClockIcon />
              <dl>
                {hours.map((h) => (
                  <div key={h.days}>
                    <dt>{h.days}</dt>
                    <dd>{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <p className="footer__note">Atendimento mediante agendamento.</p>
          </div>
        </div>

        <Pillars className="footer__pillars" />

        <div className="footer__legal">
          <p>© 2026 BLACKLINE AUTO STUDIO.</p>
          <p className="footer__demo">
            Projeto demonstrativo: serviços, preços, horários e localização são fictícios.
          </p>
          <p className="footer__credit">
            DESENVOLVIDO POR <strong>GUSTAVO.AA</strong>
          </p>
          <a className="footer__top" href="#inicio" aria-label="Voltar ao topo">
            <ArrowUpIcon />
          </a>
        </div>
      </div>
    </footer>
  )
}
