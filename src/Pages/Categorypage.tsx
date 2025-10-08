// import { products } from "../Data/Product";
import { useState } from "react";
import Productfiltersection from "../Components/Producfiltersection";
import ProductShowcasingsection from "../Components/ProductShowcasingsection";

type Producttype = "t-shirt" | "short-tshirt" | "hoodie" | "jeans" | "oversize";
type Productsizes =
  | "Small"
  | "X-Small"
  | "XX-Small"
  | "Medium"
  | "Large"
  | "X-Large"
  | "XX-Large";

type CategorypageProps = {
  text?: string;
  data: Product[];
  filters: string[];
};

type Product = {
  id: number;
  img: string;
  title: string;
  price: number;
  rating: number;
  sizes: string[];
  type: string;
};

function Categorypage({ text, data, filters }: CategorypageProps) {
  const [filteretype, setFilteretype] = useState<Producttype | null>(null);
  const [filtersize, setFiltersize] = useState<Productsizes | null>(null);

  const Productfilters = data.filter((p) => {
    const typefilter = filteretype ? p.type === filteretype : true;
    const sizefilter = filtersize ? p.sizes.includes(filtersize) : true;
    return typefilter && sizefilter;
  });

  return (
    <>
      <div>
        {/* straightline  */}

        <div className="h-fit w-full center py-10">
          <h1 className="h-0.5 w-[80%] bg-black opacity-10"> </h1>
        </div>

        {/* Home>casual seen on page*/}

        <div className="pl-30">
          <span className="text-black/50">Home</span> &gt; {text}
        </div>

        {/* remaining  page */}

        <div className="h-fit px-22 w-full flex gap-10 rounded-[20px]  ">
          {/* Left section  */}
          {/* projec tfilter section */}

          <div className="h-[1220px] w-[295px] hidden md:flex rounded-[20px]  flex-col gap-[24px] px-[24px]">
            <Productfiltersection
              setFilteretype={setFilteretype}
              setFiltersize={setFiltersize}
              filters={filters}
              filteretype={filteretype}
              filtersize={filtersize}
            />
          </div>

          {/* Rightsection */}

          <div className="h-fit w-[825px] ">
            <ProductShowcasingsection
              Productfilters={Productfilters}
              text={text}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Categorypage;
