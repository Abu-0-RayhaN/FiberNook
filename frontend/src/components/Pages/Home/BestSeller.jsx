// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { products } from "../../../constants";
import Cards from "./Products/Cards";
const BestSeller = () => {
  const bestSeller = products.filter((item) => item.status === "Best Selers");

  return (
    <div className="max-w-screen-2xl container py-12 xl:px-28 px-4 pb-12">
      <div className="flex flex-col justify-center text-center items-center">
        <h1 className="title">Best Sellers</h1>
        <p className="text-gray-700 capitalize md:mx-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit saepe quibusdam beatae iure doloribus. In enim possimus
          voluptas molestias accusantium. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Blanditiis quia, iure delectus nulla
          earum aliquam.
        </p>
      </div>
      {/* best seller Product Card  */}
      <div className="mb-10">
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          slidesPerView={2}
        >
          {bestSeller.slice(0, 8).map((product) => (
            <SwiperSlide key={product.id}>
              <Cards key={product.id} product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSeller;
