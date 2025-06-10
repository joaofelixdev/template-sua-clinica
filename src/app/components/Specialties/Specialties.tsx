import { FaStethoscope, FaFemale, FaChild, FaHeart, FaPumpSoap, FaBone, FaEye, FaSyringe } from 'react-icons/fa'

const specialties = [
  {
    icon: <FaStethoscope className="text-blue-600" size={36} />, 
    title: 'Clínica Geral',
    description: 'Atendimento completo e acompanhamento para sua saúde no dia a dia.'
  },
  {
    icon: <FaFemale className="text-pink-500" size={36} />,
    title: 'Ginecologia',
    description: 'Cuidado integral da saúde da mulher com atenção e respeito.'
  },
  {
    icon: <FaChild className="text-yellow-500" size={36} />,
    title: 'Pediatria',
    description: 'Consultas para crianças e adolescentes com olhar acolhedor.'
  },
  {
    icon: <FaHeart className="text-red-500" size={36} />,
    title: 'Cardiologia',
    description: 'Prevenção e tratamento de doenças do coração com tecnologia de ponta.'
  },
  {
    icon: <FaPumpSoap className="text-green-500" size={36} />,
    title: 'Dermatologia',
    description: 'Cuidados com a pele, unhas e cabelos com foco em saúde e estética.'
  },
  {
    icon: <FaBone className="text-gray-700" size={36} />,
    title: 'Ortopedia',
    description: 'Tratamentos para ossos, músculos e articulações com agilidade no diagnóstico.'
  },
  {
    icon: <FaSyringe className="text-purple-600" size={36} />,
    title: 'Endocrinologia',
    description: 'Diagnóstico e tratamento de distúrbios hormonais, como diabetes e tireoide.'
  },
  {
    icon: <FaEye className="text-cyan-600" size={36} />,
    title: 'Oftalmologia',
    description: 'Cuidados com a saúde ocular, prevenção e tratamento de doenças dos olhos.'
  }
]

export default function Specialties() {
  return (
    <section className="py-10 px-4 max-w-6xl mx-auto" id="specialties">
      <div className="flex flex-col items-center mb-8">
        <h2 className="w-2/3 text-2xl md:text-4xl font-bold text-center mb-2">Especialidades médicas para cuidar de você em todas as fases da vida</h2>
        <p className="text-gray-600 text-center max-w-2xl">Na Sua Clínica, você encontra atendimento completo com profissionais experientes e estrutura para exames no próprio local.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {specialties.map((spec, idx) => (
          <div
            key={spec.title}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center transition-transform transition-shadow duration-200 hover:scale-[1.03] hover:shadow-lg group"
          >
            <div className="mb-3">{spec.icon}</div>
            <h3 className="font-semibold text-lg text-center mb-1 group-hover:text-blue-700 transition-colors">{spec.title}</h3>
            <p className="text-gray-500 text-sm text-center">{spec.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}