import svgPaths from "../imports/svg-cuvo98uzqz";
import imgPixQrcode from "figma:asset/f67f7a25f56fe3b7098344ba3a0c74cada03c4df.png";
import { Smartphone, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export function Contribution() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // Aqui você pode adicionar a chave PIX para copiar
    navigator.clipboard.writeText('chavepix@adbelemjales.com.br');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B7355]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4C4B0]/20 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="text-[#5C4033] tracking-widest uppercase text-sm">Seja Parte</span>
          </div>
          <h2 className="text-[#5C4033] text-4xl md:text-6xl lg:text-7xl mb-8">
            CONTRIBUA COM A OBRA
          </h2>
          
          <div className="max-w-3xl mx-auto bg-[#F5F0E8] rounded-3xl p-8 md:p-10 border border-[#E8E0D5]">
            <p className="text-[#333333] text-lg md:text-2xl leading-relaxed mb-4">
              "Trazei todos os dízimos à casa do tesouro, para que haja mantimento na minha casa, e depois fazei prova de mim nisto, diz o Senhor dos Exércitos, se eu não vos abrir as janelas do céu, e não derramar sobre vós uma bênção tal até que não haja lugar suficiente para a recolherdes."
            </p>
            <p className="text-[#5C4033] text-base md:text-xl">
              Malaquias 3:10
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-center mb-10 max-w-3xl">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#8B7355] to-[#5C4033] text-white px-6 py-3 rounded-full mb-6">
              <Smartphone className="w-5 h-5" />
              <span className="text-lg">Contribua via PIX</span>
            </div>
            <h3 className="text-[#333333] text-2xl md:text-4xl leading-tight">
              Abra o app do seu banco e<br className="hidden md:block" /> escaneie o QR Code
            </h3>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-6 bg-gradient-to-r from-[#8B7355] via-[#6B5344] to-[#D4C4B0] rounded-3xl opacity-20 group-hover:opacity-30 blur-2xl transition-opacity duration-500" />
            
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-14 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
              <div className="w-72 h-72 md:w-96 md:h-96 mb-8 bg-white rounded-2xl overflow-hidden shadow-inner">
                <img 
                  alt="PIX QR Code" 
                  className="w-full h-full object-contain p-4"
                  src={imgPixQrcode} 
                />
              </div>
              
              <div className="text-center space-y-4">
                <svg className="w-full max-w-md mx-auto" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 608 59">
                  <g>
                    <path d={svgPaths.p2c3f400} fill="white" />
                    <path d={svgPaths.p4a87c00} fill="white" />
                    <path d={svgPaths.p4c88800} fill="white" />
                    <path d={svgPaths.pd44b100} fill="white" />
                    <path d={svgPaths.p3bcb1b80} fill="white" />
                    <path d={svgPaths.p2924f300} fill="white" />
                    <path d={svgPaths.p332f6000} fill="white" />
                    <path d={svgPaths.p22717e00} fill="white" />
                    <path d={svgPaths.pb8f4680} fill="white" />
                    <path d={svgPaths.p20895a00} fill="white" />
                    <path d={svgPaths.p185ff700} fill="white" />
                    <path d={svgPaths.p39a400} fill="white" />
                    <path d={svgPaths.p3af3eb00} fill="white" />
                    <path d={svgPaths.p2bc65000} fill="white" />
                    <path d={svgPaths.p1312ff80} fill="white" />
                    <path d={svgPaths.p31696600} fill="white" />
                    <path d={svgPaths.p34c9e550} fill="white" />
                    <path d={svgPaths.p3e558880} fill="white" />
                    <path d={svgPaths.p5f39c70} fill="white" />
                    <path d={svgPaths.p3379c980} fill="white" />
                    <path d={svgPaths.p2c469300} fill="white" />
                    <path d={svgPaths.p33c22d40} fill="white" />
                  </g>
                </svg>
                
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Chave Copiada!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copiar Chave PIX</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Additional payment methods could go here */}
          <div className="mt-12 text-center">
            <p className="text-[#666666] text-base md:text-lg">
              Sua contribuição ajuda a manter e expandir a obra de Deus
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
