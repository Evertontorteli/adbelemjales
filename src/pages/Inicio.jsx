import { Footer } from '../components/Footer.jsx';
import { Apresentacao } from '../components/inicio/Apresentacao.jsx';
import { MuralOracoes } from '../components/inicio/MuralOracoes.jsx';
import { Pastor } from '../components/Pastor.jsx';
import { RedesSociais } from '../components/inicio/RedesSociais.jsx';
import { Igreja } from '../components/igreja/Igreja.jsx';

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
