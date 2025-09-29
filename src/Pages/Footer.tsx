import Logo from "../assets/Projectimages/logoSHOP.CO.png";
import twitter from "../assets/Projectimages/Group (2).png";
import facebook from "../assets/Projectimages/logo-fb-simple 2.png";
import instagram from "../assets/Projectimages/Group (3).png";
import github from "../assets/Projectimages/Group (4).png";
import LandingfooterSocialhandle from "../Components/LandingfooterSocialhandle";

function Footer() {
  return (
    <>
      <div>
        <div className='w-full h-fit flex items-center flex-col '>
          <div className='h-[170px] w-[1100px] text-white flex items-center justify-between px-20 bg-black absolute rounded-[20px]'>
            <h1 className='text-[32px] font-bold'>
              STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
            </h1>
            <div className='gap-4 flex flex-col '>
              <div className='w-[350px] center text-black font-bold h-[48px] px-[12px] py-[16px] rounded-[62px] bg-[#F0F0F0]'>
                <h1>Follow U On Social Media</h1>
              </div>
              <div className='w-[350px] h-[48px] px-[12px] py-[16px] rounded-[62px] bg-[#F0F0F0] center text-black'>
                <h1>Subscribe to Newsletter</h1>
              </div>
            </div>
          </div>

          <div className='bg-[#F0F0F0]  w-full center mt-20 h-[450px]'>
            <div className='h-[170px] w-[1100px] bg-[#F0F0F0] flex justify-between'>
              <div className='flex flex-col justify-between '>
                <img className='w-[140px]' src={Logo} alt='' />
                <p className='text-[15px]'>
                  We have clothes that suits your <br /> style and which you’re
                  proud to <br /> wear From women to men
                </p>


                <div className='flex gap-2 '>
                  <LandingfooterSocialhandle
                    image={twitter}
                    imageheight='15px'
                    imagewidth='18px'
                  />

                  <LandingfooterSocialhandle
                    image={facebook}
                    bgcolor='black'
                    imageheight='12px'
                    imagewidth='9px'
                  />

                  <LandingfooterSocialhandle
                    image={instagram}
                    imageheight='14px'
                    imagewidth='14px'
                  />

                  <LandingfooterSocialhandle
                    image={github}
                    imageheight='13px'
                    imagewidth='13px'
                  />
                </div>
              </div>

              <div className='flex flex-col justify-between '>
                <h1 className='font-black pb-4'>COMPANY</h1>
                <h3>About</h3>
                <h3>Features</h3>
                <h3>Works</h3>
                <h3>Career</h3>
              </div>
              <div className='flex flex-col justify-between '>
                <h1 className='font-black pb-4'>HELP</h1>
                <h3>Customer Support</h3>
                <h3>Delivery Details</h3>
                <h3>Terms & Conditions</h3>
                <h3>Privacy Policy</h3>
              </div>
              <div className='flex flex-col justify-between '>
                <h1 className='font-black pb-4'>F A Q</h1>
                <h3>Account</h3>{" "}
                <h3>Manage Deliveries</h3>
                <h3>Orders</h3>
                <h3>Payments</h3>
              </div>
              <div className='flex flex-col justify-between '>
                <h1 className='font-black pb-4'>RESOURCES</h1>
                <h3>Free eBooks</h3>
                <h3>Development Tutorial</h3> 
                <h3>How To - Blog</h3>
                <h3>Youtube Playlist</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
