import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';
import DinoCard from '../component/DinoCart';
import dinosaurs from '../data/dinodata.json';

const Home = () => {
  const [filteredDinosaurs, setFilteredDinosaurs] = useState(dinosaurs);
  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
    const filtered = dinosaurs.filter(dino =>
      dino.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDinosaurs(filtered);
  };

  const navigateToQuiz = () => {
    navigate('/quiz');
  };

  const navigateToContinent = () => {
    navigate('/continent');
  };
  const navigateToHabitat =()=>{
    navigate('/habitat')
  }
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-900 to-gray-700">
      <Header title="DinoWorld" onSearch={handleSearch} />
      <main className="flex-grow p-8">
        <h2 className="text-5xl font-bold mb-4 text-white text-center drop-shadow-lg">Chào mừng bạn đến với web DinoWorld</h2>
        <p className="mb-8 text-center text-white text-lg drop-shadow-lg">Khám phá thông tin khủng long khổng lồ với ngoại hình, môi trường sống của chúng, v.v.</p>
        
        <div className="mb-8 flex justify-center">
          <input 
            type="text" 
            placeholder="🔍 Tìm kiếm khủng long..." 
            onChange={(e) => handleSearch(e.target.value)}
            className="p-3 w-1/3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
          />
        </div>
        <div className="flex justify-center mb-8">
          <button
            onClick={navigateToQuiz}
            className="px-8 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition transform hover:scale-105 shadow-xl"
          >
            Test
          </button>
          <button
            onClick={navigateToContinent}
            className="ml-4 px-8 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition transform hover:scale-105 shadow-xl"
          >
            Lục địa
          </button>
          <button
            onClick={navigateToHabitat}
            className="ml-4 px-8 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition transform hover:scale-105 shadow-xl"
          >
            Môi trường
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDinosaurs.map(dino => (
            <DinoCard
              key={dino.id}
              dino={dino}
              className="transition transform hover:scale-105"
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
