import { Star } from "lucide-react";

type ProductCardProps = {
  image?: string;
  producttitle?: string;
  ProductRatings: number;
  ProductPrize?: string;
};

function ProductCard({
  image,
  producttitle,
  ProductRatings,
  ProductPrize,
}: ProductCardProps) {
  return (
    <>
      <div className="py-4 w-[190px] md:w-[250px] flex-shrink-0 opacity-75 hover:opacity-100 hover:scale-100 scale-95 transition-all flex flex-col items-center md:items-baseline">
        <img
          className="md:h-[250px] h-[150px] md:w-[250px] w-[150px] rounded-[20px] object-cover"
          src={image}
          alt=""
        />
        <h3 className="font-bold ">{producttitle}</h3>

        <p className="flex">
          {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={
                      i < ProductRatings
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-black fill-transparent"
                    }
                  />
                ))}
        </p>

        <h3 className="font-bold text-xl">{ProductPrize}</h3>
      </div>
    </>
  );
}
export default ProductCard;
