import logoOne from "../assets/Projectimages/LogoOne.png";
import LogoTwo from "../assets/Projectimages/LogoTwo.png";
import LogoThree from "../assets/Projectimages/LogoThree.png";
import LogoFour from "../assets/Projectimages/LogoFour.png";
import LogoFive from "../assets/Projectimages/LogoFive.png";
function LandingPageBrand() {
  return (
    <>
      <div className="bg-black py-2 px-5 ">
        <div className=' h-[122px] flex-wrap space-x-3.5 md:gap-8 flex items-center justify-center'>
          <img className='h-[23px] md:h-[33px] w-[116px] md:w-[166px] ' src={logoOne} alt='' />
          <img className='h-[26px] md:h-[38px] w-[63px] md:w-[91px] ' src={LogoTwo} alt='' />
          <img className='h-[25px] md:h-[36px] w-[109px] md:w-[156px] ' src={LogoThree} alt='' />
          <img className='h-[21px] md:h-[32px] w-[127px] md:w-[194px] ' src={LogoFour} alt='' />
          <img className='h-[21px] md:h-[33px] w-[134px] md:w-[206px] ' src={LogoFive} alt='' />
        </div>
      </div>
    </>
  );
}
export default LandingPageBrand;
