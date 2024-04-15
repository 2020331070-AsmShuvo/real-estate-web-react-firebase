// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import banner from "../../../public/banner.jpg";
import beachfront from "../../../public/beachfront.jpg";
import enhanced from "../../../public/enhanced.jpg";
import islands from "../../../public/island.jpg";
import penthouse from "../../../public/penthouse.jpg";

const SwiperSlider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div id="slide1" className="carousel-item relative w-full">
            <img src={banner} className="w-full h-[740px]" />
            <div className="banner-overlay absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide5" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
            <div className="absolute top-1/2 space-y-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
              <p className="jul text-lg text-center text-gray-300">
                AGENCY AND CONTRACTOR
              </p>
              <p className=" text-5xl text-center text-gray-300 font-extrabold">
                Discover Your Dream Luxury Retreats
              </p>
              <p className="text-sm text-center font-light">
                Welcome to Luxe Haven: Your Gateway to Prestige and Exclusivity.
                Explore Iconic Penthouses, Beachfront Retreats, and Opulent
                Mansions, Redefining Luxury Living.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            id="slide2"
            className="carousel-item relative w-full bg-[#171717]"
          >
            <img src={enhanced} className="z-10 py-10 ml-20 h-[740px]" />

            <div className="text-blue absolute bottom-0 bg-black w-full h-96"></div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
            <div className="mr-20 z-10 flex items-center justify-center px-20">
              <div className="space-y-4 mt-6">
                <h1 className="text-7xl text-gray-300 font-bold phil">
                  Enhanced Living
                </h1>
                <h3 className="text-2xl text-gray-500 jul">
                  Experience with Reach
                </h3>
                <p className="text-gray-400">
                  Enhanced Living redefines luxury with unparalleled
                  sophistication and style, offering a lifestyle of opulence and
                  comfort. Our meticulously curated properties embody elegance
                  and exclusivity, providing a sanctuary where every detail is
                  crafted to perfection. Experience a new standard of refined
                  living with Enhanced Living.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={islands} className="w-full h-[740px]" />
            <div className="banner-overlay absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
            <div className="absolute top-3/4 mt-16 space-y-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
              <p className=" text-5xl text-center text-gray-300 font-extrabold phil">
                Exclusive Private Island Rentals
              </p>
              <p className="text-sm text-center font-light">
                Escape to your own private paradise with our exquisite selection
                of island retreats available for rent. Immerse yourself in
                luxury and seclusion, where azure waters and pristine beaches
                await, promising an unparalleled getaway experience unlike any
                other
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={beachfront} className="w-full h-[740px]" />
            <div className="banner-overlay absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide5" className="btn btn-circle">
                ❯
              </a>
            </div>
            <div className="absolute top-3/4 mt-16 space-y-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
              <p className="phil text-5xl text-center text-gray-400 font-extrabold">
                Exclusive Collection of Private Villas
              </p>
              <p className="text-sm text-center font-light">
                Indulge in the epitome of luxury living with our exquisite
                selection of private villas. Each villa boasts unparalleled
                elegance and sophistication, offering a secluded haven where
                luxury meets tranquility. Experience ultimate privacy and
                opulence in every corner of our meticulously crafted villas.{" "}
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="slide5" className="carousel-item relative w-full">
            <img src={penthouse} className="w-full h-[740px]" />
            <div className="banner-overlay absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
            <div className="absolute top-3/4 mt-16 space-y-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
              <p className="phil text-5xl text-center text-gray-400 font-extrabold">
                Luxurious Penthouse Rentals
              </p>
              <p className="text-sm text-center font-light">
                Indulge in the epitome of urban sophistication with our
                prestigious penthouse rentals. Offering unparalleled views and
                exquisite amenities, our penthouses redefine luxury living,
                providing an exclusive retreat in the heart of the city.{" "}
              </p>
            </div>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
