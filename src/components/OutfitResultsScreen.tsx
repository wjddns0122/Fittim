import { ArrowLeft, SlidersHorizontal } from 'lucide-react';
import { OutfitResultCard } from './OutfitResultCard';

interface OutfitResultsScreenProps {
  onBack: () => void;
}

export function OutfitResultsScreen({ onBack }: OutfitResultsScreenProps) {
  const outfits = [
    {
      id: 1,
      name: '데일리 미니멀 룩',
      items: ['화이트 베이직 티셔츠', '와이드 데님 팬츠', '코튼 오버핏 셔츠', '화이트 스니커즈'],
      tags: ['#캠퍼스', '#꾸안꾸', '#편안함']
    },
    {
      id: 2,
      name: '클래식 캐주얼',
      items: ['스트라이프 니트', '슬림 치노팬츠', '트렌치 코트', '로퍼']
      ,
      tags: ['#출근', '#깔끔', '#모던']
    },
    {
      id: 3,
      name: '어반 스트릿 무드',
      items: ['오버핏 후디', '카고 팬츠', '볼륨 패딩', '청키 스니커즈'],
      tags: ['#카페', '#스트릿', '#트렌디']
    }
  ];

  return (
    <>
      {/* Top Bar */}
      <header className="flex items-center justify-between px-6 pt-14 pb-4 border-b border-[#F0F0F0]">
        <button onClick={onBack} className="p-1">
          <ArrowLeft className="w-5 h-5 text-[#1A1A1A]" strokeWidth={1.5} />
        </button>
        <h1 className="text-[15px] tracking-[0.05em] text-[#1A1A1A]" style={{ fontWeight: 400 }}>
          오늘의 FITTIM
        </h1>
        <button className="p-1">
          <SlidersHorizontal className="w-5 h-5 text-[#1A1A1A]" strokeWidth={1.5} />
        </button>
      </header>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-32">
        {/* Intro Text */}
        <div className="px-6 pt-6 pb-4">
          <p className="text-[13px] text-[#9C9C9C]" style={{ fontWeight: 300 }}>
            오늘을 위한 코디 3가지를 준비했어요.
          </p>
        </div>

        {/* Outfit Cards */}
        <div className="px-6 space-y-5 pb-6">
          {outfits.map((outfit) => (
            <OutfitResultCard
              key={outfit.id}
              name={outfit.name}
              items={outfit.items}
              tags={outfit.tags}
            />
          ))}
        </div>

        {/* Regenerate Button */}
        <div className="px-6 pb-6">
          <button className="w-full py-4 bg-white text-[#1A1A1A] rounded-full text-[15px] border border-[#E0E0E0] hover:bg-[#F7F7F7] transition-colors" style={{ fontWeight: 400 }}>
            다시 생성
          </button>
        </div>
      </div>
    </>
  );
}
