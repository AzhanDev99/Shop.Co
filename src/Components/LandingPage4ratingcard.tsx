type LandingPage4ratingcardProps = {
  image?: string;
  heading?: string;
  paragraph?: string;
  cardopacity?:string;
};

function LandingPage4ratingcard({
  image,
  heading,
  paragraph,
  cardopacity,
}: LandingPage4ratingcardProps) {
  return (
    <>
      <div className='border-4 border-black/10 p-7 gap-1.5 w-[400px] h-[240px] rounded-[20px]' style={{opacity:cardopacity}}>
        <div className='gap-[7px] flex'>
          <img src={image} alt='' />
          <img src={image} alt='' />
          <img src={image} alt='' />
          <img src={image} alt='' />
          <img src={image} alt='' />
        </div>
        <h1 className='font-bold text-2xl py-3'>{heading}</h1>
        <p >"{paragraph}"</p>
      </div>
    </>
  );
}

export default LandingPage4ratingcard;
