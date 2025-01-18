import Carousel from "./components/carousel";
import Chapter from "./components/chapter";
import CourseInfo from "./components/couseInfo";
import CustomForm from "./components/customForm";
import Days from "./components/days";
import Header from "./components/header";
import Necessities from "./components/necessities";

export default function Home() {
  return (
    <>
      <Header />
      <Chapter
        content={
          <div>
            <p className="text-base md:text-2xl xl:text-4xl">
              Sarai accompagnato dal nostro Team per ottenere la migliore
              formazione: impara a guidare la Tua azienda e diventa consapevole
              delle Tue scelte.
            </p>
          </div>
        }
      />
      <Carousel images={["/francesco.png"]} />
      <Chapter
        content={
          <div>
            <h1 className="text-base md:text-2xl lg:text-3xl xl:text-5xl">
              IL NOSTRO SERVIZIO PER VOI - LE TUE NECESSITA’
            </h1>
          </div>
        }
      />
      <Necessities />
      <Chapter
        content={
          <div className="flex items-center md:flex-row flex-col">
            <span className=" md:text-2xl lg:text-[30px] xl:text-[40px] ">
              IL NOSTRO SERVIZIO PER VOI
            </span>
            <span className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl lg:mx-2 mx-3">
              10
            </span>
            <span className=" md:text-2xl lg:text-[30px] xl:text-[40px] ">
              GIORNATE
            </span>
          </div>
        }
      />
      <Days />
      <Chapter
        content={
          <div>
            <h1 className="text-base md:text-4xl">
              INVESTI NELLA TUA AZIENDA, INIZIA QUESTO PERCORSO FORMATIVO
            </h1>
          </div>
        }
      />
      <CourseInfo />
      <CustomForm />
    </>
  );
}
