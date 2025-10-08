// import { useState } from "react";
import deleteicon from "../assets/Projectimages/delete.png";
import { useCart } from "../Context/CartContext";
import QuantityComponent from "./QuantityComponent";

type AddtoCartDesignProps = {

  productimage?: string;
  Producttitle?: string;
  productsize?: string;
  ProductPrice?: string;
  onRemove?: () => void;
  quantitty?:string |number;
  id?:string |number;
  cartid?:string;
};

function AddtoCartDesign({
  productimage,
  productsize,
  Producttitle,
  ProductPrice,
  onRemove,
  quantitty,
  id,
}: AddtoCartDesignProps)
 {


const { addToCart } = useCart();

  return (
    <>
      <div className='md:flex items-center justify-between p-5'>
        <div className='flex gap-6 '>
          <img
            className='w-[124px] h-[124px] rounded-3xl'
            src={productimage}
            alt=''
          />
          <div>
            <h1 className='font-semibold text-[20px]'>{Producttitle}</h1>
            <p className='text-black/30'>Size :{productsize} </p>
            <h2 className='text-[24px] '>${ProductPrice}</h2>
          </div>
        </div>

        <div className='flex md:flex-col flex-row-reverse justify-between items-center gap-7 pt-5 md:pt-0'>
          <button onClick={onRemove}>
            <img src={deleteicon} alt='' />
          </button>
          <QuantityComponent
            quantity={quantitty}
            Onincrement={()=>(addToCart({ id: Number(id), title:Producttitle!, price: Number(ProductPrice), img: productimage! ,quantity: 1,size:productsize ?? "default",}))}
            Ondecrement={()=>(addToCart({id: Number(id), title:Producttitle! , price:Number(ProductPrice), img:productimage! ,quantity: -1,size:productsize ?? "default",}))}
          />
        </div>
      </div>
      <div className='center py-3'>
        <h1 className='h-0.5 w-[20vw] bg-black/30'></h1>
      </div>
    </>
  );
}
export default AddtoCartDesign;
