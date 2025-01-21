import CourseInfoCard from "./courseInfoCard";

export default function CourseInfo() {
  return (
    <div className="bg-customGreen py-24 flex xl:flex-row flex-col justify-evenly items-center">
      <CourseInfoCard
        content={
          <div>
            <h1 className="2xl:text-5xl text-xl md:text-4xl">
              PERCORSO COMPLETO
            </h1>
            <ul className="text-[14px] 2xl:text-3xl md:text-2xl text-base list-disc md:pl-16 pl-8 text-left py-3">
              <li>40 ORE DI FORMAZIONE</li>
              <li>10 LEZIONI PRATICHE</li>
              <li>CONFRONTO CON CONSULENTI DEL LAVORO E IMPRENDITORI</li>
            </ul>
            <h3 className="2xl:text-3xl md:text-2xl text-base">
              OTTIMIZZA LA GESTIONE DELLA TUA AZIENDA
            </h3>
          </div>
        }
        price="€ 3.000,00 + IVA"
      />
      <CourseInfoCard
        content={
          <div>
            <p className="text-xl md:text-3xl sm:text-[35px] 2xl:text-5xl pt-6 ">
              SCEGLI LA GIORNATA FORMATIVA PIU’ ADATTA ALLE TUE ESIGENZE E
              PARTECIPA AL MEETING
            </p>
          </div>
        }
        price="€ 400,00 + IVA"
      />
    </div>
  );
}
