import logoOne from "../assets/Projectimages/LogoOne.png";
import LogoTwo from "../assets/Projectimages/LogoTwo.png";
import LogoThree from "../assets/Projectimages/LogoThree.png";
import LogoFour from "../assets/Projectimages/LogoFour.png";
import LogoFive from "../assets/Projectimages/LogoFive.png";
function LandingPageBrand() {
  return (
    <>
      {" "}
      <div>
        {" "}
        <div className='w-screen flex items-center justify-evenly h-[122px] bg-black'>
          {" "}
          <img className='h-[33px] w-[166px] ' src={logoOne} alt='' />{" "}
          <img className='h-[38px] w-[91px] ' src={LogoTwo} alt='' />{" "}
          <img className='h-[36px] w-[156px] ' src={LogoThree} alt='' />{" "}
          <img className='h-[32px] w-[194px] ' src={LogoFour} alt='' />{" "}
          <img className='h-[33px] w-[206px] ' src={LogoFive} alt='' />{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
export default LandingPageBrand;
