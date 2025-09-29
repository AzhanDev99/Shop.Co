import { Minus, Plus } from "lucide-react";

type QuantityComponentProps = {
    quantity?:string | number;
    Onincrement: ()=> void;
    Ondecrement: ()=> void;

};




function QuantityComponent({
    quantity , Ondecrement ,Onincrement
}:QuantityComponentProps) {
  return (
    <>
      <div className='bg-[#F0F0F0] w-fit h-fit px-4 py-2 text-3xl gap-5 rounded-3xl center text-black'>
        <Minus 
        onClick={Ondecrement}

        />
        <h1 className='text-2xl'>{quantity}</h1>
        <Plus 
        onClick={Onincrement}
        />
      </div>
    </>
  );
}

export default QuantityComponent;
