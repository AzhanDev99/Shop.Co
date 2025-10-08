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
        className={`px-7 py-2 rounded-[20px] text-sm  font-bold cursor-pointer transition duration-100
            ${
              selected
                ? "bg-black text-white "
                : "bg-white text-black border-2 border-black/20"
            }          
            `}
      >
        {text}
      </button>
    </>
  );
}

export default Sizebutton;
