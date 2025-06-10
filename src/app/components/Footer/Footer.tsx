import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white px-4 py-8 mt-12 rounded-t-2xl border-t border-blue-800 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Bloco 1 - Links institucionais */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#" className="text-sm hover:underline hover:text-blue-100 transition-colors" target="_blank" rel="noopener noreferrer">Política de Privacidade</a>
          <a href="#" className="text-sm hover:underline hover:text-blue-100 transition-colors" target="_blank" rel="noopener noreferrer">Termos de Uso</a>
          <a href="#join" className="text-sm hover:underline hover:text-blue-100 transition-colors">Contato</a>
        </div>
        {/* Bloco 2 - Redes Sociais */}
        <div className="flex flex-row items-center gap-6">
          <a href="https://instagram.com/clinicainstagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-pink-300 transition-colors text-2xl">
            <FaInstagram />
          </a>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-white hover:text-green-300 transition-colors text-2xl">
            <FaWhatsapp />
          </a>
          <a href="https://facebook.com/clinicafacebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-blue-300 transition-colors text-2xl">
            <FaFacebook />
          </a>
        </div>
        {/* Bloco 3 - Copyright */}
        <div className="w-full md:w-auto text-center md:text-right mt-6 md:mt-0">
          <span className="block text-xs md:text-[12px] text-blue-100">© 2025 Sua Clínica. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}