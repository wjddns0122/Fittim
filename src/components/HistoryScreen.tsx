import { ArrowLeft, Calendar } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HistoryScreenProps {
  onBack: () => void;
}

export function HistoryScreen({ onBack }: HistoryScreenProps) {
  const [selectedFilter, setSelectedFilter] = useState('전체');

  const filters = ['전체', '이번 주', '이번 달', '3개월'];

  const outfitHistory = [
    { id: 1, name: '데일리 미니멀 룩', date: '2일 전', tags: ['#캠퍼스', '#꾸안꾸'] },
    { id: 2, name: '클래식 캐주얼', date: '4일 전', tags: ['#출근', '#깔끔'] },
    { id: 3, name: '어반 스트릿 무드', date: '1주 전', tags: ['#카페', '#스트릿'] },
    { id: 4, name: '모던 비즈니스', date: '1주 전', tags: ['#출근', '#모던'] },
    { id: 5, name: '위크엔드 룩', date: '2주 전', tags: ['#데이트', '#편안함'] },
    { id: 6, name: '스포티 캐주얼', date: '2주 전', tags: ['#운동', '#활동적'] },
  ];

  return (
    <>
      {/* Top Bar */}
      <header className="flex items-center justify-between px-6 pt-14 pb-4 border-b border-[#EAEAEA]">
        <button onClick={onBack} className="p-1">
          <ArrowLeft className="w-5 h-5 text-[#1A1A1A]" strokeWidth={1.5} />
        </button>
        <h1 className="text-[15px] text-[#1A1A1A]" style={{ fontWeight: 400 }}>
          코디 히스토리
        </h1>
        <button className="p-1">
          <Calendar className="w-5 h-5 text-[#1A1A1A]" strokeWidth={1.5} />
        </button>
      </header>

      {/* Filter Chips */}
      <div className="px-6 pt-5 pb-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                selectedFilter === filter
                  ? 'bg-[#1A1A1A] text-white'
                  : 'bg-white text-[#9C9C9C] border border-[#EAEAEA] hover:border-[#1A1A1A]'
              }`}
            >
              <span className="text-[13px]" style={{ fontWeight: 300 }}>
                {filter}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* History List */}
      <div className="flex-1 overflow-y-auto pb-20 px-6">
        <div className="grid grid-cols-2 gap-4">
          {outfitHistory.map((outfit) => (
            <div key={outfit.id} className="group">
              <div className="aspect-[3/4] bg-[#FAFAFA] rounded-2xl overflow-hidden mb-3 border border-[#F0F0F0]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
                  alt={outfit.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-[14px] text-[#1A1A1A] mb-1" style={{ fontWeight: 300 }}>
                  {outfit.name}
                </p>
                <p className="text-[11px] text-[#9C9C9C] mb-2" style={{ fontWeight: 300 }}>
                  {outfit.date}
                </p>
                <div className="flex flex-wrap gap-1">
                  {outfit.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-full bg-[#F7F7F7] text-[#6B6B6B] text-[10px]"
                      style={{ fontWeight: 300 }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
