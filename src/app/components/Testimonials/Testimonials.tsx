import React from 'react';

const testimonials = [
  {
    text: "Me senti acolhido desde a recepção até a consulta. Recomendo demais!",
    author: "Fernanda, 29 anos",
    image: "/assets/testimonials/fernanda.avif"
  },
  {
    text: "Marquei online e fui super bem atendido. Ótima estrutura.",
    author: "Rodrigo, 45 anos",
    image: "/assets/testimonials/rodrigo.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto" id="testimonials">
      <h2 className="text-2xl font-bold mb-8 text-center">Depoimentos de pacientes</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow flex gap-6 items-center">
            <img src={testimonial.image} alt={testimonial.author} className="w-20 h-20 rounded-full object-cover" />
            <div>
                <p className="text-gray-700 mb-2">"{testimonial.text}"</p>
                <p className="text-gray-500 text-sm">— {testimonial.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}