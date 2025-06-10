"use client";
import { useState } from "react";

export default function Warning() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 sm:right-4 sm:left-auto max-w-full sm:max-w-md md:max-w-lg rounded-2xl bg-blue-100 text-blue-900 p-4 shadow-lg text-sm">
      <div className="relative pr-6">
        <button
          onClick={() => setVisible(false)}
          className="absolute top-0 right-0 text-blue-700 hover:text-blue-900 transition text-xl leading-none"
          aria-label="Fechar aviso"
        >
          &times;
        </button>
        <p className="font-semibold mb-1">
          🔔 Este é apenas um template de demonstração!
        </p>
        <p className="mb-2">
          Gostou do design? Ele pode ser adaptado para o seu negócio.
        </p>
        <a
          href="https://joaofelix.dev#contact"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-400 text-white font-semibold px-3 py-1 rounded hover:bg-blue-500 transition"
        >
          Fale comigo
        </a>
      </div>
    </div>
  );
}
