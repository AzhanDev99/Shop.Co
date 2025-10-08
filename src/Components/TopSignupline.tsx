import { useState } from "react";
import CrossVector from "../assets/Projectimages/CrossVector.png";


function TopSignupline() {
  const [showsignup, setShowsignup] = useState(true);
  return (
    <>
      {showsignup && (
        <div className='w-full bg-black h-[38px] text-white center text-[12px] md:text[16px] lg:text-[20px] '>
          <h1>Sign up and get 20% off to your first order. Sign up now</h1>
          <img
            className='w-4 h-4 lg:w-5 lg:h-5 absolute lg:right-[108px] right-7 cursor-pointer  '
            src={CrossVector}
            alt='close'
            onClick={() => setShowsignup(false)}
          />
        </div>
      )}
    </>
  );
}

export default TopSignupline;
