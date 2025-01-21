"use client";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="relative p-4 md:h-[90vh] h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/bigMeeting.png')" }}
    >
      <div className="absolute inset-0 bg-white opacity-50 blur-lg"></div>
      <div className="relative z-10 flex text-2xl items-center justify-end">
        <div className="flex space-x-4 md:text-base lg:text-2xl text-xs">
          <button
            className="bg-transparent text-customBlue px-4 py-2 rounded-lg uppercase underline"
            onClick={() => scrollToSection("team-section")}
          >
            Il team
          </button>
          <button
            className="bg-transparent text-customBlue px-4 py-2 rounded-lg uppercase underline"
            onClick={() => scrollToSection("necessities")}
          >
            Il Nostro servizio per noi
          </button>
          <button
            className="bg-transparent text-customBlue px-4 py-2 rounded-lg uppercase underline"
            onClick={() => scrollToSection("invest")}
          >
            Investi nella tua azienda
          </button>
        </div>
      </div>
      <div className="relative z-10 flex flex-col text-end">
        <h1 className="bg-transparent text-customBlue px-4 py-2 rounded-lg uppercase font-bold xl:text-8xl md:text-7xl text-5xl pt-8">
          H-Revolution
        </h1>
        <h2 className="bg-transparent text-customBlue px-4 py-2 rounded-lg uppercase font-bold md:text-3xl text-2xl pt-8">
          ELEVATE YOUR BUSINESS WITH US
        </h2>
      </div>
      <MdKeyboardDoubleArrowDown className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-8xl text-customBlue mb-4 cursor-pointer" />
    </header>
  );
}
