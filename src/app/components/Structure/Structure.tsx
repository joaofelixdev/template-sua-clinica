import React from 'react';
import { FaParking, FaClipboardList, FaCalendarCheck, FaXRay } from 'react-icons/fa';

import reception from "@/../public/assets/reception.png";
import Image from 'next/image';

const Structure = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto" id="structure">
      <h2 className="text-3xl font-bold mb-4 text-center">Ambiente moderno, acolhedor e preparado para te receber bem</h2>
      <p className="text-center mb-8">
        Nossa estrutura foi pensada para garantir conforto, praticidade e qualidade em cada detalhe do seu atendimento.
      </p>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <Image src={reception} alt="Recepção" className="w-full h-auto rounded-lg" />
        </div>
        <div className="flex-1">
          <p className="mb-4">
            Na Sua Clínica, aliamos tecnologia médica com uma experiência acolhedora desde a entrada. Nossos ambientes são planejados para tornar sua consulta mais leve e tranquila — com equipamentos modernos e equipe pronta para te atender.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <FaParking size={24} />
              <span>Estacionamento no local</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClipboardList size={24} />
              <span>Atendimento por convênios e particular</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarCheck size={24} />
              <span>Agendamento online</span>
            </div>
            <div className="flex items-center gap-2">
              <FaXRay size={24} />
              <span>Exames no próprio local</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✅</span>
              <span>ISO 9001</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✅</span>
              <span>Ambiente climatizado</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✅</span>
              <span>Wi-Fi gratuito</span>
            </div>
          </div>
          <div className="mt-8 text-center">
            <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">+4.000 atendimentos realizados em 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Structure;