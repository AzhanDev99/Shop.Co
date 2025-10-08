import { Link } from "react-router-dom";
import HomePageimg from "../assets/Projectimages/HomePageimg.png";
import HomeNumber from "../Components/HomeNumbers";

function Hero() {
  return (
    <>
      <div className='w-full h-fit relative '>
        <div className='flex flex-col justify-evenly px-5 md:pl-20  py-[20px] w-[100%] md:w-[50%] z-10 md:h-[100vh]'>
          <h1 className='md:text-6xl text-5xl font-extrabold md:font-normal '>
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </h1>
          <p className='txt-[#000000] opacity-[60%] md:w-[82%] w-[100%] pt-6 md:pt-0'>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Link to={"ProdctPage"}>
            <button className='active:text-white active:bg-black transition duration-100 cursor-pointer px-[54px] py-[16px] w-[100%] mt-7 md:mt-0 md:w-[210px] rounded-[62px] animate-bounce  bg-black text-white hover:text-black hover:bg-black/10 border-2 border-black/60'>
              Shop Now
            </button>
          </Link>

          <div className='gap-8 center flex flex-wrap line-height: 50; '>
            <HomeNumber number={200} text='International Brands' />
            <h1 className='bg-black/20 h-20 w-0.5 md:hidden '></h1>
            <HomeNumber number={2000} text='Hign-Quality Products' />
            <HomeNumber
              margintop='md:mt-[0px] mt-[-20px] '
              number={30000}
              text='Happy Customers'
            />
          </div>
        </div>

        <img
          className='object-cover object-right md:w-full h-[448px] md:h-[607px] top-2 -z-10 md:absolute lg:absolute'
          src={HomePageimg}
          alt=''
        />
      </div>
    </>
  );
}

export default Hero;
