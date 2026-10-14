import useReveal from '../hooks/useReveal.js'
import { services } from '../data/site.js'
import { ArrowRightIcon } from './Icons.jsx'
import '../styles/services.css'

function Service({ item, index }) {
  const [ref, visible] = useReveal()
  const headingId = `servico-${item.id}`

  return (
    <article
      ref={ref}
      className={`service${visible ? ' is-visible' : ''}`}
      aria-labelledby={headingId}
      style={{ '--i': index }}
    >
      <div className="service__media">
        <img
          src={`/otimizado/${item.image}-1374.webp`}
          srcSet={`/otimizado/${item.image}-720.webp 720w, /otimizado/${item.image}-1374.webp 1374w`}
          sizes="(min-width: 900px) 46vw, 100vw"
          width="1374"
          height="1145"
          alt={item.alt}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="service__body">
        <h3 className="service__name" id={headingId}>
          {item.name}
        </h3>
        <p className="service__text">{item.description}</p>
        <div className="service__buy">
          <p className="service__price">
            <span>A PARTIR DE</span>
            <strong>{item.price}</strong>
          </p>
          <a
            className="btn btn--primary"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Solicitar orçamento de ${item.name.toLowerCase()} pelo WhatsApp`}
          >
            SOLICITAR ORÇAMENTO
            <ArrowRightIcon className="btn__arrow" />
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Services() {
  return (
    <section className="services" id="servicos" aria-labelledby="servicos-titulo">
      <div className="services__inner">
        <header className="services__head">
          <p className="services__eyebrow">01 / NOSSAS ESPECIALIDADES</p>
          <h2 className="services__title" id="servicos-titulo">
            EXCELÊNCIA EM CADA DETALHE.
          </h2>
          <p className="services__lead">
            Tratamentos especializados para valorizar, proteger e transformar a aparência do seu
            veículo.
          </p>
        </header>

        <div className="services__grid">
          {services.map((item, i) => (
            <Service key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
