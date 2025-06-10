import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from '@next/font/google'
import Warning from './components/Warning'

export const metadata: Metadata = {
  title: 'SuaClínica | Clínica Médica Especializada',
  description: 'SuaClínica oferece atendimento médico especializado com foco em cuidado integral e tecnologia avançada. Agende sua consulta hoje.',
  keywords: ['clínica médica', 'saúde', 'atendimento médico', 'consultas', 'especialidades médicas', 'agendamento online', 'bem-estar', 'medicina', 'tratamento', 'diagnóstico'],
  openGraph: {
    title: 'SuaClínica | Clínica Médica Especializada',
    description: 'SuaClínica oferece atendimento médico especializado com foco em cuidado integral e tecnologia avançada. Agende sua consulta hoje.',
    url: 'https://www.suaclinica.com.br',
    siteName: 'SuaClínica',
    images: [
      {
        url: 'https://www.suaclinica.com.br/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SuaClínica | Clínica Médica',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SuaClínica | Clínica Médica Especializada',
    description: 'SuaClínica oferece atendimento médico especializado com foco em cuidado integral e tecnologia avançada. Agende sua consulta hoje.',
    images: [
      {
        url: 'https://www.suaclinica.com.br/twitter-image.jpg',
        alt: 'SuaClínica | Clínica Médica',
      },
    ],
  },
}

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className={`max-w-[1280px] mx-auto bg-[#f8fbff] text-gray-900 ${roboto.variable}`}>
        {children}
        <Warning />
      </body>
    </html>
  )
}