// import { span } from "framer-motion/client";

function Navbar() {
  return (
    <>
      <div className='text-white h-[12vh] bg-black w-full flex justify-between px-8 items-center'>
        <div className='w-[20%] bg-red-950'>logo</div>
        <div className='bg-white rounded-3xl text-black flex justify-around h-[90%] w-[45%] items-center'>
          <h1> Home </h1>
          <h1>Categories </h1>
          <h1>About"</h1>
        </div>
        <div className='flex gap-5 w-[20%] bg-red-950 justify-between'>
          <div>search</div>
          <div>addto</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
