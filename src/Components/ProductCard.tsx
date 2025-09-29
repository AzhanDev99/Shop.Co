type ProductCardProps = {
  image?: string;
  producttitle?: string;
  ProductRatings?: string;
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
        <p>
          <img src={ProductRatings} alt="" />
        </p>
        <h3 className="font-bold text-xl">{ProductPrize}</h3>
      </div>
    </>
  );
}
export default ProductCard;
