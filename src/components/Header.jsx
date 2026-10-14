import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import { CalendarIcon } from './Icons.jsx'
import { links, nav } from '../data/site.js'
import '../styles/header.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('inicio')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      const marker = window.innerHeight * 0.4
      let current = nav[0].id
      for (const { id } of nav) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= marker) current = id
      }
      setActive(atBottom ? nav[nav.length - 1].id : current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="header__bar">
        <a className="header__brand" href="#inicio" aria-label="BLACKLINE AUTO STUDIO, ir ao início" onClick={close}>
          <Logo />
        </a>

        <nav className="header__nav" id="menu-principal" aria-label="Principal">
          <ul>
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={close}
                  aria-current={active === item.id ? 'true' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="btn btn--ghost header__cta header__cta--mobile"
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CalendarIcon />
            Agendar atendimento
          </a>
        </nav>

        <a
          className="btn btn--ghost header__cta header__cta--desktop"
          href={links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CalendarIcon />
          Agendar atendimento
        </a>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
