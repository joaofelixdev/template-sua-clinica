export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto py-16 px-4">
      <div className="bg-white rounded-lg shadow-sm p-8 mb-4 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-3/6 mb-6 md:mb-0">
          <span className="block font-semibold text-gray-800 text-2xl">Sobre Nós</span>
          <span
            className="text-xs font-medium text-gray-400"
          >
            Mais que uma clínica, um cuidado de verdade
          </span>
        </div>
        <div className="w-full md:w-3/6 text-gray-700 text-base">
          Nossa missão é capacitar profissionais de saúde com insights precisos, abrangentes e acionáveis, utilizando os mais recentes avanços em aprendizado profundo e inteligência artificial.
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center">
          <img src="/assets/visit-card.png" alt="Logo" className="rounded-lg mb-6" />
          <h3 className="font-bold text-xl mb-2 text-blue-600">Quem Somos</h3>
          <p className="text-gray-600 text-center">
            Há mais de 10 anos, a Sua Clínica se dedica a cuidar de pessoas com carinho e excelência. Acreditamos em um atendimento próximo, humano e responsável — sempre colocando o bem-estar do paciente em primeiro lugar.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center">
          <img src="/assets/clinic.png" alt="Ambiente acolhedor" className="rounded-lg mb-6 object-cover" />
          <h3 className="font-bold text-xl mb-2 text-blue-600">Cuidado em Cada Detalhe</h3>
          <p className="text-gray-600 text-center mb-4">
            Mais do que uma estrutura moderna, oferecemos um ambiente acolhedor, limpo e preparado para cuidar da sua saúde com excelência. Nosso time é formado por profissionais experientes e prontos para te atender com carinho.
          </p>
        </div>
      </div>
    </section>
  )
}