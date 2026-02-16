import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Inicio } from './pages/Inicio';
import EventosPage from './pages/Eventos';
import IgrejaPage from './pages/Igreja';
import DoacaoPage from './pages/Doacao';
import DepartamentosPage from './pages/Departamentos';

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
