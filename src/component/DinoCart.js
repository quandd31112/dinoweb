import React from 'react';
import { Link } from 'react-router-dom';

const DinoCard = (props) => {
  const dino = props.dino;
  return(
  <div className="border border-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gray-900 text-white">
    <Link to={`/dino/${dino.id}`}>
      <img
        src={dino.image_url}
        alt={dino.name}
        className="w-full h-48 object-cover rounded-t-lg transition-transform transform hover:scale-105 cursor-pointer"
      />
    </Link>
    <div className="p-4">
      <h3 className="text-xl font-bold mt-2">{dino.name}</h3>
      <p className="text-white">
        {dino.description.length > 100 
          ? `${dino.description.slice(0, 100)}...` 
          : dino.description}
      </p>
      <p className="text-white"><strong>Môi trường sống:</strong> {dino.habitat}</p>
    </div>
  </div>);
};

export default DinoCard;
