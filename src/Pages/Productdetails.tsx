import { useLocation, useParams } from "react-router-dom";
// import ratingg from "../assets/Projectimages/Star 3.png";
import Sizebutton from "../Components/Sizebutton";
import { products } from "../Data/Product";
import { useCart } from "../Context/CartContext";
import QuantityComponent from "../Components/QuantityComponent";
import { useState } from "react";
import { Star } from "lucide-react";

function Productdetails() {
  const { id } = useParams();
  const location = useLocation();
  const { product } = location.state || {};
  const { addToCart } = useCart();

  if (!products) {
    return <h1>Product Not found </h1>;
  }

  const productData =
    product || products.find((p: { id: number }) => p.id === Number(id));

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <>
      <div>
        <div className='h-fit w-full  px-25 pb-16 mb-4'>
          <div className='text-xl text-black opacity-30 px-4 pl-13 pt-4'>
            Product Details
          </div>
          <div className=' flex p-10 '>
            <div className='w-[50%] gap-4 h-fit pr-5  flex items-center justify-between '>
              <div className='flex flex-col gap-5'>
                <div className=' w-[132px] h-[147px] rounded-3xl'>
                  <img
                    className=' w-[132px] h-[147px] rounded-3xl'
                    src={productData.img}
                    alt={productData.title}
                  />
                </div>
                <div className=' w-[132px] h-[147px] rounded-3xl'>
                  <img
                    className=' w-[132px] h-[147px] rounded-3xl'
                    src={productData.img}
                    alt={productData.title}
                  />
                </div>
                <div className=' w-[132px] h-[147px] rounded-3xl'>
                  <img
                    className='rounded-3xl  w-[132px] h-[147px]'
                    src={productData.img}
                    alt={productData.title}
                  />
                </div>
              </div>
              <div>
                <div>
                  <img
                    className='w-[375px] h-[400px] rounded-3xl'
                    src={productData.img}
                    alt={productData.title}
                  />
                </div>
              </div>
            </div>

            <div className='w-[50%] h-fit  pt-3 pl-4'>
              <h1 className='text-[40px] font-bold'>{productData.title}</h1>
              <h1 className='flex'>
                {Array.from({ length: productData.rating }, (_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className='text-yellow-500 fill-yellow-500'
                  />
                ))}
              </h1>

              <h1 className='text-[25px] font-semibold'>
                ${productData.price}
              </h1>
              <p className='py-1.5'>
                {productData.details} Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Accusantium, esse?
              </p>

              <div className='pr-5 pt-4 pb-2'>
                <h1 className='h-0.5 w-[100%] bg-black opacity-10 '> </h1>
              </div>
              <div>
                <h1 className='pb-3 text-2xl font-semibold pl-2'>
                  Choose Size
                </h1>
                <div className='flex gap-5 flex-wrap
                
                '>
                  <Sizebutton
                    text='Small'
                    onClick={() => setSelectedSize("Small")}
                    selected={selectedSize === "Small"}
                    
                  />
                  <Sizebutton
                    text='Medium'
                    onClick={() => setSelectedSize("Medium")}
                    selected={selectedSize === "Medium"}
                  />
                  <Sizebutton
                    text='Large'
                    onClick={() => setSelectedSize("Large")}
                    selected={selectedSize === "Large"}
                  />
                  <Sizebutton
                    text='X-Large'
                    onClick={() => setSelectedSize("X-Large")}
                    selected={selectedSize === "X-Large"}
                  />
                  <Sizebutton
                    text='XX-Large'
                    onClick={() => setSelectedSize("XX-Large")}
                    selected={selectedSize === "XX-Large"}
                  />
                </div>

                <div className='pr-5 pt-6'>
                  <h1 className='h-0.5 w-[100%] bg-black opacity-10 '> </h1>
                </div>

                <div className='flex justify-between pr-4 pt-7'>
                  <div>
                    <QuantityComponent
                      quantity={quantity}
                      Onincrement={() => setQuantity((q: any) => q + 1)}
                      Ondecrement={() =>
                        setQuantity((q: any) => Math.max(1, q - 1))
                      }
                    />
                  </div>

                  <button
                    className='bg-black text-white  px-32 py-2 rounded-3xl'
                    onClick={() => {
                      if (!selectedSize) {
                        alert("Please select a size first!");
                        return;
                      }

                      addToCart({
                        ...productData,
                        quantity, // yahan se state wali value cart me jayegi
                        size: selectedSize,
                      });
                    }}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='py-4 center'>
          <h1 className='h-0.5 w-[80%] bg-black opacity-10 '> </h1>
        </div>
      </div>
    </>
  );
}
export default Productdetails;
