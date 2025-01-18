interface NecessityItemProps {
  text: string;
}

const NecessityItem: React.FC<NecessityItemProps> = ({ text }) => {
  return (
    <div className="bg-customGray md:w-[60%] w-[80%] h-[13%] text-base md:text-2xl lg:text-3xl font-bold flex items-center text-center justify-center my-4 p-4">
      <h3>{text}</h3>
    </div>
  );
};

export default NecessityItem;
