import { ProductCard } from "./index";
import Image from "next/image";

function ProductFeed({ products }) {
  return (
      <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
       md:-mt-32 lg:-mt-42 xl:-mt-52 mx-auto'>
        {products && products.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product}/>
        ))}
        <img className='md:col-span-full'
               src='https://links.papareact.com/dyz' loading={'lazy'}/>
        {products && products.slice(4, products.length).map(product => (
            <ProductCard key={product.id} product={product}/>
        ))}
      </div>
  );
}

export default ProductFeed;