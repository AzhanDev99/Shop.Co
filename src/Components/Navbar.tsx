import Logo from "../assets/Projectimages/logoSHOP.CO.png";
import CartPlusProfile from "../assets/Projectimages/cart+profile.png";
import SearchVector from "../assets/Projectimages/SearchVector.png";
import CrossVector from "../assets/Projectimages/CrossVector.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { products } from "../Data/Product";
import type { Product } from "../Data/Product";
import { useCart } from "../Context/CartContext";

const MAX_SUGGESTIONS = 3;

function Navbar() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<Product[]>([]);
  const [showsignup ,setShowsignup] =useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { cart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => {
      const q = query.trim().toLowerCase();
      if (!q) {
        setResult([]);
        return;
      }
      const filtered = products.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
      setResult(filtered.slice(0, MAX_SUGGESTIONS));
    }, 160);
    return () => clearTimeout(t);
  }, [query]);

  // click outside to close
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setResult([]);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // enter opens first result
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && result.length > 0) {
      navigate(`/Productdetails/${result[0].id}`, {
        state: { product: result[0] },
      });
      setQuery("");
      setResult([]);
    }
  };


  return (
    <>
    {/* ToP wala Banner */}

    {showsignup && ( // agar true hai tabhi div render hoga
      <div className="w-full bg-black h-[38px] text-white center text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] ">
        
        <h1>Sign up and get 20% off to your first order. Sign up now</h1>
        <img
          className="w-3 h-3 absolute lg:right-[108px] right-7 cursor-pointer  "
          src={CrossVector}
          alt="close"
          onClick={()=> setShowsignup(false)}
        />
      </div>
      )}





      {/* <div className="w-full bg-black h-[38px] text-white center text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] ">
        
        <h1>Sign up and get 20% off to your first order. Sign up now</h1>
        <img
          className="w-3 h-3 absolute lg:right-[108px] right-7 cursor-pointer  "
          src={CrossVector}
          alt="close"
          onClick={()=> setShowsignup(false)}
        />
      </div> */}


          {/* Navbar */}

      <div className="px-[100px] py-[10px] w-full center">
        <div className="w-[1240px] h-[48px] bg-white center gap-[50px]">
          {/* logo */}
          <img src={Logo} alt="" />

          {/* navbar-titletles */}
          <div className="flex gap-[24px] center">
            <Link to={"/"}>
              <h1>Home</h1>
            </Link>
            <Link to={"ProdctPage"}>
              <h1>Products</h1>
            </Link>
            <Link to={"About"}>
              <h1>About</h1>
            </Link>
          </div>

          {/* search vector */}
          <div className="w-[500px] h-[48px] px-[12px] py-[16px] rounded-[62px] bg-[#F0F0F0] gap-4 center relative">
            <img src={SearchVector} alt="" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search for products..."
              className="w-full rounded-full px-4 py-2 focus:outline-none"
            />
            {result.length > 0 && (
              <ul className="absolute left-0 top-15 right-0 mt-2 bg-white border rounded-md shadow-lg max-h-72 overflow-auto z-50">
                {result.map((p) => (
                  <li key={p.id}>
                    <Link
                      to={`/Productdetails/${p.id}`}
                      state={{ product: p }}
                      onClick={() => {
                        setQuery("");
                        setResult([]);
                      }}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50"
                    >
                      <img
                        src={p.img}
                        alt={p.title}
                        className="h-12 w-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-800">
                          {p.title}
                        </div>
                        <div className="text-xs text-gray-500">
                          {p.category} • Rs {p.price}
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* cart vector */}
          <Link to={"/cart"} className="relative">
            <span
              className="absolute bg-black -top-2 -left-2 w-5 h-5 p-1 rounded-full
            font-bold text-white flex justify-center items-center text-sm
            "
            >
              {cart.length}
            </span>
            <img src={CartPlusProfile} alt="" />{" "}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;

