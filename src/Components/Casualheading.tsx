type CasualheadingProps = {
  text?: string;
  img?: string;
  imageheight?:string;
  imagewidth?:string;
};

function Casualheading({ text, img ,imageheight, imagewidth}: CasualheadingProps) {
  return (
    <>
      <div className="flex justify-between w-full">
        <h1 className="font-bold text-2xl ">{text}</h1>
        <img style={{width:imagewidth, height:imageheight}} src={img} alt="" />
      </div>
    </>
  );
}

export default Casualheading;
