interface SegmentedControlProps<T extends string> {
  options: T[];
  selected: T;
  onChange: (option: T) => void;
}

export function SegmentedControl<T extends string>({ 
  options, 
  selected, 
  onChange 
}: SegmentedControlProps<T>) {
  return (
    <div className="inline-flex bg-[#F7F7F7] rounded-full p-1 w-full">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`flex-1 py-2.5 rounded-full text-[14px] transition-all ${
            selected === option
              ? 'bg-white text-[#1A1A1A] shadow-sm'
              : 'bg-transparent text-[#9C9C9C]'
          }`}
          style={{ fontWeight: selected === option ? 400 : 300 }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
