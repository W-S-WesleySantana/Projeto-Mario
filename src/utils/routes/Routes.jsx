
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import NossosServiços from '../../pages/NossosServiços'


function AppRoutes() {
  return (
    <HashRouter >
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/nossos-serviços" element={<NossosServiços />} />
      </Routes>

    </HashRouter>
  );
}

export default AppRoutes;

