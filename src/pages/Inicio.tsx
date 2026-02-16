import { Footer } from '../components/Footer';
import { Apresentacao } from '../components/inicio/Apresentacao';
import { MuralOracoes } from '../components/inicio/MuralOracoes';
import { Pastor } from '../components/Pastor';
import { RedesSociais } from '../components/inicio/RedesSociais';
import { Igreja } from '../components/igreja/Igreja';

/**
 * Página principal - AD Belém Jales.
 * Eventos, Doação e Departamentos ficam apenas nas suas próprias páginas (/eventos, /doacao, /departamentos).
 */
export function Inicio() {
  return (
    <div className="bg-white pb-32 lg:pb-24">
      <Apresentacao />
      <div id="pastor">
        <Pastor />
      </div>
      <MuralOracoes />
      <RedesSociais />
      <Igreja />
      <Footer />
    </div>
  );
}
