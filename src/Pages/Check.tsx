import { useState, useEffect } from "react";

const images = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1018/600/400",
];

function Carousel() {
  const [index, setIndex] = useState(0);

  // Auto slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const getPosition = (i: any) => {
    const pos = (i - index + images.length) % images.length;
    if (pos === 0) return "center";
    if (pos === 1) return "right";
    if (pos === 2) return "left";
    return "hidden";
  };

  return (
    <>
      <div className='relative flex items-center justify-center h-[500px] overflow-hidden w-full'>
        {images.map((img, i) => {
          const position = getPosition(i);

          return (
            <img
              key={i}
              src={img}
              className={`flex justify-between rounded-xl object-cover transition-all duration-700 ease-in-out
              ${
                position === "center"
                  ? "absolute w-[30%] h-[75%] left-1/2 -translate-x-1/2 opacity-60 z-20 "
                  : ""
              }
              ${
                position === "left"
                  ? "absolute w-[10%] h-[60%] -left-10 opacity-100 z-10 "
                  : ""
              }
              
              ${
                position === "right"
                  ? "absolute w-[10%] h-[60%] -right-10 opacity-100 z-10"
                  : ""
              }
              ${position === "hidden" ? "hidden" : ""}`}
              onClick={() => {
                if (position === "right") handleNext();
              }}
            />
          );
        })}
      </div>
    </>
  );
}
export default Carousel;
