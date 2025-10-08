import Page3card from "./Page3card";
import img1 from "../assets/Projectimages/Frame 61.png";
import img2 from "../assets/Projectimages/Frame 62.png";
import img3 from "../assets/Projectimages/Frame 63.png";
import img4 from "../assets/Projectimages/Frame 64.png";

function LandingPage3() {
  return (
    <>
      <div>
        <div className='center '>
          <div className='h-fit mx-2 bg-[#F0F0F0] px-10 pb-10 flex flex-col items-center rounded-[40px]'>
            <h1 className='text-3xl md:text-5xl font-bold py-5 md:py-16 flex flex-col md:flex md:flex-row md:gap-2 items-center'>
              <h1>BROWSE BY </h1>
              <h1>DRESS STYLE </h1>
            </h1>

            <div className='md:flex gap-[20px] '>
              <Page3card image={img1} imagewidth='' card3heading='Casual' to={"/Casual"}/>
              <Page3card image={img2} imagewidth='md:w-[650px] w-full' to={"/Formal"} />
            </div>

            <div className='md:flex gap-[20px] pt-[15px] md:pt-[50px]'>
              <Page3card image={img4} imagewidth='md:w-[650px] w-full' to={"/Party"} />
              <Page3card image={img3} imagewidth='' to={"/Gym"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LandingPage3;
