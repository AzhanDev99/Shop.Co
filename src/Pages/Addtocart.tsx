import { useState } from "react";
import rightarrowvector from "../assets/Projectimages/rightarrowvector.png";
import AddtoCartDesign from "../Components/Add-to-cartDesign";
import Confirmorderform from "../Components/Confirmorderform";

import { useCart } from "../Context/CartContext";

function Addtocart() {
  const { cart, removeFromCart } = useCart();
  const [showform, setShowform] = useState(false);

  const totalAmount = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <>
      <div>
        <div className='pb-14 md:pl-27 pt-5'>
          {/* Home and cart heading on thr top of the code  */}
          <div className='text-black  flex text-[20px] gap-4 items-center pl-5 md:pl-3 '>
            <h1>Home</h1>
            <img className='h-[14px] w-[14px]' src={rightarrowvector} alt='' />
            <h1 className='opacity-20'>Cart</h1>
          </div>

          {/* your cart heading */}
          <h1 className='py-5 text-[40px] font-bold pl-5 md:pl-0'>Your Cart</h1>

          <div className='md:flex gap-10'>
            <div className='border-2 border-black/10 rounded-2xl md:w-[45%]'>
              {cart.length === 0 ? (
                <p className='text-center text-lg h-[50vh] w-[80%] center text-gray-600'>
                  Kindly add something 🙂
                </p>
              ) : (
                cart.map((item) => (
                  <AddtoCartDesign
                    // key={item.id}
                    key={item.cartid}
                    id={item.id}
                    cartid={item.cartid}
                    productimage={item.img}
                    Producttitle={item.title}
                    productsize={item.size}
                    ProductPrice={item.price.toString()}
                    quantitty={item.quantity}
                    // onRemove={() => removeFromCart(item.id)}
                    onRemove={() => removeFromCart(item.cartid!)}
                  />
                ))
              )}
            </div>

            {/* addtocartbillsection */}
            <div className='border-2 border-black/10 rounded-2xl md:w-[45%] flex flex-col justify-center gap-4'>
              <div>
                <h1 className='text-2xl text-center font-bold pt-3'>
                  Order Summary
                </h1>
              </div>
              <div className='flex justify-between items-center px-14 text-xl'>
                <h1 className='text-black/50'>Subtotal</h1>
                <h2>${totalAmount.toFixed(2)}</h2>
              </div>
              {cart.length > 0 ? (
                <>
                  <div className='flex justify-between items-center px-14 text-xl'>
                    <h1 className='text-black/50'>Packaging Charges </h1>
                    <h2>$13</h2>
                  </div>
                  <div className='flex justify-between items-center px-14 text-xl'>
                    <h1 className='text-black/50'>Delivery Fee</h1>$15
                  </div>
                  <div className='flex justify-between items-center px-14 text-xl'>
                    <h1 className='text-xl'>Total</h1>
                    <h2>
                      $
                      {(parseFloat(totalAmount.toFixed(2)) + 13 + 15).toFixed(
                        2
                      )}
                    </h2>
                  </div>
                </>
              ) : (
                <div className='flex justify-between items-center px-14 text-xl'>
                  <h1 className='text-xl'>Total</h1>
                  <h2>$0.00</h2>
                </div>
              )}

              <div className='text-center'>
                <button
                  onClick={() => setShowform(true)}
                  className='text-2xl font-bold bg-black text-white px-9 py-3 rounded-xl'>
                  Confirm Order
                </button>
                {showform && (
                  <Confirmorderform onClose={() => setShowform(false)} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addtocart;
