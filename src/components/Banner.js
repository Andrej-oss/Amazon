import Image from 'next/image';
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Banner(props) {
  return (
      <div className='relative'>
        <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent z-20 bottom-0'/>
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={10000}
        >
          <div>
            <img loading={"lazy"} src='https://links.papareact.com/gi1'/>
          </div>
          <div>
            <img loading={"lazy"} src='https://links.papareact.com/6ff'/>
          </div>
          <div>
            <img loading={"lazy"} src='https://links.papareact.com/7ma'/>
          </div>
        </Carousel>
      </div>
  );
}

export default Banner;