import leftarrow from "../assets/Projectimages/arrow-down-bold 2.png";
import rightarrow from "../assets/Projectimages/arrow-down-bold 1.png";
import star from "../assets/Projectimages/Star 3.png";

import LandingPage4ratingcard from "./LandingPage4ratingcard";

function LandingPage4() {
  return (
    <>
      <div>
        <div className='h-[70vh] px-20 flex flex-col justify-evenly w-screen'>
          <div className='flex justify-between px-10'>
            <div>
              <h1 className='text-[44px] font-bold uppercase'>
                Our Happy customers
              </h1>
            </div>
            <div className='flex gap-[20px]'>
              <button>
                <img className='w-[24px] h-[24px]' src={leftarrow} alt='' />
              </button>
              <button>
                <img className='w-[24px] h-[24px]' src={rightarrow} alt='' />
              </button>
            </div>
          </div>
          <div className='flex  gap-[20px]'>

            <LandingPage4ratingcard
            image={star} 
            heading="James Bond"
            paragraph="As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
            />    
            <LandingPage4ratingcard
            image={star} 
            heading="James Bond"
            paragraph="As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
            />    
            <LandingPage4ratingcard
            image={star} 
            heading="James Bond"
            paragraph="As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
            />    
          </div>
          
        </div>
      </div>
    </>
  );
}
export default LandingPage4;
