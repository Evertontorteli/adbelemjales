import { Smartphone, Copy, Check, Building2 } from 'lucide-react';
import { useState } from 'react';

// Imagem do PIX: coloque qrcode_pix.png na pasta static/ para exibir o QR Code
const PIX_QRCODE_SRC = '/qrcode_pix.png';

const PIX_KEY_CNPJ = '53.218.798/0001-09';
const BANCO_AGENCIA = '0614';
const BANCO_CONTA = '27620-2';
const BANCO_NOME = 'Itaú';

export function Doacoes() {
  const [copiedPix, setCopiedPix] = useState(false);
  const [copiedBanco, setCopiedBanco] = useState(false);

  const copyPix = () => {
    navigator.clipboard.writeText(PIX_KEY_CNPJ);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2000);
  };

  const copyBanco = () => {
    navigator.clipboard.writeText(`Banco: ${BANCO_NOME}\nAgência: ${BANCO_AGENCIA}\nConta: ${BANCO_CONTA}`);
    setCopiedBanco(true);
    setTimeout(() => setCopiedBanco(false), 2000);
  };

  const cardShadow =
    'rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300';
  const cardLight = `${cardShadow} bg-white border border-[#e5e7eb]/80`;

  return (
    <section
      id="doacoes"
      className="py-16 md:py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-gray-100 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#6b7280]/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4b5563]/5 rounded-full blur-3xl" />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <span className="text-[#374151] tracking-widest uppercase text-sm font-medium">Seja Parte</span>
          <h2 className="text-[#374151] text-3xl md:text-5xl mt-2 mb-8 font-semibold tracking-tight">
            DOAÇÕES
          </h2>
          <div
            className={`max-w-2xl mx-auto border border-[#e5e7eb]/80 bg-white/90 backdrop-blur-sm ${cardShadow}`}
          >
            <p className="text-[#374151] text-base md:text-lg leading-relaxed mb-3">
              "Trazei todos os dízimos à casa do tesouro, para que haja mantimento na minha casa, e depois fazei prova de mim nisto, diz o Senhor dos Exércitos."
            </p>
            <p className="text-[#374151] text-sm md:text-base font-medium">Malaquias 3:10</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch max-w-4xl mx-auto">
          <div
            className={`flex flex-col ${cardShadow} overflow-hidden bg-gradient-to-br from-[#4b5563] to-[#4b5563] border border-[#4b5563]/30 p-0`}
          >
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <div className="inline-flex items-center gap-2 text-white/90 mb-6">
                <Smartphone className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wider">PIX</span>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="w-44 h-44 md:w-52 md:h-52 mb-6 bg-white rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                  <img
                    alt="PIX QR Code"
                    className="w-full h-full object-contain p-3"
                    src={PIX_QRCODE_SRC}
                  />
                </div>
                <p className="text-white/95 text-sm font-mono mb-4 break-all text-center">{PIX_KEY_CNPJ}</p>
                <button
                  type="button"
                  onClick={copyPix}
                  className="inline-flex items-center gap-2 bg-white/95 hover:bg-white text-[#374151] px-5 py-2.5 rounded-xl transition-all text-sm font-medium shadow-md hover:shadow-lg active:scale-[0.98]"
                >
                  {copiedPix ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copiar chave PIX
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className={`flex flex-col ${cardLight}`}>
            <div className="inline-flex items-center gap-2 text-[#374151] mb-6">
              <Building2 className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Conta bancária</span>
            </div>
            <h3 className="text-xl font-semibold text-[#374151] mb-5">Conta Itaú</h3>
            <dl className="space-y-4 text-[#374151] flex-1">
              <div className="rounded-xl bg-[#f3f4f6]/80 p-4 border border-[#e5e7eb]/60">
                <dt className="text-xs uppercase tracking-wider text-[#374151] mb-1">Agência</dt>
                <dd className="font-mono font-semibold text-lg">{BANCO_AGENCIA}</dd>
              </div>
              <div className="rounded-xl bg-[#f3f4f6]/80 p-4 border border-[#e5e7eb]/60">
                <dt className="text-xs uppercase tracking-wider text-[#374151] mb-1">Conta</dt>
                <dd className="font-mono font-semibold text-lg">{BANCO_CONTA}</dd>
              </div>
            </dl>
            <button
              type="button"
              onClick={copyBanco}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-[#e5e7eb] bg-[#f3f4f6] px-5 py-2.5 text-sm font-medium text-[#374151] transition-all shadow-sm hover:bg-[#e5e7eb] hover:shadow-md active:scale-[0.98]"
            >
              {copiedBanco ? (
                <>
                  <Check className="w-4 h-4" />
                  Copiado!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copiar dados da conta
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
