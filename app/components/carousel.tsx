"use client";
import { useState } from "react";

interface CarouselProps {
  images: string[]; // Array of image URLs
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <div className="w-full md:h-[90vh] h-[70vh] bg-customGreen flex items-center justify-center text-customBlue relative">
      <div className="bg-customGray xl:w-[1000px]  lg:h-[300px] lg:w-[900px] md:w-[680px] md:h-[240px] w-[350px] h-[185px] text-3xl p-6 pl-[10%] pr-[20%] relative md:mt-0 mt-12">
        <div className="absolute top-[-50px] left-[10px] lg:left-[40px] xl:left-[70px] text-7xl xl:text-8xl p-2 ">
          1
        </div>
        <div className="xl:w-[500px] lg:w-[380px] w-[300px]">
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold">
            Francesco Rizzato
          </h1>
          <h2 className="lg:text-2xl md:text-xl text-sm">
            Consulente del lavoro HR Manager Vi accompagnerà in questo percorso
            garantendovi:
          </h2>
        </div>
        <ul className="list-disc pl-14 lg:text-2xl md:text-xl text-sm">
          <li>Professionalità</li>
          <li>Strategia</li>
          <li>Skils</li>
        </ul>
      </div>
      <div
        className="bg-customGray xl:h-[500px] xl:w-[500px] 
          lg:h-[420px] lg:w-[420px] md:h-[320px] md:w-[320px] h-[205px] w-[205px] 
          absolute rounded-full md:translate-x-3/4  
          xl:top-[180px] lg:top-[220px] md:top-[260px] top-[80px] flex justify-center items-center"
      >
        <img
          src={images[currentIndex]}
          alt="Carousel Image"
          className="xl:h-[70%] xl:w-[70%] h-[70%] w-[70%] object-cover"
        />
      </div>
    </div>
  );
};

export default Carousel;
