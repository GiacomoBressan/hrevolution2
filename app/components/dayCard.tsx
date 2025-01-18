interface DayCardProps {
  text: string;
  image: string;
}

export default function DayCard({ text, image }: DayCardProps) {
  return (
    <div className="bg-customGray w-[40%] 2xl:h-[700px] text-3xl font-bold flex flex-col items-center mx-8 py-8 mt-8">
      <img
        src={image}
        alt="Day Image"
        className="w-[90%] 2xl:h-[480px] xl:h-[380px] object-cover mb-4"
      />
      <div className="w-full flex items-center justify-center px-2">
        <h3 className="text-customBlue xl:text-2xl text-xl text-center">
          {text}
        </h3>
      </div>
    </div>
  );
}
