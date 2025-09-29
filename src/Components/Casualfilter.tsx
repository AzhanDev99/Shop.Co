type CasualffilterProps = {
    text?:string;
    img?:string;
    onClick?: ()=> void;
};

function Casualffilter({text , img , onClick}:CasualffilterProps) {
  return (
    <>
      <div>
        <button className='flex w-full justify-between items-center'
        onClick={onClick}
        >         
          <h1>{text}</h1>
          {img && <img className='h-[7px] w-[8px]' src={img} alt='' />}
        </button>
      </div>
    </>
  );
}

export default Casualffilter;
