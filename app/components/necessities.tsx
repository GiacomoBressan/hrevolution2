import NecessityItem from "./necessityItem";

export default function Necessities() {
  const items = [
    "Strutturare l’organizzazione aumentando la produttività",
    "Attirare e mantenere in azienda i talentigarantendo sicurezza e benessere",
    "Pianificare gli investimenti e i costi per una gestionestrategica dell’azienda",
    "Differenziarti sul mercato e offrire soluzioni innovative",
    "Approfondire nuove relazioni che ti permetteranno diarricchire la tua azienda",
  ];

  return (
    <div className="w-full h-[90vh] bg-customGreen flex flex-col items-center justify-center text-customBlue relative">
      {items.map((item, index) => (
        <NecessityItem key={index} text={item} />
      ))}
    </div>
  );
}
