"use client";

import { useState } from "react";
import DayCard from "./dayCard";
import InfoBall from "./infoBall";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Days() {
  const dayCards = [
    {
      text: "Investire nella Crescita: Formazione e Fondi Professionali",
      image: "/bookSchema.png",
    },
    {
      text: "Academy interna: progetto formativo, docenti, materiale formativo, vedinta",
      image: "/academySchema.png",
    },
    {
      text: "Strutturare il successo:organigrammi, mansionari eprocedure",
      image: "/meetingSchema.png",
    },
    {
      text: "Benvenuti a bordo: politiche diInserimento e Uscita",
      image: "/employeeSchema.png",
    },
    {
      text: "Amministrazione del personale: Payroll e Contrattualistica",
      image: "/hrSchema.png",
    },
    {
      text: "Prevenire e gestire: ilcontenzioso aziendale",
      image: "/scaleSchema.png",
    },
    {
      text: "Gestione del Team e benessere del personale",
      image: "/wellnessSchema.png",
    },
    {
      text: "Politica retributiva: l’efficientamento del costo del lavoro",
      image: "/savingsSchema.png",
    },
    {
      text: "Budget del personale:investire sul capitale umano",
      image: "/budgetSchema.png",
    },
    {
      text: "Budget aziendale: organizzazione di costi e investimenti aziendali",
      image: "/successSchema.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dayCards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dayCards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-customGreen flex flex-col 2xl:flex-row py-24">
      <div className="h-full 2xl:w-[30%] w-full flex 2xl:flex-col md:flex-row flex-col items-center justify-evenly whitespace-nowrap md:py-12">
        <InfoBall days={10} text="Giornate Formative" />
        <InfoBall days={40} text="Ore di Formazione" />
      </div>
      <div className="h-full 2xl:w-[70%] flex items-center justify-center relative px-8">
        <DayCard
          text={dayCards[currentIndex].text}
          image={dayCards[currentIndex].image}
        />
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent p-2 rounded-full hover:bg-gray-200"
        >
          <IoIosArrowBack className="text-5xl hover:text-customBlue" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent p-2 rounded-full hover:bg-gray-200"
        >
          <IoIosArrowForward className="text-5xl hover:text-customBlue" />
        </button>
      </div>
    </div>
  );
}
