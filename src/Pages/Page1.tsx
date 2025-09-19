import Check from "./Check"
// import discountvideo from "../assets/Projectimages/discountvideo.gif"
import Dscntgif from "../assets/Projectimages/Dscntgif.gif"
import { Facebook, Instagram, MessageCircle } from "lucide-react";


function Page1() {
  return (
    <>
      {/* height 88vh ha kynky navbar 12vh ka ha  */}
      {/* absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  */}
      <div className='h-[88vh] relative bg-custom-gradient'>
        <div className='flex relative h-[82%] w-screen  justify-center items-center'>



        <Check />




          <div className='lind absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between items-center gap-10 flex-col py-14 text-4xl whitespace-nowrap z-20'  >
            <h1>This E-Commerce </h1>
            <h1>Store is Created to Showcase</h1>
            <h1>My Development Skill</h1>
          </div>






        </div>

        <div className='absolute  h-[18vh] w-[100%] overflow-hidden  left-0 bottom-0'>
            <img className="  absolute top-0 w-[8vw] left-0 ml-[32px] mt-[-32px] " src={Dscntgif} alt="gif" />
            <div className="flex absolute right-0 top-10 mr-11 gap-9 ">

                <a href="http://https://www.facebook.com"><Instagram  /></a>
                <a href="https://www.facebook.com"><Facebook /></a>
                <a href="http://https://www.facebook.com"><MessageCircle /></a>
                  

            </div>
        </div>
      </div>
    </>
  );
}

export default Page1;
