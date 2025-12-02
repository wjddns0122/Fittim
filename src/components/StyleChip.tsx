interface StyleChipProps {
  label: string;
}

export function StyleChip({ label }: StyleChipProps) {
  return (
    <span className="px-4 py-2.5 rounded-full bg-white border border-[#E0E0E0] text-[#1A1A1A] text-[13px]" style={{ fontWeight: 300 }}>
      {label}
    </span>
  );
}
