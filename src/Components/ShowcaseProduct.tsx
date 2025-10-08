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
  filtertype,
}: ShowcaseProductProps) {
  let filteredproducts: any = [];

  if (filtertype === "NewArrival") {
    //  New arrivals → latest date ke hisaab se 4 products
    filteredproducts = [...products]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 4);
  }
  // bestprodts → latest date ke hisaab se 4 products
  else if (filtertype === "BestProducts") {
    filteredproducts = products
      .filter((item) => typeof item.rating === "number" && item.rating >= 5)
      .slice(0, 4);
  }

  return (
    <div className='h-fit flex items-center gap-7 justify-evenly flex-col '>

      <h1 className='text-3xl md:text-5xl pb-0 md:pb-9  md:pt-7 pt-3 FontAntonio font-extrabold '>
        {ProductMainHeading}
      </h1>

      <div className='flex gap-[20px] w-[90%] md:w-fit overflow-x-auto '>
        {filteredproducts.map((products: any) => (
          <Link
            key={products.id}
            to={`/Productdetails/${products.id}`}
            state={{ product: products }}
            className='block'>
            <ProductCard
              key={products.id}
              image={products.img}
              producttitle={products.title}
              ProductRatings={products.rating.toString()}
              ProductPrize={`$${products.price}`}
            />
          </Link>
        ))}
      </div>

      <Link to={"ProdctPage"}>
        <button className='w-[150px] md:my-6 h-[48px] border-black/10 border-2 rounded-[62px] font-semibold scale-100 cursor-pointer
        hover:bg-black hover:text-white hover:scale-105 
        active:bg-white active:font-bold active:text-black
        transition duration-200'>
          {viewallbutton}
        </button>
      </Link>
    </div>
  );
}

export default ShowcaseProduct;
