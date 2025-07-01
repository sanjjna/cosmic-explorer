// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SolarSystem from './pages/SolarSystem';
import Missions from './pages/Missions';
import BlackHoles from './pages/BlackHoles';
import Training from './pages/Training';

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solar-system" element={<SolarSystem />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/black-holes" element={<BlackHoles />} />
        <Route path="/training" element={<Training />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
