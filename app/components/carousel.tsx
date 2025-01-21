"use client";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface CarouselProps {
  slides: {
    number: number;
    name: string;
    description: string;
    image: string;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full md:h-[900px] h-[700px] bg-customGreen flex items-center justify-center text-customBlue relative">
      <div className="bg-customGray xl:w-[1000px] lg:h-[300px] lg:w-[900px] md:w-[680px] md:h-[240px] w-[350px] h-[185px] text-3xl p-6 pl-[10%] pr-[20%] relative md:mt-0 mt-12">
        <div className="absolute top-[-50px] left-[10px] lg:left-[40px] xl:left-[70px] text-7xl xl:text-8xl p-2">
          {slides[currentIndex].number}
        </div>
        <div className="xl:w-[400px] lg:w-[380px] w-[300px]">
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold">
            {slides[currentIndex].name}
          </h1>
          <h2 className="lg:text-2xl md:text-xl text-sm">
            {slides[currentIndex].description}
            {currentIndex === 0 ? (
              <ul className="text-sm md:text-lg lg:text-xl xl:text-2xl list-disc pl-8 py-3">
                <li>Professionalità</li>
                <li>Strategia</li>
                <li>Skills</li>
              </ul>
            ) : (
              ""
            )}
          </h2>
        </div>
      </div>
      <div
        className="bg-customGray xl:h-[500px] xl:w-[500px] 
          lg:h-[420px] lg:w-[420px] md:h-[320px] md:w-[320px] h-[205px] w-[205px] 
          absolute rounded-full md:translate-x-3/4  
          xl:top-[180px] lg:top-[240px] md:top-[290px] top-[90px] flex justify-center items-center"
      >
        <img
          src={slides[currentIndex].image}
          alt="Carousel Image"
          className="xl:h-[70%] xl:w-[70%] h-[70%] w-[70%] object-cover"
        />
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 hover:bg-white p-2 rounded-full"
      >
        <IoIosArrowBack className="text-5xl hover:text-customBlue" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:bg-white p-2 rounded-full"
      >
        <IoIosArrowForward className="text-5xl hover:text-customBlue" />
      </button>
    </div>
  );
};

export default Carousel;
