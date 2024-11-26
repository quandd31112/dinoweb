// SearchResults.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';
import DinoCard from '../component/DinoCart';
import dinosaurs from '../data/dinodata.json';

const SearchResults = () => {
  const query = new URLSearchParams(useLocation().search).get('query');
  const filteredDinosaurs = dinosaurs.filter(dino => 
    dino.name.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Kết quả tìm kiếm" onSearch={() => {}} />
      <main className="flex-grow p-8">
        <h2 className="text-2xl font-bold mb-4">Kết quả tìm kiếm cho: <span className="text-blue-600">{query}</span></h2>
        <div className="grid grid-cols-2 gap-4">
          {filteredDinosaurs.length > 0 ? (
            filteredDinosaurs.map(dino => (
              <DinoCard key={dino.id} dino={dino} />
            ))
          ) : (
            <p className="text-red-600">Không tìm thấy khủng long nào.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default SearchResults;
