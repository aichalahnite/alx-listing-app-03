import React from 'react';
import { CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, image, description }) => (
  <div className="border rounded-md shadow-md p-4">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded" />
    <h2 className="text-lg font-semibold mt-2">{title}</h2>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default Card;
