import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';
import dinosaurs from '../data/dinodata.json';
import DinoCard from '../component/DinoCart';

const Habitat = () => {
  const [selectedHabitat, setSelectedHabitat] = useState(null);
  const [filteredDinosaurs, setFilteredDinosaurs] = useState(dinosaurs);
  const habitats = [...new Set(dinosaurs.map(dino => dino.habitat))];
  const filteredDinosaursByHabitat = selectedHabitat
    ? dinosaurs.filter(dino => dino.habitat === selectedHabitat)
    : dinosaurs;

  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
    const filtered = dinosaurs.filter(dino =>
      dino.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDinosaurs(filtered);
  };
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-900 to-gray-700">
      <Header title="DinoWorld" onSearch={handleSearch} />
      <main className="flex-grow p-8">
        <h2 className="text-5xl font-bold mb-4 text-white text-center drop-shadow-lg">Chọn môi trường sống</h2>
        <div className="mb-4 flex justify-center">
          <input 
            type="text" 
            placeholder="🔍 Tìm kiếm khủng long..." 
            onChange={(e) => handleSearch(e.target.value)}
            className="p-3 w-1/3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-800 text-white placeholder-gray-400"
          />
        </div>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {habitats.map(habitat => (
            <button
              key={habitat}
              onClick={() => setSelectedHabitat(habitat)}
              className={`px-6 py-3 text-white rounded-lg transition duration-300 transform hover:scale-105 shadow-lg ${
                selectedHabitat === habitat ? 'bg-blue-600 text-white' : 'bg-blue-500 hover:bg-blue-500'
              }`}
            >
              {habitat}
            </button>
          ))}
          <button
            onClick={() => setSelectedHabitat(null)}
            className="px-6 py-3 text-white rounded-lg bg-blue-500 hover:bg-blue-300 transition transform hover:scale-105"
          >
            Tất cả
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDinosaursByHabitat
            .filter(dino => filteredDinosaurs.includes(dino)) 
            .map(dino => (
              <DinoCard key={dino.id} dino={dino} />
            ))}
          {filteredDinosaurs.length === 0 && (
            <p className="text-red-600 text-center mt-4">Không tìm thấy khủng long.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Habitat;
