import Logo from "../assets/Projectimages/logoSHOP.CO.png";
import SearchVector from "../assets/Projectimages/SearchVector.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { products } from "../Data/Product";
import type { Product } from "../Data/Product";
import { useCart } from "../Context/CartContext";
import { MenuIcon, Search, ShoppingCart } from "lucide-react";
import TopSignupline from "../Components/TopSignupline";

function Navbar() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<Product[]>([]);
  const [menuopen, setMenuopen] = useState(false);
  const [searchopen, setSearchopen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { cart } = useCart();
  const navigate = useNavigate();
  const MAX_SUGGESTIONS = 5;

  const shownavtitles = () => {
    setMenuopen(!menuopen);
  };
  const mobilesearch = () => {
    setSearchopen(!searchopen);
  };

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
      <TopSignupline />

      {/* Navbar */}

      <div className='py-[10px] w-full center'>
        {/* navbar desktop */}

        <div className='w-full bg-white gap-[50px] relative justify-center items-center hidden md:flex '>
          {/* logo */}
          <img className='w-50' src={Logo} alt='Shop.cologo' />
          {/* navbar-titletles desktop */}
          <div className=' hidden md:flex space-x-6  '>
            <Link to={"/"}>
              <h1 className="hover:scale-105 scale-100 hover:font-bold transition-all">Home</h1>
            </Link>
            <Link to={"ProdctPage"}>
              <h1 className="hover:scale-105 scale-100 hover:font-bold transition-all"> Products</h1>
            </Link>
            <Link to={"About"}>
              <h1 className="hover:scale-105 scale-100 hover:font-bold transition-all">About</h1>
            </Link>
          </div>
          {/* search vector */}
          <div className='w-[500px] h-[48px] px-[12px] py-[16px] rounded-[62px] bg-[#F0F0F0] gap-4 center relative'>
            <img src={SearchVector} alt='' />
            <input
              type='text'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder='Search for products...'
              className='w-full rounded-full px-4 py-2 focus:outline-none'
            />
            {result.length > 0 && (
              <ul className='absolute left-0 top-15 right-0 mt-2 bg-white border rounded-md shadow-lg max-h-72 overflow-auto z-50'>
                {result.map((p) => (
                  <li key={p.id}>
                    <Link
                      to={`/Productdetails/${p.id}`}
                      state={{ product: p }}
                      onClick={() => {
                        setQuery("");
                        setResult([]);
                      }}
                      className='flex items-center gap-3 px-4 py-3 hover:bg-gray-50'>
                      <img
                        src={p.img}
                        alt={p.title}
                        className='h-12 w-12 object-cover rounded'
                      />
                      <div className='flex-1'>
                        <div className='text-sm font-medium text-gray-800'>
                          {p.title}
                        </div>
                        <div className='text-xs text-gray-500'>
                          {p.category} • $ {p.price}
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* cart vector */}
          <Link to={"/cart"} className='relative'>
            <span className='absolute bg-black -top-2 -left-2 w-5 h-5 p-1 rounded-full font-bold text-white flex justify-center items-center text-sm'>
              {cart.length}
            </span>
            <ShoppingCart />
          </Link>
        </div>

        {/* mobile ky liy responsiveness */}
        <div className='w-full bg-white flex place-items-center justify-between px-14  md:hidden '>
          {/* navbar-menu */}

          <button
            className='p-2 rounded-md bg-gray-200 z-20'
            onClick={shownavtitles}>
            <MenuIcon />
          </button>

          {/* logo */}
          <img className='w-22 h-5 ' src={Logo} alt='Shop.cologo' />
          {/* search vector */}

          {!searchopen ? (
            <button onClick={mobilesearch}>
              <Search />
            </button>
          ) : (
            <div className='flex items-center w-full max-w-xs absolute top-22 z-20 bg-white rounded-full px-4 py-2'>
              <input
                type='text'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder='Search...'
                className='w-full bg-transparent focus:outline-none'
              />
              <button onClick={() => setSearchopen(false)} className='ml-2'>
                ❌
              </button>

              {/* Search Results */}
              {result.length > 2 && (
                <ul className='absolute top-full left-0 right-0 mt-2 bg-white border rounded-md shadow-lg max-h-52 overflow-auto z-20'>
                  {result.map((p) => (
                    <li key={p.id}>
                      <Link
                        to={`/Productdetails/${p.id}`}
                        state={{ product: p }}
                        onClick={() => {
                          setQuery("");
                          setResult([]);
                          setSearchopen(false);
                        }}
                        className='flex items-center gap-3 px-4 py-3 hover:bg-gray-50'>
                        <img
                          src={p.img}
                          alt={p.title}
                          className='h-12 w-12 object-cover rounded'
                        />
                        <div className='flex-1'>
                          <div className='text-sm font-medium text-gray-800'>
                            {p.title}
                          </div>
                          <div className='text-xs text-gray-500'>
                            {p.category} • $ {p.price}
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* cart vector */}
          <Link to={"/cart"} className='relative'>
            <span className='absolute bg-black -top-2 -left-2 w-5 h-5 p-1 rounded-full font-bold text-white flex justify-center items-center text-sm'>
              {cart.length}
            </span>
            <ShoppingCart />
          </Link>
        </div>

        {menuopen && (
          <div className='absolute top-12 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 p-4 z-10'>
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
        )}
      </div>
    </>
  );
}

export default Navbar;
