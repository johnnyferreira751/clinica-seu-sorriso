import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, HeartHandshake, Sparkles, Smile, CheckCircle2 } from 'lucide-react';

const services = [
  { icon: <Smile/>, title: 'Clínica geral', text: 'Cuidados essenciais para manter a saúde dos seus dentes e gengivas.' },
  { icon: <Sparkles/>, title: 'Estética dentária', text: 'Soluções para valorizar a beleza natural do seu sorriso.' },
  { icon: <ShieldCheck/>, title: 'Prevenção', text: 'Acompanhamento e orientação para prevenir problemas orais.' },
];

export default function Home() {
  return <>
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow"><span/> CUIDADO QUE SE SENTE. SORRISO QUE SE VÊ.</span>
          <h1>Um sorriso saudável muda <em>tudo.</em></h1>
          <p>Na Seu Sorriso, cada cuidado começa com atenção a si. Descubra uma experiência dentária acolhedora, tranquila e profissional.</p>
          <div className="hero-actions"><Link href="/marcacao" className="button">Marcar uma consulta <ArrowUpRight size={18}/></Link><Link href="/especialidades" className="text-link">Conhecer tratamentos</Link></div>
          <div className="hero-note"><span className="note-icon"><HeartHandshake size={19}/></span><span><b>O seu bem-estar em primeiro lugar</b><small>Atendimento próximo e humanizado.</small></span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-image" role="img" aria-label="Ambiente moderno de clínica dentária"/>
          <div className="floating-card"><span className="floating-icon"><Smile size={22}/></span><span><b>O seu sorriso</b><small> merece atenção especial.</small></span></div>
          <div className="visual-stamp">SORRIA<br/><strong>SEM MEDO.</strong></div>
        </div>
      </div>
    </section>
    <section className="trust-strip"><div className="container trust-grid"><div><b>01</b><span>Escuta atenta</span></div><div><b>02</b><span>Cuidado personalizado</span></div><div><b>03</b><span>Compromisso com a saúde oral</span></div></div></section>
    <section className="section"><div className="container"><div className="section-heading"><div><span className="eyebrow">O QUE FAZEMOS</span><h2>Cuidar de si é a nossa <em>especialidade.</em></h2></div><Link href="/especialidades" className="text-link">Ver todas as especialidades <ArrowUpRight size={17}/></Link></div>
      <div className="service-grid">{services.map((s,i)=><article className="service-card" key={s.title}><span className="service-icon">{s.icon}</span><small>0{i+1}</small><h3>{s.title}</h3><p>{s.text}</p><Link href="/especialidades" aria-label={`Saber mais sobre ${s.title}`}><ArrowUpRight/></Link></article>)}</div>
    </div></section>
    <section className="about-band"><div className="container about-grid"><div className="about-art"><div className="about-circle"><Smile size={90} strokeWidth={1}/></div><span>O SEU SORRISO, A NOSSA MOTIVAÇÃO.</span></div><div><span className="eyebrow">UMA CLÍNICA PENSADA PARA SI</span><h2>Mais do que tratar dentes, queremos <em>cuidar de pessoas.</em></h2><p>Acreditamos que uma boa experiência começa com informação clara, respeito e atenção às necessidades de cada paciente.</p><ul className="check-list"><li><CheckCircle2/> Atendimento atencioso e individualizado</li><li><CheckCircle2/> Orientação clara em cada etapa</li><li><CheckCircle2/> Foco na prevenção e saúde oral</li></ul><Link href="/sobre" className="button button-outline">Conheça a clínica <ArrowUpRight size={18}/></Link></div></div></section>
    <section className="cta-section"><div className="container cta-inner"><div><span className="eyebrow">ESTAMOS AQUI PARA SI</span><h2>Está na hora de cuidar do seu sorriso?</h2><p>Entre em contacto connosco e solicite a sua consulta.</p></div><Link href="/marcacao" className="button button-white">Solicitar consulta <ArrowUpRight size={18}/></Link></div></section>
  </>;
}
