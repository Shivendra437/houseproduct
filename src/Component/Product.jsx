import React from 'react';
import Room from './Room';

export default function Product() {
  let iteams = [
    {
      id: 1,
      name: 'queen panel bed',
      type: 'Household',
      price: 2500,
      rating: 4,
      image: './images/product-1.jpeg',
    },

    {
      id: 2,
      name: 'king panel bed',
      type: 'Household',
      price: 3000,
      rating: 3,
      image: "./images/product-2.jpeg",
    },
    {
      id: 3,
      name: 'single panel bed',
      type: 'Household',
      price: 2200,
      rating: 5,
      image: './images/product-3.jpeg',
    },
    {
      id: 4,
      name: 'twin panel bed',
      type: 'Household',
      price: 2800,
      rating: 4,
      image: './images/product-4.jpeg',
    },
    {
      id: 5,
      name: 'fridge',
      type: 'Kitchen',
      price: 1880,
      rating: 2,
      image: './images/product-5.jpeg',
    },
    {
      id: 6,
      name: 'dresser',
      type: 'furniture',
      price: 3200,
      rating: 3,
      image: './images/product-6.jpeg',
    },
    {
      id: 7,
      name: 'Coombes',
      type: 'Lounge',
      price: 4500,
      rating: 5,
      image: './images/product-7.jpeg',
    },
    {
      id: 8,
      name: 'Keeve Set',
      type: 'Tables & Chairs',
      price: 1300,
      rating: 4,
      image: './images/product-8.jpeg',
    },
  ];

  return (
    <>
      {iteams.map((el) => {
        return (
          <Room
            key={el.id}
            names={el.name}
            type={el.type}
            price={el.price}
            rating={el.rating}
            images={el.image}
          />
        );
      })}
    </>
  );
}
