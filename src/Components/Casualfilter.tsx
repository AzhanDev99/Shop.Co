type CasualffilterProps = {
  text?: string;
  img?: string;
  onClick?: () => void;
  selected?: boolean;
};

function Casualffilter({ text, img, onClick, selected }: CasualffilterProps) {
  return (
    <>
      <div>
        <button
          className="flex w-full justify-between items-center"
          onClick={onClick}
        >
          <h1 className={`${selected && "underline font-bold"}`}>{text}</h1>
          {img && <img className="h-[10px] w-[10px]" src={img} alt="" />}
        </button>
      </div>
    </>
  );
}

export default Casualffilter;
