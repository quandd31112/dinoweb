import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';
import dinosaurs from '../data/dinodata.json';
const DinoDetail = () => {
  const { id } = useParams();
  const dinosaur = dinosaurs.find(dino => dino.id === parseInt(id));
  console.log("ID:", id);
  console.log("Dinosaur:", dinosaur);
  return (
    <div className=" flex flex-col min-h-screen bg-gradient-to-r from-gray-900 to-gray-700">
      <Header title="DinoWorld"/>
      <main className="flex justify-center items-center">
          <div className="bg-gray-600 w-full h-full m-10 rounded-xl shadow-lg flex">
            <div className="flex-1 p-4">
            <h2 className="text-4xl font-bold mb-6 text-red-300">{dinosaur.name}</h2>
              <p className="text-white font-semibold"><strong>Môi trường sống:</strong> <span className="text-white">{dinosaur.habitat}</span></p>
              <p className="text-white font-semibold"><strong>Thời gian:</strong> <span className="text-white">{dinosaur.time_period}</span></p>
              <p className="text-white font-semibold"><strong>Kích thước:</strong> <span className="text-white">{dinosaur.size}</span></p>
              <p className="text-white font-semibold"><strong>Chế độ ăn uống:</strong> <span className="text-white">{dinosaur.diet}</span></p>
              <p className="text-white font-semibold"><strong>Đặc điểm nổi bật:</strong> <span className="text-white">{dinosaur.features}</span></p>
              <p className="text-white font-semibold"><strong>Lục địa:</strong> <span className="text-white">{dinosaur.continent}</span></p>
            </div>
            <div className="ml-6 m-2 p-1">
              <img 
              src={dinosaur.image_url} 
              alt={dinosaur.name} 
              className="w-auto h-[500px] object-cover rounded-lg" 
            />   
            </div>
          </div>
          
      </main>
      <Footer />
    </div>
  );
};
export default DinoDetail;
