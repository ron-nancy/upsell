import { asset } from "@/lib/asset";

type Product = {
  name: string;
  image: string;
  description: string;
  salePrice: string;
  regularPrice: string;
  save: string;
};

const products: Product[] = [
  {
    name: "Lolly Mini Wand",
    image: "/images/BerriTappingClitoralMassager1.png",
    description:
      "A versatile mini wand for steady vibrations that hit every right spot.",
    salePrice: "$69.00 USD",
    regularPrice: "$139.00 USD",
    save: "Save $70.00",
  },
  {
    name: "Avo Clitoral Massager",
    image:
      "/images/Untitled_Capture0776_2_4a5f299c-2c95-4dba-9f28-ab76844a5f11.webp",
    description:
      "A turbocharged clit suction with unmatched sensations for deep, powerful stimulation.",
    salePrice: "$99.00 USD",
    regularPrice: "$199.00 USD",
    save: "Save $100.00",
  },
  {
    name: "Oh-Oh-Oh Triple Bundle",
    image: "/images/OH1.png",
    description:
      "The ultimate triple threat featuring air-suction, rumbly vibrations, and a sleek bullet to hit every right spot.",
    salePrice: "$199.00 USD",
    regularPrice: "$399.00 USD",
    save: "Save $200.00",
  },
];

export function RelatedProducts() {
  return (
    <section className="bg-[#FCF7ED] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display font-semibold text-[32px] lg:text-[40px] text-[#1a1a1a] mb-10">
          You may also like
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <article
              key={product.name}
              className="relative group rounded-3xl overflow-hidden"
            >
              <div className="bg-[#F2E76B] aspect-square flex items-center justify-center p-8 relative">
                <img
                  src={asset(product.image)}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
                <span className="absolute top-3 left-3 bg-[#E4F260] text-[#1A1A1A] rounded-full px-3 py-1 font-display font-semibold text-xs">
                  {product.save}
                </span>
              </div>
              <h3 className="font-display font-semibold text-[22px] text-[#1a1a1a] mt-4">
                {product.name}
              </h3>
              <p className="font-body text-[15px] text-[#1a1a1a] mt-2 leading-[1.5]">
                {product.description}
              </p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-display font-bold text-[18px] text-[#FF30CC]">
                  {product.salePrice}
                </span>
                <span className="font-display line-through text-[14px] text-[#6b6357]">
                  {product.regularPrice}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
