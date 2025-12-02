import { User } from 'lucide-react';
import { useState } from 'react';
import { ChipGroup } from './ChipGroup';
import { OutfitCard } from './OutfitCard';

interface HomeScreenProps {
  onGenerateOutfit: () => void;
}

export function HomeScreen({ onGenerateOutfit }: HomeScreenProps) {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const locations = ['캠퍼스', '출근', '데이트', '카페', '집앞'];
  const moods = ['꾸안꾸', '미니멀', '스트릿', '깔끔'];

  const recentOutfits = [
    { id: 1, caption: '오늘의 캠퍼스 룩' },
    { id: 2, caption: '데이트 코디' },
    { id: 3, caption: '미니멀 출근룩' }
  ];

  return (
    <>
      {/* Header */}
      <header className="flex items-center justify-between px-6 pt-14 pb-6">
        <div className="flex-1" />
        <h1 className="text-[13px] tracking-[0.15em]">FITTIM</h1>
        <div className="flex-1 flex justify-end">
          <button className="w-9 h-9 rounded-full bg-[#F7F7F7] flex items-center justify-center">
            <User className="w-4 h-4 text-[#1A1A1A]" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-20">
        {/* Hero Section */}
        <section className="px-8 pt-8 pb-10">
          <h2 className="text-[28px] leading-[1.3] mb-3 text-[#1A1A1A]" style={{ fontWeight: 300 }}>
            남들 말고,
            <br />
            진짜 나를 입는 시간 10초.
          </h2>
          <p className="text-[13px] tracking-[0.1em] mb-8 text-[#1A1A1A]" style={{ fontWeight: 300 }}>
            FITTIM, Fit ME.
          </p>
          <button 
            onClick={onGenerateOutfit}
            className="w-full py-4 bg-[#1A1A1A] text-white rounded-full text-[15px] tracking-[-0.01em] hover:bg-[#2A2A2A] transition-colors"
          >
            오늘의 FITTIM 만들기
          </button>
        </section>

        {/* Chip Groups */}
        <section className="px-8 pb-8 space-y-6">
          <ChipGroup
            label="오늘 어디 가?"
            chips={locations}
            selected={selectedLocation}
            onSelect={setSelectedLocation}
          />
          <ChipGroup
            label="오늘 무드는?"
            chips={moods}
            selected={selectedMood}
            onSelect={setSelectedMood}
          />
        </section>

        {/* Recent Outfits */}
        <section className="px-8 pb-8">
          <h3 className="text-[13px] tracking-[0.05em] mb-4 text-[#1A1A1A]" style={{ fontWeight: 400 }}>
            최근 생성한 코디
          </h3>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-8 px-8">
            {recentOutfits.map((outfit) => (
              <OutfitCard key={outfit.id} caption={outfit.caption} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
