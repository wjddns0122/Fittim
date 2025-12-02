interface ChipGroupProps {
  label: string;
  chips: string[];
  selected: string | null;
  onSelect: (chip: string) => void;
}

export function ChipGroup({ label, chips, selected, onSelect }: ChipGroupProps) {
  return (
    <div>
      <label className="text-[12px] tracking-[0.05em] mb-3 block text-[#6B6B6B]" style={{ fontWeight: 300 }}>
        {label}
      </label>
      <div className="flex flex-wrap gap-2">
        {chips.map((chip) => (
          <button
            key={chip}
            onClick={() => onSelect(chip)}
            className={`px-5 py-2.5 rounded-full border transition-all ${
              selected === chip
                ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white'
                : 'border-[#E0E0E0] bg-white text-[#1A1A1A] hover:border-[#74A8FF] hover:bg-[#F7F7F7]'
            }`}
          >
            <span className="text-[13px]" style={{ fontWeight: 300 }}>
              {chip}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
