import { X } from 'lucide-react';
import { useState } from 'react';

interface ShopFilterSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: ShopFilterOptions) => void;
}

export interface ShopFilterOptions {
  priceRange: [number, number];
  brands: string[];
  sortBy: string;
  onlyDiscount: boolean;
}

export function ShopFilterSheet({ isOpen, onClose, onApply }: ShopFilterSheetProps) {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('추천순');
  const [onlyDiscount, setOnlyDiscount] = useState(false);

  const brands = [
    '무신사 스탠다드',
    '디스이즈네버댓',
    '커버낫',
    '유니폼브릿지',
    '마르디 메크르디',
    '아디다스',
    '나이키',
    '유니클로'
  ];

  const sortOptions = ['추천순', '낮은 가격순', '높은 가격순', '인기순', '최신순'];

  const toggleBrand = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handleApply = () => {
    onApply({
      priceRange,
      brands: selectedBrands,
      sortBy,
      onlyDiscount
    });
    onClose();
  };

  const handleReset = () => {
    setPriceRange([0, 200000]);
    setSelectedBrands([]);
    setSortBy('추천순');
    setOnlyDiscount(false);
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
            필터
          </h2>
          <button onClick={onClose} className="p-1">
            <X className="w-5 h-5 text-[#1A1A1A]" strokeWidth={1.5} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[70vh] px-6 py-6 space-y-8">
          {/* Sort By */}
          <div>
            <label className="block text-[13px] text-[#1A1A1A] mb-3" style={{ fontWeight: 400 }}>
              정렬
            </label>
            <div className="flex flex-wrap gap-2">
              {sortOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setSortBy(option)}
                  className={`py-2.5 px-4 rounded-full text-[13px] transition-all ${
                    sortBy === option
                      ? 'bg-[#1A1A1A] text-white'
                      : 'bg-[#F7F7F7] text-[#1A1A1A] hover:bg-[#EAEAEA]'
                  }`}
                  style={{ fontWeight: 300 }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-[13px] text-[#1A1A1A] mb-3" style={{ fontWeight: 400 }}>
              가격대
            </label>
            <div className="space-y-3">
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="200000"
                  step="10000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-full h-1 bg-[#F0F0F0] rounded-full appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #74A8FF 0%, #74A8FF ${(priceRange[1] / 200000) * 100}%, #F0F0F0 ${(priceRange[1] / 200000) * 100}%, #F0F0F0 100%)`
                  }}
                />
              </div>
              <div className="flex justify-between text-[13px] text-[#1A1A1A]" style={{ fontWeight: 300 }}>
                <span>0원</span>
                <span className="text-[#74A8FF]" style={{ fontWeight: 400 }}>
                  {priceRange[1].toLocaleString('ko-KR')}원
                </span>
              </div>
            </div>
          </div>

          {/* Discount Only */}
          <div>
            <label className="flex items-center justify-between">
              <span className="text-[13px] text-[#1A1A1A]" style={{ fontWeight: 400 }}>
                할인 상품만 보기
              </span>
              <button
                onClick={() => setOnlyDiscount(!onlyDiscount)}
                className={`relative w-12 h-7 rounded-full transition-colors ${
                  onlyDiscount ? 'bg-[#74A8FF]' : 'bg-[#EAEAEA]'
                }`}
              >
                <div
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    onlyDiscount ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </label>
          </div>

          {/* Brands */}
          <div>
            <label className="block text-[13px] text-[#1A1A1A] mb-3" style={{ fontWeight: 400 }}>
              브랜드
            </label>
            <div className="flex flex-wrap gap-2">
              {brands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => toggleBrand(brand)}
                  className={`py-2.5 px-4 rounded-full text-[13px] transition-all ${
                    selectedBrands.includes(brand)
                      ? 'bg-[#74A8FF] text-white'
                      : 'bg-[#F7F7F7] text-[#1A1A1A] hover:bg-[#EAEAEA]'
                  }`}
                  style={{ fontWeight: 300 }}
                >
                  {brand}
                </button>
              ))}
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
