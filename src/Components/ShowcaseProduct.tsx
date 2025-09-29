// type ShowcaseProductProps
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { products } from "../Data/Product";

type ShowcaseProductProps = {
  ProductMainHeading?: string;
  viewallbutton?: string;
  to: string;
  filtertype: "NewArrival" | "BestProducts";
};

function ShowcaseProduct({
  ProductMainHeading,
  viewallbutton,
  // to,
  filtertype,
}: ShowcaseProductProps) {
  let filteredproducts:any = [];

  if (filtertype === "NewArrival"){
//  New arrivals → latest date ke hisaab se 4 products
     filteredproducts = [...products]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 4);
  }
  // bestprodts → latest date ke hisaab se 4 products
  else if ( filtertype === "BestProducts"){
    filteredproducts = products.filter((item)=>typeof item.rating ==="number" && item.rating>=5) .slice(0,4)
  }


  return (
    <div className='h-[95vh] w-screen flex items-center justify-evenly flex-col'>
      <h1 className='text-5xl pb-9 FontAntonio font-extrabold'>
        {ProductMainHeading}
      </h1>

      <div className='flex gap-[20px]'>
        {filteredproducts.map((products:any) => (
          <ProductCard
            key={products.id}
            image={products.img}
            producttitle={products.title}
            ProductRatings={products.rating.toString()}
            ProductPrize={`$${products.price}`}
          />
        ))}
      </div>

      <Link to={"ProdctPage"}>
        <button className='w-[150px] h-[48px] border-black/10 border-2 rounded-[62px] font-semibold'>
          {viewallbutton}
        </button>
      </Link>
    </div>
  );
}

export default ShowcaseProduct;
