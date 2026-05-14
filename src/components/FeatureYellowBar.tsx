type IconProps = { className?: string };

function SpiralIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="#FF30CC"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 20 m-2 0 a2 2 0 1 1 4 0 a4 4 0 1 1 -8 0 a6 6 0 1 1 12 0 a8 8 0 1 1 -16 0 a10 10 0 1 1 20 0" />
    </svg>
  );
}

function DropIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="#FF30CC"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 4 C20 4 8 18 8 26 a12 12 0 0 0 24 0 C32 18 20 4 20 4 z" />
    </svg>
  );
}

function CrossIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="#FF30CC"
      strokeWidth={4}
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M10 10 L30 30 M30 10 L10 30" />
    </svg>
  );
}

function HeartIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="#FF30CC"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 34 C20 34 6 24 6 14 a8 8 0 0 1 14 -5 a8 8 0 0 1 14 5 C34 24 20 34 20 34 z" />
    </svg>
  );
}

type Feature = {
  Icon: (props: IconProps) => React.ReactElement;
  label: string;
};

const features: Feature[] = [
  { Icon: SpiralIcon, label: "12 unique patterns" },
  { Icon: DropIcon, label: "Waterproof" },
  { Icon: CrossIcon, label: "Discreet shipping" },
  { Icon: HeartIcon, label: "Easy to use" },
];

export function FeatureYellowBar() {
  return (
    <section className="bg-[#F2E76B] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ Icon, label }) => (
          <div key={label} className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4">
              <Icon className="w-10 h-10" />
            </div>
            <span className="font-display font-semibold text-[20px] text-[#FF30CC]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
