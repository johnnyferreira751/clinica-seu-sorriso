import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { forest: '#174C43', mint: '#DDEBE3', cream: '#F7F8F5' }, boxShadow: { soft: '0 18px 50px rgba(23,76,67,.09)' } } }, plugins: [] };
export default config;
