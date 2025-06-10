'use client'

import { Info, Users, Building2, Mail } from "lucide-react";
import { useEffect, useState } from "react";

import logoSuaClinica from "@/../public/assets/logotipo.png"
import Image from "next/image";

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função para rolagem suave
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  return (
    <header className={`w-full flex items-center justify-between px-6 py-4 rounded-xl z-50 transition-all duration-300 ${isFixed ? 'fixed top-0 left-0 bg-white animate-slideDown' : 'mt-4'}`}>
      <div className="flex items-center gap-2">
        <Image src={logoSuaClinica} alt="SuaClínica" className="w-36" />
      </div>
      <nav className={`hidden md:flex gap-2 text-gray-700 font-medium bg-white rounded-full px-2 py-1 ${!isFixed && 'shadow-sm'}`}>
        <a href="#about" onClick={handleSmoothScroll} className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 group">
          <Info size={18} className="text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
          Sobre
        </a>
        <a href="#specialties" onClick={handleSmoothScroll} className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 group">
          <Users size={18} className="text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
          Especialidades
        </a>
        <a href="#structure" onClick={handleSmoothScroll} className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 group">
          <Building2 size={18} className="text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
          Estrutura
        </a>
        <a href="#contact" onClick={handleSmoothScroll} className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 group">
          <Mail size={18} className="text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
          Contato
        </a>
      </nav>
      <a href="#join" className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Agendar consulta</a>
    </header>
  )
}