import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";
import Currency from 'react-currency-formatter';
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

function ProductCard({product}) {
  const dispatch = useDispatch();
  const {
    id,
    title,
    price,
    description,
    category,
    image
  } = product;
  const [rating] = useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING));
  const [hasPrime] = useState(Math.random() < 0.5);

  const addItemToBasket = () => {
    dispatch(addToBasket({...product, rating, hasPrime}));
  };

  return (
      <div className="relative flex-col m-5 p-10 bg-white z-30">
        <p className="absolute top-2 right-2 text-sm text-gray-400 italic">{category}</p>
        <Image src={image} height={200} width={200} objectFit="contain"/>
        <h4 className="m-2">{title}</h4>
        <div className="flex">
          {Array(rating).fill().map(value => <StarIcon key={value} className="h-5 text-yellow-500"/>)}
        </div>
        <p className="text-xs m-2 line-clamp-2">{description}</p>
        <div>
          <Currency quantity={price} currency="USD" className='mb-5'/>
        </div>
          {hasPrime && (
              <div className='flex items-center space-x-3 -m-t-4'>
                <Image src="https://links.papareact.com/fdw"
                       objectFit='contain'
                       width={40} height={60}/>
                <p className='text-xs text-gray-500'>FREE Next-Day Delivery</p>
              </div>
          )}
        <button onClick={addItemToBasket} className="m-auto button flex-grow">add to Basket</button>
      </div>
  );
}

export default ProductCard;