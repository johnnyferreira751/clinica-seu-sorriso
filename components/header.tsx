'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Smile } from 'lucide-react';

const links = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'A clínica' },
  { href: '/especialidades', label: 'Especialidades' },
  { href: '/contactos', label: 'Contactos' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="container nav-wrap">
      <Link href="/" className="brand" onClick={() => setOpen(false)}>
        <span className="brand-icon"><Smile size={23}/></span>
        <span>seu<span className="brand-light">sorriso</span><small>CLÍNICA DENTÁRIA</small></span>
      </Link>
      <nav className={open ? 'nav-links nav-open' : 'nav-links'}>
        {links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
        <Link className="button button-small" href="/marcacao" onClick={() => setOpen(false)}>Marcar consulta</Link>
      </nav>
      <button className="menu-toggle" aria-label="Abrir menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </div>
  </header>;
}
