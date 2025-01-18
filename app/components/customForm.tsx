export default function CustomForm() {
  return (
    <div className="bg-customGreen h-[90vh] flex flex-col">
      <h1 className="2xl:text-5xl xl:text-4xl text-3xl h-[30vh] text-customBlue font-bold text-center">
        ISCRIVITI QUI E SAREMO A TUA DISPOSIZIONE
      </h1>
      <form className="flex flex-col items-center bg-customGray w-full h-[70vh] p-8 pt-24">
        <div className="md:w-[50%] w-[80%] flex justify-between">
          <div className="flex flex-col w-[48%]">
            <label className="text-customBlue mb-2">Nome</label>
            <input
              type="text"
              className="h-12 px-4 border-b-2 border-customBlue bg-transparent focus:outline-none"
            />
          </div>
          <div className="flex flex-col w-[48%]">
            <label className="text-customBlue mb-2">Cognome</label>
            <input
              type="text"
              className="h-12 px-4 border-b-2 border-customBlue bg-transparent focus:outline-none"
            />
          </div>
        </div>
        <div className="md:w-[50%] w-[80%] flex flex-col mt-4">
          <label className="text-customBlue mb-2">Email</label>
          <input
            type="email"
            className="h-12 px-4 border-b-2 border-customBlue bg-transparent focus:outline-none"
          />
        </div>
        <div className="md:w-[50%] w-[80%] flex flex-col mt-4">
          <label className="text-customBlue mb-2">Telefono</label>
          <input
            type="text"
            className="h-12 px-4 border-b-2 border-customBlue bg-transparent focus:outline-none"
          />
        </div>
        <button className="md:w-[50%] w-[80%] h-12 bg-customBlue text-white font-bold text-xl mt-12">
          Invia
        </button>
      </form>
    </div>
  );
}
