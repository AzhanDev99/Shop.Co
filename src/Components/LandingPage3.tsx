import Page3card from "./Page3card";
import img1 from "../assets/Projectimages/Frame 61.png";
import img2 from "../assets/Projectimages/Frame 62.png";
import img3 from "../assets/Projectimages/Frame 63.png";
import img4 from "../assets/Projectimages/Frame 64.png";

function LandingPage3() {
  return (
    <>
      <div>
        <div className='center'>
          <div className='w-[1239px] bg-[#F0F0F0] h-[866px] uppercase flex flex-col items-center rounded-[40px]'>
            <h1 className='text-[48px] font-bold py-16'>
              BROWSE BY DRESS STYLE
            </h1>

            <div className='flex gap-[20px] '>
              <Page3card image={img1} imagewidth='' card3heading='Casual' to={"/Casual"} />
              <Page3card
                image={img2}
                imagewidth='650px'
                
                to={"/Formal"}
              />
            </div>

            <div className='flex gap-[20px] pt-[50px]'>
              <Page3card
                image={img4}
                imagewidth='650px'
                to={"/Party"}
              />
              <Page3card image={img3} imagewidth=''  to={"/Gym"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LandingPage3;
