import Carousel from "./components/carousel";
import Chapter from "./components/chapter";
import CourseInfo from "./components/couseInfo";
import CustomForm from "./components/customForm";
import Days from "./components/days";
import Header from "./components/header";
import Necessities from "./components/necessities";

export default function Home() {
  const slides = [
    {
      number: 1,
      name: "Francesco Rizzato",
      description:
        "Consulente del lavoro HR Manager Vi accompagnerà in questo percorso garantendovi:",
      image: "/francesco.png",
    },
    {
      number: 2,
      name: "Laura Crocetta",
      description:
        "Project Manager - Dall’iscrizione alla partecipazione ai meeting, sarà il Vostro punto di riferimento",
      image: "/lauraCrocetta.png",
    },
    {
      number: 3,
      name: "Luca Rigoldi",
      description:
        "Pugile professionista e speaker disuccesso renderà unica la vostraformazione. “INSEGUI LA TUA VISION ECONCRETIZZA LE OPPORTUNITA’” sarà il motto che lo guiderà nelsuo speech per voi",
      image: "/lucaRigoldi.png",
    },
  ];
  return (
    <>
      <Header />
      <Chapter
        content={
          <div id="team-section">
            <p className="text-base md:text-2xl xl:text-4xl">
              Sarai accompagnato dal nostro Team per ottenere la migliore
              formazione: impara a guidare la Tua azienda e diventa consapevole
              delle Tue scelte.
            </p>
          </div>
        }
      />
      <Carousel slides={slides} />
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
          <div
            className="flex items-center md:flex-row flex-col"
            id="necessities"
          >
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
          <div id="invest">
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
