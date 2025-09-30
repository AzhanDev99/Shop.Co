import { Link } from "react-router-dom";
import HomePageimg from "../assets/Projectimages/HomePageimg.png";
import HomeNumber from "../Components/HomeNumbers";
import LandingPage3 from "../Components/LandingPage3";
import LandingPage4 from "../Components/Landingpage4";
import LandingPageBrand from "../Components/LandingPageBrand";
import ShowcaseProduct from "../Components/ShowcaseProduct";

function Home() {
  return (
    <>
      <div className='w-full h-fit overflow-x-hidden'>
        {/* <Navbar /> */}

        <div className='w-full h-fit relative'>
          <img
            className='w-full h-[607px] -z-10 absolute'
            src={HomePageimg}
            alt=''
          />

          <div className='flex flex-col justify-evenly pl-20 pt-[80px] py-[20px] w-[50%] z-10 h-[100vh] '>
            <h1 className='text-5xl'>
              FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
            </h1>
            <p className='txt-[#000000] opacity-[60%] w-[82%]'>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <Link to={"ProdctPage"}>
              <button className='px-[54px] animatebutton py-[16px] w-[210px] rounded-[62px] bg-black text-white hover:bg-gray-400 hover:text-black '>
                <span className="animatebutton">Shop Now</span>
              </button>
            </Link>

            <div className='w-[506px] h-[74px]  gap-8 center'>
              <HomeNumber number={200} text='International Brands' />
              <HomeNumber number={2000} text='Hign-Quality Products' />
              <HomeNumber number={30000} text='Happy Customers' />
            </div>
          </div>
        </div>

        <LandingPageBrand />

        {/* new arrival */}

        <ShowcaseProduct
          ProductMainHeading='New Arrival'
          viewallbutton='View All'
          to='/NewArrival'
          filtertype='NewArrival'
        />

        <div className='h-fit w-screen center py-10'>
          <h1 className='h-0.5 w-[80%] bg-black opacity-10'> </h1>
        </div>

        <ShowcaseProduct
          ProductMainHeading='Best Products'
          viewallbutton='View All'
          to='/BestProducts'
          filtertype='BestProducts'
        />

        <LandingPage3 />
        <LandingPage4 />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Home;
