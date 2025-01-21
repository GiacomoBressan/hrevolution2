interface CourseInfoCardProps {
  content: React.ReactNode;
  price: string;
}

export default function CourseInfoCard({
  content,
  price,
}: CourseInfoCardProps) {
  return (
    <div
      className="relative bg-customGray my-8 w-[70%] md:w-[50%] xl:w-[33%] 2xl:h-[520px] md:h-[500px] h-[400px] text-5xl font-bold flex flex-col text-center justify-evenly items-center p-8 text-customBlue"
      style={{ boxShadow: "-20px -20px 0 #4c75ba" }} // Replace with your custom color value
    >
      <div className="relative  flex flex-col items-center justify-between h-full">
        {content}
        <div className="bg-customLightBlue w-full h-20 flex items-center justify-center text-customGray mt-4">
          <h1 className="2xl:text-5xl text-4xl ">{price}</h1>
        </div>
      </div>
    </div>
  );
}
