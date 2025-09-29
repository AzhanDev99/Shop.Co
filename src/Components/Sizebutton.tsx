type SizebuttonProps = {
  text?: string;
  onClick?: () => void;
  selected?: boolean;
};

function Sizebutton({ text, onClick, selected }: SizebuttonProps) {
  return (
    <>
      <button
        onClick={onClick}
        className={`px-7 py-2 rounded-[20px] text-sm 
            ${
              selected
                ? "bg-white text-black border border-black"
                : "bg-black text-white"
            }          
            `}
      >
        {text}
      </button>
    </>
  );
}

export default Sizebutton;
