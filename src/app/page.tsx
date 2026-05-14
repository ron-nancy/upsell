import { AnnounceBar } from "@/components/AnnounceBar";
import { SaleBar } from "@/components/SaleBar";
import { Header } from "@/components/Header";
import { HeroProduct } from "@/components/HeroProduct";
import { WarningBanner } from "@/components/WarningBanner";
import { FeatureYellowBar } from "@/components/FeatureYellowBar";
import { ExpertsSay } from "@/components/ExpertsSay";
import { JoinWomen } from "@/components/JoinWomen";
import { UGCGrid } from "@/components/UGCGrid";
import { UsVsThem } from "@/components/UsVsThem";
import { FAQ } from "@/components/FAQ";
import { ReviewsGrid } from "@/components/ReviewsGrid";
import { RelatedProducts } from "@/components/RelatedProducts";
import { Footer } from "@/components/Footer";
import { StickyCartBar } from "@/components/StickyCartBar";

export default function Home() {
  return (
    <>
      <AnnounceBar />
      <SaleBar />
      <Header />
      <main className="bg-[#FCF7ED]">
        <HeroProduct />
        <WarningBanner />
        <FeatureYellowBar />
        <ExpertsSay />
        <JoinWomen />
        <UGCGrid />
        <UsVsThem />
        <FAQ />
        <ReviewsGrid />
        <RelatedProducts />
      </main>
      <Footer />
      <StickyCartBar />
    </>
  );
}
