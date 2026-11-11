import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Seu Sorriso | Clínica Dentária',
  description: 'Cuidamos do seu sorriso com atenção, profissionalismo e carinho. Conheça os nossos serviços e solicite uma consulta.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt">
    <body><Header /><main>{children}</main><Footer /></body>
  </html>;
}
