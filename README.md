# Seu Sorriso — Clínica Dentária

Site institucional em Next.js 15, React, TypeScript e Tailwind CSS.

## Requisitos
- Node.js 20 ou superior
- npm

## Instalação
Abra o terminal na pasta do projeto e execute:

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Antes de publicar
1. Em `app/marcacao/page.tsx`, substitua `244900000000` pelo WhatsApp real da clínica, apenas números com indicativo do país.
2. Atualize morada, telefone, e-mail e horário em `components/footer.tsx` e `app/contactos/page.tsx`.
3. Confirme quais especialidades são realmente prestadas pela clínica.
4. Substitua a fotografia de demonstração em `app/globals.css` por uma fotografia autorizada da clínica.
5. Teste o formulário num telemóvel com WhatsApp instalado.

## Páginas
- `/` — Início
- `/sobre` — Sobre a clínica
- `/especialidades` — Serviços
- `/contactos` — Contactos
- `/marcacao` — Pedido de consulta

## Nota sobre marcações
O formulário abre o WhatsApp com os dados preenchidos. Não guarda consultas numa base de dados e não confirma automaticamente horários. Para gestão real de pacientes, será necessário integrar backend, autenticação, base de dados e regras de privacidade.
