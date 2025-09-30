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
      <div>
        <img
          className="h-[250px] w-[250px] rounded-[20px] object-cover"
          src={image}
          alt=""
        />
        <h3 className="font-bold">{producttitle}</h3>

        <p className="flex">
          {Array.from({length: ProductRatings}, (_ ,i) => (<Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />))}
        </p>

        <h3 className="font-bold text-xl">{ProductPrize}</h3>
      </div>
    </>
  );
}
export default ProductCard;
