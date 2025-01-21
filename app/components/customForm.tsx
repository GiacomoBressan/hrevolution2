"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

type FormData = {
  nome: string;
  cognome: string;
  email: string;
  telefono: string;
};

const CustomForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Email inviata con successo!");
      } else {
        alert("Errore durante l'invio dell'email.");
      }
    } catch (error) {
      console.error("Errore:", error);
      alert("Si è verificato un problema.");
    }
  };

  return (
    <div className="bg-customGreen h-[800px]">
      <h1 className="2xl:text-5xl xl:text-4xl text-3xl h-[180px] text-customBlue font-bold text-center">
        ISCRIVITI QUI E SAREMO A TUA DISPOSIZIONE
      </h1>
      <form
        className="flex flex-col items-center bg-customGray w-full h-[620px] p-8 pt-24"
        onSubmit={handleSubmit}
      >
        <div className="md:w-[50%] w-[80%] flex justify-between">
          <div className="flex flex-col w-[48%]">
            <label className="text-customBlue mb-2">Nome</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="h-12 px-4 border-b-2 border-customBlue bg-transparent focus:outline-none"
            />
          </div>
          <div className="flex flex-col w-[48%]">
            <label className="text-customBlue mb-2">Cognome</label>
            <input
              type="text"
              name="cognome"
              value={formData.cognome}
              onChange={handleChange}
              className="h-12 px-4 border-b-2 border-customBlue bg-transparent focus:outline-none"
            />
          </div>
        </div>
        <div className="md:w-[50%] w-[80%] flex flex-col mt-4">
          <label className="text-customBlue mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="h-12 px-4 border-b-2 border-customBlue bg-transparent focus:outline-none"
          />
        </div>
        <div className="md:w-[50%] w-[80%] flex flex-col mt-4">
          <label className="text-customBlue mb-2">Telefono</label>
          <input
            type="text"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="h-12 px-4 border-b-2 border-customBlue bg-transparent focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="md:w-[50%] w-[80%] h-12 bg-customBlue text-white font-bold text-xl mt-12"
        >
          Invia
        </button>
      </form>
    </div>
  );
};

export default CustomForm;
