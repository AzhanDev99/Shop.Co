import Check from "./Check"


function Page1() {
  return (
    <>
      {/* height 88vh ha kynky navbar 12vh ka ha  */}
      {/* absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  */}
      <div className='h-[88vh] relative bg-green-950'>
        <div className='flex relative h-[82%] w-screen bg-amber-500 justify-center items-center'>



        <Check />




          <div className='lind  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between items-center gap-10 flex-col py-14 text-4xl whitespace-nowrap z-20 '  >
            <h1>Lorem ipsum dolor sit amet.</h1>
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <h1>Lorem ipsum dolor sit amet.</h1>
          </div>






        </div>

        <div className='absolute bg-blue-950 h-[18vh] w-screen bottom-0'>

        </div>
      </div>
    </>
  );
}

export default Page1;
