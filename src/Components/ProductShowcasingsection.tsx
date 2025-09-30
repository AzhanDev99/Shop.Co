import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
// import Ratings from "../assets/Projectimages/Frame 35.png";

type Product = {
  id: number;
  title: string;
  img: string;
  price: number;
  rating: number;
  sizes: string[];
  type: string;
};

type ProductShowcasingsectionProps = {
  text?: string;
  Productfilters: Product[];
};

function ProductShowcasingsection({
  Productfilters,
  text,
}: ProductShowcasingsectionProps) {
  return (
    <>
      <div>
        <div className="h-[50px] w-full  flex justify-between items-center px-3 ">
          <h1 className="text-[32px] font-bold">{text}</h1>
          <p>Total number of products {Productfilters.length}</p>
        </div>

        <div className=" pt-3.5 items-center flex flex-wrap gap-5">
          {Productfilters.map((products) => (
            <Link
              key={products.id}
              to={`/Productdetails/${products.id}`}
              state={{ product: products }}
              className="block"
            >
              <ProductCard
                key={products.id}
                image={products.img}
                producttitle={products.title}
                ProductRatings={products.rating}
                ProductPrize={`$${products.price}`}
              />
            </Link>
          ))}
        </div>

        <div className="h-fit w-full center py-10">
          <h1 className="h-0.5 w-[80%] bg-black opacity-10 "> </h1>
        </div>
      </div>
    </>
  );
}

export default ProductShowcasingsection;
