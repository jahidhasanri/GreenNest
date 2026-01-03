import { FaArrowDown } from "react-icons/fa6";
const Banner = () => {
  return (
    <div
      className="h-[90vh] w-full bg-cover bg-bottom bg-no-repeat"
      style={{ backgroundImage: "url('/images/home-hero-cover-image_optimized.webp')" }}
    >
         <div className="absolute inset-0 bg-black/5"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center">
        <h5 className="text-[#5a8139] font-semibold text-[18px] mb-2">New Collection</h5>
        <h1 className="w-175 font-bold text-white text-[70px] text-center mx-auto leading-tight xl:mb-10">Beautiful Plants For Your Interior</h1>
        <h4 className="lg:w-136 text-white text-[18px] text-center mx-auto">Bring the calming beauty of nature into your home with plants that refresh your space, purify the air, and create a peaceful environment.</h4>
        <button className="flex items-center justify-center mt-13 gap-2 bg-[#5a8139] hover:bg-[#5b8139d7]  text-white w-43.75 h-15 text-sm sm:text-base ">
          EXPLORE <FaArrowDown />
        </button>
      </div>
    </div>
  );
};

export default Banner;
