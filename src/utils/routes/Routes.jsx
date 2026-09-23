import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import NossosServiços from '../../pages/NossosServiços'


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/nossosServiços" element={<NossosServiços />} />
      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;