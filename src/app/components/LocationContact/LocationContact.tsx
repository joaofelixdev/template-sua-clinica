import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const LocationContact = () => {
    return (
        <section className="py-16 px-4 max-w-6xl mx-auto" id="contact">
            <h2 className="text-2xl font-bold mb-4 text-center">Encontre a Sua Clínica com facilidade</h2>
            <p className="text-center mb-8">Estamos localizados em uma região de fácil acesso, com estrutura para te receber com conforto.</p>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="w-full md:w-1/2">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509364!2d144.95373631531676!3d-37.81627997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1e5d1f1f1f1!2sClinic!5e0!3m2!1sen!2sau!4v1633046400000!5m2!1sen!2sau"
                        width="100%"
                        height="300"
                        style={{ border: 0, borderRadius: '0.5rem' }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Clinic Location"
                    ></iframe>
                </div>
                <div className="w-full md:w-1/2 mt-8 md:mt-0">
                    <div className="text-sm mb-4 flex items-center">
                        <MapPin className="mr-2" />

                        <div className='flex flex-col'>
                            <span className='text-xs font-semibold'>Endereço:</span>
                            <span className='text-md'>Rua Exemplo, 123 – Bairro Central, São Paulo – SP, CEP 01234-000</span>
                        </div>
                    </div>
                    <div className="text-sm mb-4 flex items-center">
                        <Phone className="mr-2" />

                        <div className='flex flex-col'>
                            <span className='text-xs font-semibold'>WhatsApp:</span>
                            <a
                                href="https://wa.me/5511999999999"
                                className="text-blue-600 font-semibold"
                            >
                                (11) 99999-9999
                            </a>
                        </div>
                    </div>
                    <div className="text-sm mb-4 flex items-center">
                        <Phone className="mr-2" />

                        <div className='flex flex-col'>
                            <span className='text-xs font-semibold'>Telefone:</span>
                            <span className='text-md'>(11) 91234-5678</span>
                        </div>

                    </div>
                    <div className="text-sm mb-4 flex items-center">
                        <Mail className="mr-2" />

                        <div className='flex flex-col'>
                            <span className='text-xs font-semibold'>Email:</span>
                            <a
                                href="mailto:contato@suaclinica.com.br"
                                className="text-blue-600 font-semibold"
                            >
                                contato@suaclinica.com.br
                            </a>
                        </div>
                    </div>
                    <div className="text-sm flex items-center">
                        <Clock className="mr-2" />

                        <div>
                            <span className='text-xs font-semibold'>Horário de atendimento:</span>
                            <ul>
                                <li>Segunda a Sexta - das 08h às 18h</li>
                                <li>Sábados - das 08h às 12h</li>
                            </ul>
                        </div>
                    </div>
                    <a
                        href="#about"
                        className="mt-4 w-44 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition font-extralight flex gap-2 items-center justify-center"
                    >
                        Agendar consulta
                    </a>
                </div>
            </div>
        </section>
    );
};

export default LocationContact;