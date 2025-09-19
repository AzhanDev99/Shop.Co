import { Search, ShoppingCart } from "lucide-react";
import logo from "../assets/Projectimages/logo.png"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className='text-white h-[12vh] bg-custom-gradient w-full flex justify-between px-8 items-center'>
        <div className='w-[20%]'><img className="w-[70%]" src={logo} alt="logo" /></div>
        <div className='bg-white border-2 border-black rounded-3xl text-black flex justify-around h-[65%] w-[45%] items-center fontfamily text-xl font-bold'>
          <h1> Home </h1>
            <Link to='/Category'> <h1 >Categories </h1> </Link>
          
          <h1>About</h1>
        </div>
        <div className='flex w-[20%]  justify-between items-center px-[40px]'>
          <div className="navbarsearch  flex">< Search  color="#000" size={36} /></div>
          <div className="navbarcart"><ShoppingCart size={36} color="#000" /> </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
