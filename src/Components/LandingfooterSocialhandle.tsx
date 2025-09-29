

type LandingfooterSocialhandleProps = {
image?:string;
bgcolor?:string;
imageheight?:string;
imagewidth?:string;
};

function LandingfooterSocialhandle({image , imageheight ,imagewidth, bgcolor}:LandingfooterSocialhandleProps) {
  return (
    <>
      <p className='h-[34px] w-[34px] border-2 border-black/10  center rounded-[50px]' style={{backgroundColor:bgcolor}}>

        <img className=' h-[15px] w-[18px]' style={{height:imageheight, width:imagewidth}} src={image} alt='' />
      </p>
    </>
  );
}

export default LandingfooterSocialhandle;
