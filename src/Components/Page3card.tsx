import { Link } from "react-router-dom";

type Page3cardProps ={
    image?:string;
    imagewidth?:string;
    card3heading?:string;
    to:string;
    

}



function Page3card ({image,imagewidth,to}:Page3cardProps){
    return(
        <>
        <div>
<Link to={to}>
            <div className="w-[407px] h-[289px] rounded-[20px]  " style={{width:imagewidth}}>
                <img className="absolute z-10 h-[289px] "  style={{width:imagewidth}}  src={image} alt="" />
                
            </div>
</Link>
        </div>
        </>
    )
}

export default Page3card;