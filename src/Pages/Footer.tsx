import Logo from "../assets/Projectimages/logoSHOP.CO.png";
import Footercomp from "../Components/Footercomp";
import Footersocialhandles from "../Components/Footersocialhandles";

function Footer() {
  return (
    <>
      <div>
        <div className=' h-fit flex items-center flex-col '>
          <div className='h-fit md:py-6 text-white md:flex items-center justify-between  bg-black md:absolute rounded-[20px] pb-7 px-10'>
            <div className='md:text-3xl text-3xl whitespace-nowrap font-bold md:pr-64'>
              <h1>STAY UPTO DATE ABOUT </h1>
              <h1 className='pb-10 md:pb-0 '>OUR LATEST OFFERS</h1>
            </div>
            <div className='gap-4 flex flex-col '>
              <div className='w-[350px] center text-black font-bold h-[48px] px-[12px] py-[16px] rounded-[62px] bg-[#F0F0F0]'>
                <h1>Follow U On Social Media</h1>
              </div>
              <div className='w-[350px] h-[48px] px-[12px] py-[16px] rounded-[62px] bg-[#F0F0F0] center text-black'>
                <h1>Subscribe to Newsletter</h1>
              </div>
            </div>
          </div>

          <div className='bg-[#F0F0F0] w-full center md:mt-20 h-fit md:h-[450px]'>
            <div className='h-fit w-full md:w-fit mt-5 md:mt-0 md:flex justify-between md:gap-26'>

              <div className='flex flex-col justify-between gap-5 px-10 md:px-0'>
                <img className='w-fit ' src={Logo} alt='' />
                <p className='text-[15px] w-full md:w-68'>
                  We have clothes that suits your style and  which you’re
                  proud to wear From  women to men
                </p>
                <Footersocialhandles />
              </div>

              <div className="flex md:gap-14 gap-10 md:w-fit w-full items-center justify-between md:mt-0 mt-10 px-10 md:px-0">
                <div>
                  <Footercomp
                    heading='COMPANY'
                    text1='Home'
                    link1="./"
                    text2='Product'
                    link2="./ProdctPage"
                    text3='About'
                    link3="./about"
                    // text4='About'
                  />
                </div>
                <div>
                  <Footercomp
                    heading='HELP'
                    text1='Customer Support'
                    text2='Delivery Details'
                    text3='Terms & Conditions'
                    text4='Privacy Policy'
                  />
                </div>
              </div>

              <div className="flex md:gap-14 gap-10 md:w-fit w-full items-center justify-between md:mt-0 mt-10 px-10 md:px-0 mb-10 md:mb-0">
                <div>
                  <Footercomp
                    heading='F A Q'
                    text1='Account'
                    text2='Manage Deliveries'
                    text3='Orders'
                    text4='Payments'
                  />
                </div>
                <div>
                  <Footercomp
                    heading='RESOURCES'
                    text1='Free eBooks'
                    text2='Development Tutorial'
                    text3='How To - Blog'
                    text4='Youtube Playlist'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
