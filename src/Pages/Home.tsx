import LandingPage3 from "../Components/LandingPage3";
import LandingPage4 from "../Components/Landingpage4";
import LandingPageBrand from "../Components/LandingPageBrand";
import ShowcaseProduct from "../Components/ShowcaseProduct";
import Hero from "./Hero";

function Home() {
  return (
    <>
      <div className='w-full h-fit overflow-x-hidden'>
        {/* <Navbar /> */}

        
        <Hero />
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
        
        <div className='h-fit w-screen center py-10 md:hidden'>
          <h1 className='h-0.5 w-[80%] bg-black opacity-10'> </h1>
        </div>

        <LandingPage3 />
        <LandingPage4 />
      </div>
    </>
  );
}

export default Home;
