import { TruckIcon, PackageIcon, ShieldIcon } from "@/components/icons";

const items = [
  { label: "Free shipping", Icon: TruckIcon },
  { label: "Discreet packaging", Icon: PackageIcon },
  { label: "30-day guarantee", Icon: ShieldIcon },
] as const;

export function AnnounceBar() {
  return (
    <div
      className="w-full bg-[#FF30CC] text-white"
      style={{ minHeight: 44 }}
      role="region"
      aria-label="Announcements"
    >
      <div className="flex items-center justify-center gap-4 md:gap-8 py-3 px-4">
        {items.map(({ label, Icon }) => (
          <div
            key={label}
            className="font-display flex items-center gap-2 text-[12px] md:text-[14px] font-medium text-white whitespace-nowrap"
          >
            <Icon width={18} height={18} className="text-white" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
