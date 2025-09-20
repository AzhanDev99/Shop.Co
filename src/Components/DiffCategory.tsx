type DiffCategoryProps = {
  image?: string;
  imgmargintop?:string;
  imgmarginleft?:string;
  imgwidth?:string;
  imgheight?:string;

  heading?: string;
  headingtextcolor?:string;
  
  subheading?: string;
  headingtwobottom?:string;
  fontsize?: string;
  paddingleft?: string;
  height?: string;
  width?: string;
  bgColor?: string;
};

function DiffCategory({
  image,
  heading,
  subheading,
  height = "200px",
  width = "150px",
  bgColor = "bg-white",
  fontsize = "50px",
  paddingleft = "25px",
  imgmargintop="0px",
  imgmarginleft="0px",
  imgwidth="0px",
  imgheight="0px",
  headingtwobottom="0px",
  headingtextcolor="0px"
}: DiffCategoryProps) {
  return (
    <div
      className={` ${bgColor} relative rounded-[25px] center h-[250px] w-[420px] overflow-hidden`}
      style={{ height, width }}>
      <img className={` absoulte z-10 object-cover`} style={{marginTop:imgmargintop, marginLeft:imgmarginleft, height:imgheight, width:imgwidth}} src={image} alt='' />
      <h1
        className={`absolute z-20 fontfamily text-[#b9e9e9] text-center`} style={{fontSize: fontsize, paddingLeft:paddingleft, color:headingtextcolor }}>
        {heading} 
      </h1>
      <h1
        className={`absolute z-20 fontfamily text-[#b9e9e9] text-center`} style={{fontSize: fontsize, paddingLeft:paddingleft, bottom:headingtwobottom, color:headingtextcolor  }}>
        {subheading}
      </h1>
    </div>
  );
}

export default DiffCategory;
