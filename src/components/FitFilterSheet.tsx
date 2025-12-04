import { X } from 'lucide-react';
import { useState } from 'react';
import { ChipGroup } from './ChipGroup';

interface FitFilterSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: FilterOptions) => void;
}

export interface FilterOptions {
  location: string | null;
  mood: string | null;
  colors: string[];
  formality: number;
}

export function FitFilterSheet({ isOpen, onClose, onApply }: FitFilterSheetProps) {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [formality, setFormality] = useState(50);

  const locations = ['캠퍼스', '출근', '데이트', '카페', '집앞', '여행'];
  const moods = ['꾸안꾸', '미니멀', '스트릿', '깔끔', '모던', '캐주얼'];
  const colors = [
    { name: '블랙', color: '#1A1A1A' },
    { name: '화이트', color: '#FFFFFF' },
    { name: '베이지', color: '#D4C4B0' },
    { name: '네이비', color: '#1B2845' },
    { name: '그레이', color: '#9C9C9C' },
    { name: '카키', color: '#7D8471' }
  ];

  const toggleColor = (colorName: string) => {
    if (selectedColors.includes(colorName)) {
      setSelectedColors(selectedColors.filter(c => c !== colorName));
    } else {
      setSelectedColors([...selectedColors, colorName]);
    }
  };

  const handleApply = () => {
    onApply({
      location: selectedLocation,
      mood: selectedMood,
      colors: selectedColors,
      formality
    });
    onClose();
  };

  const handleReset = () => {
    setSelectedLocation(null);
    setSelectedMood(null);
    setSelectedColors([]);
    setFormality(50);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Bottom Sheet */}
      <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[24px] z-50 max-w-[390px] mx-auto animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-[#F0F0F0]">
          <h2 className="text-[15px] text-[#1A1A1A]" style={{ fontWeight: 400 }}>
            코디 조절
          </h2>
          <button onClick={onClose} className="p-1">
            <X className="w-5 h-5 text-[#1A1A1A]" strokeWidth={1.5} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[70vh] px-6 py-6 space-y-8">
          {/* Location */}
          <ChipGroup
            label="장소"
            chips={locations}
            selected={selectedLocation}
            onSelect={setSelectedLocation}
          />

          {/* Mood */}
          <ChipGroup
            label="무드"
            chips={moods}
            selected={selectedMood}
            onSelect={setSelectedMood}
          />

          {/* Color Preference */}
          <div>
            <label className="block text-[13px] text-[#1A1A1A] mb-3" style={{ fontWeight: 400 }}>
              선호 색상
            </label>
            <div className="grid grid-cols-3 gap-2">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => toggleColor(color.name)}
                  className={`py-3 px-4 rounded-full text-[13px] transition-all flex items-center justify-center gap-2 ${
                    selectedColors.includes(color.name)
                      ? 'bg-[#74A8FF] text-white'
                      : 'bg-[#F7F7F7] text-[#1A1A1A]'
                  }`}
                  style={{ fontWeight: 300 }}
                >
                  <div 
                    className="w-3 h-3 rounded-full border border-[#E0E0E0]" 
                    style={{ backgroundColor: color.color }}
                  />
                  {color.name}
                </button>
              ))}
            </div>
          </div>

          {/* Formality Slider */}
          <div>
            <label className="block text-[13px] text-[#1A1A1A] mb-3" style={{ fontWeight: 400 }}>
              포멀 정도
            </label>
            <div className="space-y-3">
              <input
                type="range"
                min="0"
                max="100"
                value={formality}
                onChange={(e) => setFormality(Number(e.target.value))}
                className="w-full h-1 bg-[#F0F0F0] rounded-full appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #74A8FF 0%, #74A8FF ${formality}%, #F0F0F0 ${formality}%, #F0F0F0 100%)`
                }}
              />
              <div className="flex justify-between text-[11px] text-[#9C9C9C]" style={{ fontWeight: 300 }}>
                <span>캐주얼</span>
                <span>포멀</span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="px-6 py-4 border-t border-[#F0F0F0] flex gap-3">
          <button
            onClick={handleReset}
            className="flex-1 py-4 bg-white text-[#9C9C9C] rounded-full text-[15px] border border-[#E0E0E0] hover:bg-[#F7F7F7] transition-colors"
            style={{ fontWeight: 400 }}
          >
            초기화
          </button>
          <button
            onClick={handleApply}
            className="flex-1 py-4 bg-[#1A1A1A] text-white rounded-full text-[15px] hover:bg-[#000000] transition-colors"
            style={{ fontWeight: 400 }}
          >
            적용하기
          </button>
        </div>
      </div>

      <style>{`
        .animate-slide-up {
          animation: slideUp 0.3s ease-out;
        }
        
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #74A8FF;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #74A8FF;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </>
  );
}
