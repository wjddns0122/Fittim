interface InfoCardProps {
  label: string;
  value: string;
}

export function InfoCard({ label, value }: InfoCardProps) {
  return (
    <div className="bg-[#F7F7F7] rounded-2xl p-4 text-center">
      <p className="text-[11px] text-[#9C9C9C] mb-2" style={{ fontWeight: 300 }}>
        {label}
      </p>
      <p className="text-[15px] text-[#1A1A1A]" style={{ fontWeight: 400 }}>
        {value}
      </p>
    </div>
  );
}
