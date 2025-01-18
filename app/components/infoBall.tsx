interface InfoBallProps {
  days: number;
  text: string;
}

const InfoBall: React.FC<InfoBallProps> = ({ days, text }) => {
  return (
    <div className="bg-customGray md:w-[250px] md:h-[250px] w-[150px] h-[150px] text-3xl font-bold flex flex-col items-center justify-center text-customBlue rounded-full 2xl:mt-8 md:mt-0 mt-8">
      <h1 className="xl:text-[100px] lg:text-8xl text-7xl">{days}</h1>
      <h3 className="xl:text-[30px] lg:text-3xl text-2xl uppercase underline">
        {text}
      </h3>
    </div>
  );
};

export default InfoBall;
