import { SearchIcon, MenuIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import Image from "next/image";

function Header(props) {
  return (
      <header>
        <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
          <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
            <Image
                src="https://links.papareact.com/f90"
                width={150}
                height={40}
                objectFit="contain"
                className="cursor-pointer"
            />
          </div>
          <div className='hidden sm:inline-flex h-10 rounded-md bg-yellow-400
           flex items-center flex-grow hover:bg-yellow-500 cursor-pointer'>
            <input type="text" className='outline-none p-2 h-full flex-grow flex-shrink rounded-l-md px-4'/>
            <SearchIcon className='h-12 p-4'/>
          </div>
          <div className='flex items-center space-x-6 text-white text-xs whitespace-nowrap ml-4 mr-2'>
            <div className='link'>
              <p>Hello Andrii</p>
              <p className='font-extrabold md:text-sm'>Account & List</p>
            </div>
            <div className='link'>
              <p>Returns</p>
              <p className='font-extrabold md:text-sm'>& Orders</p>
            </div>
            <div className='link relative flex items-center'>
              <span className='absolute top-0 right-0 md:right-10 h-4 w-4 text-black font-bold
               bg-yellow-400 rounded-full text-center'>
                0
              </span>
              <ShoppingCartIcon className='h-10'/>
              <p className='hidden sm:inline-flex font-extrabold md:text-sm mt-2'>Basket</p>
            </div>
          </div>
        </div>

        <div className='flex items-center space-x-4 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
          <p className='flex items-center link'>
            <MenuIcon className='h-6 mr-1'/>
            All
          </p>
          <p className='link'>Prime video</p>
          <p className='link'>Amazon business</p>
          <p className='link'>Today's Deals</p>
          <p className='link hidden md:inline-flex'>Food & Grocery</p>
          <p className='link hidden md:inline-flex'>Prime</p>
          <p className='link hidden md:inline-flex'>Buy Again</p>
          <p className='link hidden md:inline-flex'>Shopper Toolkit</p>
          <p className='link hidden md:inline-flex'>Heals & Personal Care</p>
        </div>
      </header>
  );
}

export default Header;