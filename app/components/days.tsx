import DayCard from "./dayCard";
import InfoBall from "./infoBall";

export default function Days() {
  return (
    <div className="bg-customGreen  flex flex-col 2xl:flex-row py-24">
      <div className="h-full 2xl:w-[30%]  w-full flex 2xl:flex-col md:flex-row flex-col items-center justify-evenly whitespace-nowrap md:py-12">
        <InfoBall days={10} text="Giornate Formative" />
        <InfoBall days={40} text="Ore di Formazione" />
      </div>
      <div className="h-full 2xl:w-[70%] flex  items-center justify-center ">
        <DayCard
          text="Investire nella Crescita: Formazione e Fondi Professionali"
          image="/bookSchema.png"
        />
        <DayCard
          text="Academy interna: progettoformativo, docenti, materialeformativo, vedinta"
          image="/academySchema.png"
        />
      </div>
    </div>
  );
}
