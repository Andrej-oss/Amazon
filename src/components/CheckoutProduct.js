import { StarIcon } from "@heroicons/react/solid";
import Image from 'next/image';
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({product}) {
  const {
    id,
    title,
    price,
    description,
    category,
    image,
    hasPrime,
    rating
  } = product;

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket(product));
  }

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket(product.id));
  }

  return (
      <div className="grid grid-cols-5">
        <Image src={image} height={200} width={200} objectFit="contain"/>
        <div className="col-span-3 mx-5">
          <p>{title}</p>
          <div className="flex">
            {Array(rating).fill().map(value => <StarIcon key={value} className="text-yellow-500 h-5"/>)}
          </div>
          <p className="text-xs my-2 line-clamp-3">{description}</p>
          <Currency quantity={price} currency="USD"/>
          {hasPrime && (
              <div className="flex items-center space-x-3">
                <Image src="https://links.papareact.com/fdw"
                       objectFit="contain"
                       width={40} height={60}/>
                <p className="text-xs text-gray-500">FREE Next-Day Delivery</p>
              </div>
          )}
        </div>
        <div className="flex flex-col space-y-3 my-auto justify-self-end">
          <button onClick={addItemToBasket} className="button">Add to Basket</button>
          <button onClick={removeItemFromBasket} className="button">Remove from Basket</button>
        </div>
      </div>
  );
}

export default CheckoutProduct;