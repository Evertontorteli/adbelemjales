import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation.jsx';
import { Inicio } from './pages/Inicio.jsx';
import EventosPage from './pages/Eventos.jsx';
import IgrejaPage from './pages/Igreja.jsx';
import DoacaoPage from './pages/Doacao.jsx';
import DepartamentosPage from './pages/Departamentos.jsx';

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/eventos" element={<EventosPage />} />
        <Route path="/igreja" element={<IgrejaPage />} />
        <Route path="/doacao" element={<DoacaoPage />} />
        <Route path="/departamentos" element={<DepartamentosPage />} />
      </Routes>
    </BrowserRouter>
  );
}
