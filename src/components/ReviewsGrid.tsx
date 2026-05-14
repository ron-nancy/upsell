import { StarFilled, VerifiedBadge } from "@/components/icons";
import { asset } from "@/lib/asset";

type Review = {
  name: string;
  date: string;
  image: string;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Jennifer D.",
    date: "5/11/2026",
    image: "/images/IMG_3322.jpg",
    text: "Love it, very quiet and discrete. Hits the spot!! Great for use on your own or with your partner.",
  },
  {
    name: "Brigitte P.",
    date: "4/23/2026",
    image: "/images/IMG_3323.jpg",
    text: "Absolutely amazing!!! Buy it...this one won't be gathering dust in a drawer.",
  },
  {
    name: "Angela S.",
    date: "5/14/2026",
    image: "/images/IMG_3324.jpg",
    text: "Wow... it was absolutely awesome!! I have not dated for a while and had some health issues. The Lemon was very successful.",
  },
  {
    name: "Lo T.",
    date: "4/19/2026",
    image: "/images/IMG_3325.jpg",
    text: "Lem was my very first toy. I was skeptical on the reviews, but once I tried it, I got addicted in less than minutes. I love it so much!",
  },
  {
    name: "Katy",
    date: "4/12/2026",
    image: "/images/IMG_3326.jpg",
    text: "First of all, the packaging is freaking adorable. But also? The actual product is everything they say it is.",
  },
  {
    name: "Christine D.",
    date: "5/4/2026",
    image: "/images/Untitled_Capture0007.jpg",
    text: "So amazing! Started on level 3 and it was so much.",
  },
  {
    name: "Jason M.",
    date: "4/23/2026",
    image: "/images/Untitled_Capture0776_2_4a5f299c-2c95-4dba-9f28-ab76844a5f11.webp",
    text: "Wife loves it, not much more to say. As good and maybe slightly better than the Rose in performance.",
  },
  {
    name: "Emily E.",
    date: "4/16/2026",
    image: "/images/Untitled_Capture0203.jpg",
    text: "OMG! My favourite vibe ever. Takes you up and down multiple times before you reach your climax.",
  },
  {
    name: "Sylwia B.",
    date: "4/7/2026",
    image: "/images/LOL1_eb49dfb5-0b1b-438d-b41e-dd27c75f2120.png",
    text: "This toy has been a delightful surprise! I've used it on my clitoris of course but also found it good elsewhere.",
  },
  {
    name: "Marie W.",
    date: "4/30/2026",
    image: "/images/LOL_2.png",
    text: "Not holding back!! You can literally use this discreetly. Quiet but powerful! Recommend highly!",
  },
  {
    name: "Bee B.",
    date: "5/5/2026",
    image: "/images/OH1.png",
    text: "As a menopausal woman I found vibrators dulled sensation. This little device gave me multiple orgasms. Thank you.",
  },
  {
    name: "Ann W.",
    date: "5/12/2026",
    image: "/images/OH_2.png",
    text: "My LEM has replaced all air pulsation toys in my bedside drawer! Level three and above have proved very successful.",
  },
];

export function ReviewsGrid() {
  return (
    <section className="bg-[#FCF7ED] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center flex flex-col items-center">
          <div className="flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarFilled key={i} className="w-6 h-6 text-[#FFB74A]" />
            ))}
          </div>
          <span className="font-display font-bold text-[32px] mt-2">4.8</span>
          <p className="font-body text-[14px] text-[#6b6357] mt-1">
            Based on 14,881 reviews
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
          {reviews.map((review, idx) => (
            <article
              key={idx}
              className="bg-white rounded-2xl p-4 border border-[#efe7d4] flex flex-col gap-3"
            >
              <img
                src={asset(review.image)}
                alt={review.name}
                className="w-full aspect-square object-cover rounded-xl"
              />
              <div className="flex items-center gap-1.5">
                <span className="font-display font-semibold text-sm text-[#1a1a1a]">
                  {review.name}
                </span>
                <VerifiedBadge className="w-4 h-4 text-[#FF30CC]" />
              </div>
              <p className="font-body text-[13px] text-[#6b6357]">{review.date}</p>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarFilled key={i} className="w-3.5 h-3.5 text-[#FFB74A]" />
                ))}
              </div>
              <p className="font-body text-[14px] text-[#1a1a1a] leading-[1.5] line-clamp-5">
                {review.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="font-display font-semibold text-[14px] tracking-wide border border-[#FF30CC] text-[#FF30CC] rounded-full px-8 py-3 hover:bg-[#FF30CC] hover:text-white transition-colors">
            Show more reviews
          </button>
        </div>
      </div>
    </section>
  );
}
