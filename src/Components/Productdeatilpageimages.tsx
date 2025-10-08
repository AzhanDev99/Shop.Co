type ProductdeatilpageimagesProps ={
    image?:string;
    imgalt?:string;
}


function Productdeatilpageimages({image,imgalt}:ProductdeatilpageimagesProps) {
  return (
    <>
      <div>
        <img
          className='md: w-[132px] h-[147px]  rounded-3xl object-cover'
          src={image}
          alt={imgalt}
        />
      </div>
    </>
  );
}

export default Productdeatilpageimages;
