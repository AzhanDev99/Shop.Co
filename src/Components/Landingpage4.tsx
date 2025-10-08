import star from "../assets/Projectimages/Star 3.png";
import LandingPage4ratingcard from "./LandingPage4ratingcard";
import reviewsdata from "../Data/Jsonformat.json";

function LandingPage4() {
  const bestreviews = reviewsdata.filter((r) => r.rating >= 4).slice(0, 3);

  return (
    <>
      <div>
        <div className='h-fit px-10 md:px-20 flex flex-col justify-between py-5 w-screen'>
          <div className='center'>
            <h1 className='text-5xl font-bold  py-11'>OUR HAPPY CUSTOMERS</h1>
          </div>

          <div className='flex items-center gap-[20px] md:w-fit overflow-x-auto '>
            {bestreviews.map((review) => (
              <LandingPage4ratingcard
                key={review.id}
                image={star}
                heading={review.name}
                paragraph={review.review}
                rating={review.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default LandingPage4;
