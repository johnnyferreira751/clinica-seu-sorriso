import Link from 'next/link';
import { MapPin, Phone, Clock, Smile } from 'lucide-react';

export default function Footer() {
  return <footer className="footer">
    <div className="container footer-grid">
      <div><Link href="/" className="brand footer-brand"><span className="brand-icon"><Smile size={22}/></span><span>seu<span className="brand-light">sorriso</span><small>CLÍNICA DENTÁRIA</small></span></Link><p>Cuidamos do seu sorriso com dedicação, atenção e profissionalismo.</p></div>
      <div><h3>Explorar</h3><Link href="/sobre">A clínica</Link><Link href="/especialidades">Especialidades</Link><Link href="/marcacao">Marcar consulta</Link></div>
      <div><h3>Contactos</h3><p><MapPin size={16}/> Luanda, Angola — endereço a confirmar</p><p><Phone size={16}/> Telefone a configurar</p><p><Clock size={16}/> Horário a confirmar</p></div>
    </div>
    <div className="container footer-bottom">© {new Date().getFullYear()} Seu Sorriso. Todos os direitos reservados.</div>
  </footer>;
}
