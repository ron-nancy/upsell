import { asset } from "@/lib/asset";

export function ExpertsSay() {
  return (
    <section className="bg-[#FCF7ED] py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-display font-semibold text-[40px] lg:text-[56px] text-[#FF30CC] leading-tight">
          What the Experts Say
        </h2>
        <p className="font-body text-[18px] text-[#1a1a1a] mt-2">
          Trusted by medical professionals and sexual health experts
        </p>

        <div className="mt-12 bg-white rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/images/Image_Dr._Angela_Wright.png")}
              alt="Dr. Angela Wright"
              className="w-full aspect-square object-cover rounded-2xl"
            />
            <div>
              <p className="font-body text-[22px] leading-[1.4] text-[#1a1a1a] text-left">
                &ldquo;As a doctor who focuses on sexual health, I frequently recommend the Lem as a high quality, beginner friendly suction toy. It&rsquo;s particularly useful for women who sometimes find they become less responsive to vibration after menopause or cancer.&rdquo;
              </p>
              <hr className="border-t border-[#e6dcc8] my-6" />
              <p className="font-display font-bold text-[20px] text-[#FF30CC] text-left">
                Dr. Angela Wright
              </p>
              <p className="font-body text-[14px] text-[#6b6357] mt-1 text-left">
                GP, Clinical Sexologist, and BMS Registered Menopause Specialist
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
