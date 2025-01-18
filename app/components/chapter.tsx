import React from "react";

interface ChapterProps {
  content: React.ReactNode;
}

const Chapter: React.FC<ChapterProps> = ({ content }) => {
  return (
    <>
      <div className="md:h-10 h-8 w-full bg-customGreen"></div>
      <div className="bg-customGray w-full md:h-32 h-6 flex items-center justify-end md:py-20 py-14 relative">
        <div className="min-w-[20%] flex items-center justify-center">
          <div className="flex flex-col items-center absolute -top-16">
            <div className="md:h-32  h-24 md:w-24 w-[40px] bg-customBlue"></div>
            <div
              className="w-0 h-0 
                md:border-l-[48px] border-l-[20px] 
                md:border-r-[48px] border-r-[20px] 
                md:border-t-[48px] border-t-[20px] 
                border-b-0 border-transparent border-t-customBlue"
            ></div>
          </div>
        </div>
        <div className="lg:text-4xl md:text-3xl p-4 text-customBlue font-bold w-full">
          {content}
        </div>
      </div>
    </>
  );
};

export default Chapter;
