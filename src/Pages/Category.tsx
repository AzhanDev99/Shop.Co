import DiffCategory from "../Components/DiffCategory";
// import perfumebanner from "../assets/Projectimages/difcategoryperfume.png"
import perfumebanner from "../assets/Projectimages/Untitled design (2).png"

function Category() {
  return (
    <>
      <div className='h-[88vh] w-[100%] bg-custom-gradient'>
        <h1 className='bg-red-400 text-5xl h-[12vh] center text-green-950 '>
          Product Categories
        </h1>

        <div className="flex gap-7 h-full w-full flex-wrap px-16 pt-11">


<DiffCategory 
image={perfumebanner}
heading="The Perfume "
subheading=" Gallery"
fontsize="50px"
paddingleft="150px"
height="250px"
width="420px"
bgColor="bg-green-600"
headingtextcolor="#b9e9e9"
headingtwobottom="25px"
imgmargintop="0px"
imgmarginleft="0px"
imgheight="100%"
imgwidth="100%"
 />

 <DiffCategory 
image="https://www.sclothers.com/cdn/shop/files/1_290e49bc-daf0-4d95-bc2f-6a2211c9bfe0.jpg?v=1686772280&width=720"
heading="Headwear"
subheading="Heaven"
fontsize="50px"
paddingleft="50px"
height="250px"
width="320px"
bgColor="bg-[#F6F6F6]"
headingtextcolor="black"
imgmargintop="20px"
imgmarginleft="-40px"
imgheight="100%"
imgwidth="80%"
 />

    {/* 


    <div className="relative rounded-[25px] center h-[250px] w-[320px] bg-[#F6F6F6] overflow-hidden" >
        <img className="absoulte z-10 object-cover ml-[-65px] mt-8 w-[80%] h-[100%] " src="https://www.sclothers.com/cdn/shop/files/1_290e49bc-daf0-4d95-bc2f-6a2211c9bfe0.jpg?v=1686772280&width=720" alt="" />
        <h1 className="absolute z-20 fontfamily text-3xl left-5 top-2 text-black   text-center">Headwear  </h1>
        <h1 className="absolute z-20 fontfamily text-3xl right-5 bottom-8 text-black   text-center"> Heaven</h1>
    </div>
    <div className="relative rounded-[25px] center h-[250px] w-[320px] bg-green-500 overflow-hidden" >
        <img className="absoulte z-10 object-cover  " src={perfumebanner} alt="" />
        <h1 className="absolute z-20 fontfamily text-5xl pl-[150px] text-[#b9e9e9] text-center">The Perfume <br />  Gallery</h1>
    </div>


   <div className="relative rounded-[25px] center h-[250px] w-[320px] bg-green-500 overflow-hidden" >
        <img className="absoulte z-10 object-cover  " src={perfumebanner} alt="" />
        <h1 className="absolute z-20 fontfamily text-5xl pl-[150px] text-[#b9e9e9] text-center">The Perfume <br />  Gallery</h1>
    </div>
    <div className="relative rounded-[25px] center h-[250px] w-[320px] bg-green-500 overflow-hidden" >
        <img className="absoulte z-10 object-cover  " src={perfumebanner} alt="" />
        <h1 className="absolute z-20 fontfamily text-5xl pl-[150px] text-[#b9e9e9] text-center">The Perfume <br />  Gallery</h1>
    </div>
    <div className="relative rounded-[25px] center h-[250px] w-[420px] bg-green-500 overflow-hidden" >
        <img className="absoulte z-10 object-cover  " src={perfumebanner} alt="" />
        <h1 className="absolute z-20 fontfamily text-5xl pl-[150px] text-[#b9e9e9] text-center">The Perfume <br />  Gallery</h1>
    </div> */}


        </div>
      </div>
    </>
  );
}

export default Category;
