import { useEffect, useRef, useState } from 'react'
import Pillars from './Pillars.jsx'
import { ArrowDownIcon, ArrowRightIcon, WhatsAppIcon } from './Icons.jsx'
import { links } from '../data/site.js'
import '../styles/hero.css'

function shouldPlayVideo() {
  if (typeof window === 'undefined') return false
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  if (navigator.connection?.saveData) return false
  return true
}

export default function Hero() {
  const [playVideo, setPlayVideo] = useState(false)
  const [ready, setReady] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    setPlayVideo(shouldPlayVideo())
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    video.play().catch(() => setReady(false))
  }, [playVideo])

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-titulo">
      <div className="hero__media" aria-hidden="true">
        <img
          className="hero__poster"
          src="/otimizado/hero-poster.webp"
          alt=""
          width="1280"
          height="720"
          fetchPriority="high"
        />
        {playVideo && (
          <video
            ref={videoRef}
            className={`hero__video${ready ? ' is-ready' : ''}`}
            src="/otimizado/hero-web.mp4"
            poster="/otimizado/hero-poster.webp"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            tabIndex={-1}
            onPlaying={() => setReady(true)}
          />
        )}
        <div className="hero__shade" />
      </div>

      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow hero__in" style={{ '--d': '0.1s' }}>
            ESTÉTICA AUTOMOTIVA PREMIUM
          </p>
          <h1 className="hero__title hero__in" style={{ '--d': '0.2s' }} id="hero-titulo">
            O EXTRAORDINÁRIO
            <br />
            ESTÁ NOS <span>DETALHES.</span>
          </h1>
          <p className="hero__lead hero__in" style={{ '--d': '0.35s' }}>
            Seu veículo merece mais do que cuidado. Merece excelência em cada detalhe.
          </p>
          <div className="hero__actions hero__in" style={{ '--d': '0.5s' }}>
            <a className="btn btn--primary" href={links.whatsapp} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              AGENDAR ATENDIMENTO
              <ArrowRightIcon className="btn__arrow" />
            </a>
            <a className="btn btn--ghost" href="#servicos">
              CONHECER SERVIÇOS
              <ArrowDownIcon className="btn__arrow" />
            </a>
          </div>
          <Pillars className="hero__pillars hero__in" />
        </div>
      </div>

      <a className="hero__scroll" href="#servicos">
        <span className="hero__scroll-mouse" aria-hidden="true" />
        ROLE PARA EXPLORAR
      </a>
    </section>
  )
}
