'use client'

import { ArrowRightIcon } from "lucide-react"

export default function Hero() {
  return (
    <section className="w-full bg-white rounded-xl shadow-sm mt-4 p-8 flex gap-10 flex-col md:flex-row items-center justify-between">
      <div className="max-w-xl">
        <h1 className="text-3xl md:text-6xl font-semibold mb-4">
          Mais saúde, mais tranquilidade para sua vida
        </h1>
        <p className="mb-6 text-gray-600">
          Na Sua Clínica, você encontra profissionais qualificados, atendimento humanizado e tecnologia de ponta para cuidar da sua saúde com excelência.
        </p>
        <div className="flex gap-4">
          <a
            href="#about"
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition font-extralight flex gap-2 items-center"
          >
            Agendar consulta
          </a>
          <a
            href="#contact"
            className="border-0 bg-gray-100 text-gray-600 px-6 py-2 rounded-full font-extralight hover:bg-gray-200 transition"
          >
            Contato
          </a>
        </div>
      </div>
      <div className="mt-8 md:mt-0">
        <img src="/assets/hero-image.png" alt="Cérebro" className="object-contain rounded-lg" loading="lazy" />
      </div>
    </section>
  )
}