"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 5000);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    resetTimer();
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
    resetTimer();
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full md:h-[900px] h-[700px] bg-customGreen flex items-center justify-center text-customBlue relative">
      <div className="bg-customGray xl:w-[1000px] lg:h-[290px] lg:w-[700px] md:w-[680px] md:h-[240px] w-[350px] h-[205px] text-3xl p-6 pl-[10%] pr-[20%] relative md:mt-0 mt-12 rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="absolute top-[-50px] left-[10px] lg:left-[40px] xl:left-[70px] text-7xl xl:text-8xl p-2"
          >
            {slides[currentIndex].number}
          </motion.div>
        </AnimatePresence>
        <div className="xl:w-[400px] lg:w-[320px] md:w-[290px] w-[270px]">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentIndex}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="lg:text-4xl md:text-3xl text-2xl font-bold"
            >
              {slides[currentIndex].name}
            </motion.h1>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.h2
              key={currentIndex}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className={
                currentIndex === 2
                  ? "lg:text-xl md:text-lg text-xs"
                  : "lg:text-2xl md:text-xl text-sm"
              }
            >
              {slides[currentIndex].description}
              {currentIndex === 0 && (
                <ul className="list-disc list-inside pl-8">
                  <li>Professionalità</li>
                  <li>Strategia</li>
                  <li>Skills</li>
                </ul>
              )}
            </motion.h2>
          </AnimatePresence>
        </div>
      </div>
      <div
        className="bg-customGray xl:h-[450px] xl:w-[450px] 
          lg:h-[360px] lg:w-[360px] md:h-[320px] md:w-[320px] h-[205px] w-[205px] 
          absolute rounded-full md:translate-x-3/4  
          xl:top-[210px] lg:top-[260px] md:top-[290px] top-[90px] flex justify-center items-center"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={slides[currentIndex].image}
            alt="Carousel Image"
            className="xl:h-[70%] xl:w-[70%] h-[70%] w-[70%] object-cover"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-4 sm:top-1/2 transform -translate-y-1/2 top-[550px] hover:bg-white p-2 rounded-full"
      >
        <IoIosArrowBack className="text-5xl hover:text-customBlue" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 sm:top-1/2 transform -translate-y-1/2 top-[550px] hover:bg-white p-2 rounded-full "
      >
        <IoIosArrowForward className="text-5xl hover:text-customBlue" />
      </button>
    </div>
  );
};

export default Carousel;
