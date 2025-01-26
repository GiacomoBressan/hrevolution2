interface DayCardProps {
  text: string;
  image: string;
}

export default function DayCard({ text, image }: DayCardProps) {
  return (
    <div className="bg-customGray md:w-[50%] w-[70%] md:h-[600px] 2xl:h-[700px] h-[350px] text-3xl font-bold flex flex-col items-center mx-8 py-8 mt-24 2xl:mt-0 overflow-hidden rounded-2xl">
      <img
        src={image}
        alt="Day Image"
        className="w-[90%] h-[60%] object-cover mb-4"
      />
      <div className="w-full flex items-center justify-center px-2 h-[40%] overflow-hidden">
        <h3 className="text-customBlue xl:text-4xl md:text-xl text-base text-center md:p-6 p-2">
          {text}
        </h3>
      </div>
    </div>
  );
}
