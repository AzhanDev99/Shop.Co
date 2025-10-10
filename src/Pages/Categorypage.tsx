import { useState } from "react";
import Productfiltersection from "../Components/Producfiltersection";
import ProductShowcasingsection from "../Components/ProductShowcasingsection";
import { SlidersHorizontal } from "lucide-react";

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
  const [showfilter, setShowfilter] = useState(false);

  const Productfilters = data.filter((p) => {
    const typefilter = filteretype ? p.type === filteretype : true;
    const sizefilter = filtersize ? p.sizes.includes(filtersize) : true;
    return typefilter && sizefilter;
  });

  return (
    <>
      <div>
        {/* straightline  */}

        <div className='h-fit w-full center md:py-10 py-4'>
          <h1 className='h-0.5 w-[80%] bg-black opacity-10'> </h1>
        </div>

        {/* Home>casual seen on page*/}

        <div className='md:pl-30 md:pb-5 px-10 flex justify-between items-center'>
          <div>
            <span className='text-black/50'>Home</span> &gt; {text}
          </div>
          {/* filtersection on mobile */}
          <div className='flex md:hidden  '>
            <button
              onClick={() => setShowfilter(true)}
              className='flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg shadow-md'>
              <SlidersHorizontal size={18} />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* remaining  page */}
        <div className='h-fit px-5 md:px-22 w-full flex flex-col md:flex-row gap-10 rounded-[20px]'>
          {/* Left section  */}
          {/* projec tfilter section */}
          <div className='hidden md:flex h-[1220px] w-[295px] rounded-[20px] flex-col gap-[24px] px-[24px] bg-white shadow-sm'>
            <Productfiltersection
              setFilteretype={setFilteretype}
              setFiltersize={setFiltersize}
              filters={filters}
              filteretype={filteretype}
              filtersize={filtersize}
            />
          </div>

          {/* Rightsection */}
          <div className='flex-1 h-fit'>
            <ProductShowcasingsection
              Productfilters={Productfilters}
              text={text}
            />
          </div>
        </div>

        {/* Overlay filter (mobile) */}
        {showfilter && (
          <>
            <div
              className='fixed inset-0 bg-black/50 z-40'
              onClick={() => setShowfilter(false)}></div>

            <div className='fixed top-0 left-0 h-full w-3/4 max-w-[300px] bg-white z-50 p-5 overflow-y-auto transition-all duration-300'>
              <div className='flex justify-between items-center mb-4'>
                <h2 className='text-lg font-semibold'>Filters</h2>
                <button
                  onClick={() => setShowfilter(false)}
                  className='text-black text-xl font-bold'>
                  ×
                </button>
              </div>
              <Productfiltersection
                setFilteretype={setFilteretype}
                setFiltersize={setFiltersize}
                filters={filters}
                filteretype={filteretype}
                filtersize={filtersize}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default Categorypage;
