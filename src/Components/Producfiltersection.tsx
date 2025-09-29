import { Link } from "react-router-dom";
import Filtervector from "../assets/Projectimages/filtervector.png";
import rightarrowvector from "../assets/Projectimages/rightarrowvector.png";
import upperarrowvector from "../assets/Projectimages/upperarrowvector.png";

import Casualffilter from "./Casualfilter";
import Casualheading from "./Casualheading";
import Sizebutton from "./Sizebutton";

type Producttype = "t-shirt" | "short-tshirt" | "hoodie" | "jeans" | "oversize";
type Productsizes =
  | "Small"
  | "X-Small"
  | "XX-Small"
  | "Medium"
  | "Large"
  | "X-Large"
  | "XX-Large";

type ProducfiltersectionProps = {
  setFilteretype: React.Dispatch<React.SetStateAction<Producttype | null>>;
  setFiltersize: React.Dispatch<React.SetStateAction<Productsizes | null>>;
  text?: string;
  filters: string[];
  filteretype: Producttype | null;
  filtersize: Productsizes | null;
};

function Productfiltersection({
  setFilteretype,
  setFiltersize,
  filters,
  filtersize,
  filteretype,
}: ProducfiltersectionProps) {
  return (
    <>
      <div>
        {/* filtermodification */}
        <div className="border-b border-black/10 py-5 pt-[20px]">
          <Casualheading
            text="Filter"
            img={Filtervector}
            imagewidth="20px"
            imageheight="18px"
          />
        </div>

        <div className="flex flex-col gap-4 pb-8">
          <Casualffilter
            text="All"
            onClick={() => setFilteretype(null)}
            selected={filteretype === null}
          />

          {filters.map((filters) => (
            <Casualffilter
              key={filters}
              text={filters}
              onClick={() => setFilteretype(filters as Producttype)}
              selected={filteretype === filters}
            />
          ))}
        </div>

        <div className="h-[250px] bg-red-450 w-[240px]">
          <div className=" pb-7">
            <Casualheading
              text="Size"
              img={upperarrowvector}
              imagewidth="20px"
              imageheight="15px"
            />
          </div>

          <div className="flex flex-wrap gap-2 border-b border-black/10 pb-5">
            <Sizebutton
              text="View All Sizes"
              onClick={() => setFiltersize(null)}
              selected={filtersize === null}
            />
            <Sizebutton
              text="X-Small"
              onClick={() => setFiltersize("X-Small")}
              selected={filtersize === "X-Small"}
            />
            <Sizebutton
              text="Small"
              onClick={() => setFiltersize("Small")}
              selected={filtersize === "Small"}
            />
            <Sizebutton
              text="Medium"
              onClick={() => setFiltersize("Medium")}
              selected={filtersize === "Medium"}
            />
            <Sizebutton
              text="Large"
              onClick={() => setFiltersize("Large")}
              selected={filtersize === "Large"}
            />
            <Sizebutton
              text="X-Large"
              onClick={() => setFiltersize("X-Large")}
              selected={filtersize === "X-Large"}
            />
            <Sizebutton
              text="XX-Large"
              onClick={() => setFiltersize("XX-Large")}
              selected={filtersize === "XX-Large"}
            />
          </div>
        </div>

        {/* dressstyle */}

        <div className="pt-15">
          <div className=" pt-3">
            <Casualheading
              text="Dress Style"
              img={upperarrowvector}
              imagewidth="20px"
              imageheight="15px"
            />
          </div>
          <div className="flex flex-col gap-6 pt-5">
            <Link to={"/Casual"}>
              <Casualffilter text="Casual" img={rightarrowvector} />
            </Link>
            <Link to={"/Formal"}>
              {" "}
              <Casualffilter text="Formal" img={rightarrowvector} />
            </Link>
            <Link to={"/Party"}>
              {" "}
              <Casualffilter text="Party" img={rightarrowvector} />
            </Link>
            <Link to={"/Gym"}>
              <Casualffilter text="Gym" img={rightarrowvector} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Productfiltersection;
