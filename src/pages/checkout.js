import { useSession } from "next-auth/react";
import Currency from "react-currency-formatter";
import { useSelector } from "react-redux";
import { CheckoutProduct, Header, ProductCard } from "../components/index";
import Image from "next/image";
import { itemsSelector } from "../slices/basketSlice";

function Checkout(props) {
  const items = useSelector(itemsSelector);
  const {data: session} = useSession();
  console.log(session);
  const total = items.reduce((val, acc) => val + acc.price, 0);
  return (
      <div className='bg-gray-100'>
        <Header />
        <main className='lg:flex max-screen-2xl mx-auto'>
          <div className='flex-grow m-5 shadow-sm'>
            <Image
            src='https://links.papareact.com/ikj'
            height={250}
            width={1020}
            objectFit='contain'
            />
            <div className='flex flex-col p-5 space-y-10 bg-white'>
              <h1 className='text-2xl border-b pb-4'>
                {items.length ? 'Shopping Basket' : 'Your Amazon Basket is Empty'}
              </h1>
              {items && items.map(item => <CheckoutProduct product={item} key={item.id}/>)}
            </div>
          </div>

          <div className='flex flex-col shadow-md bg-white p-4'>
            {total > 0 && (
                <>
                  <h2 className='whitespace-nowrap'>Subtotal ({items.length} items):
                    <span className='font-bold'>
                      <Currency quantity={total} currency='USD' />
                    </span>
                  </h2>
                    <button className={`button mt-2 ${!session && 'button_disable'}`} disabled={!session}>
                        {session ? 'Proceed to checkout' : 'Sign in to checkout'}
                    </button>
                </>
            )}
          </div>
        </main>
      </div>
  );
}

export default Checkout;