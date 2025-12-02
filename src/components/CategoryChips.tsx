interface CategoryChipsProps {
  categories: string[];
  selected: string | null;
  onSelect: (category: string | null) => void;
}

export function CategoryChips({ categories, selected, onSelect }: CategoryChipsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 -mx-6 px-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(selected === category ? null : category)}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
            selected === category
              ? 'bg-[#1A1A1A] text-white'
              : 'bg-white text-[#6B6B6B] border border-[#E0E0E0] hover:border-[#1A1A1A]'
          }`}
        >
          <span className="text-[13px]" style={{ fontWeight: 300 }}>
            {category}
          </span>
        </button>
      ))}
    </div>
  );
}
