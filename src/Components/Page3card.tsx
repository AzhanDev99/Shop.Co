import { Link } from "react-router-dom";

type Page3cardProps = {
  image?: string;
  imagewidth?: string;
  card3heading?: string;
  to: string;
};

function Page3card({ image, imagewidth, to }: Page3cardProps) {
  return (
    <>
      <div>
        <Link to={to}>
          <div
            className=' w-full mb-7 md:mb-0 h-[289px] rounded-[20px] flex items-center justify-centertransition-all duration-300 hover:-translate-y-2 hover:shadow-xl '
            style={{ width: imagewidth || '100%' }}>
            <img
              className=' z-10 h-[289px] '
              style={{ width: imagewidth || "100%" }}
              src={image}
              alt=''
            />
          </div>
        </Link>
      </div>
    </>
  );
}

export default Page3card;
