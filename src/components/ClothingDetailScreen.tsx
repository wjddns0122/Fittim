import { ArrowLeft, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ClothingDetailScreenProps {
  onBack: () => void;
}

export function ClothingDetailScreen({ onBack }: ClothingDetailScreenProps) {
  const [category, setCategory] = useState('상의');
  const [selectedColors, setSelectedColors] = useState(['화이트']);
  const [selectedSeasons, setSelectedSeasons] = useState(['봄', '여름']);

  const categories = ['상의', '하의', '아우터', '신발', '악세사리'];
  const colors = ['화이트', '블랙', '그레이', '베이지', '네이비', '카키'];
  const seasons = ['봄', '여름', '가을', '겨울'];

  const toggleColor = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const toggleSeason = (season: string) => {
    setSelectedSeasons(prev =>
      prev.includes(season) ? prev.filter(s => s !== season) : [...prev, season]
    );
  };

  return (
    <>
      {/* Top Bar */}
      <header className="flex items-center justify-between px-6 pt-14 pb-4 border-b border-[#EAEAEA]">
        <button onClick={onBack} className="p-1">
          <ArrowLeft className="w-5 h-5 text-[#1A1A1A]" strokeWidth={1.5} />
        </button>
        <h1 className="text-[15px] text-[#1A1A1A]" style={{ fontWeight: 400 }}>
          옷 상세
        </h1>
        <button className="p-1 text-red-500 hover:text-red-600">
          <Trash2 className="w-5 h-5" strokeWidth={1.5} />
        </button>
      </header>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-32">
        {/* Image */}
        <div className="w-full aspect-square bg-[#FAFAFA]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
            alt="화이트 셔츠"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form */}
        <div className="px-6 pt-6 pb-6 space-y-6">
          {/* Name */}
          <div>
            <label className="text-[13px] text-[#9C9C9C] mb-2 block" style={{ fontWeight: 300 }}>
              옷 이름
            </label>
            <input
              type="text"
              defaultValue="화이트 셔츠"
              className="w-full px-4 py-3 bg-[#FAFAFA] border border-[#EAEAEA] rounded-2xl text-[15px] text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors"
              style={{ fontWeight: 300 }}
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-[13px] text-[#9C9C9C] mb-3 block" style={{ fontWeight: 300 }}>
              카테고리
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2.5 rounded-full transition-all ${
                    category === cat
                      ? 'bg-[#1A1A1A] text-white'
                      : 'bg-white text-[#9C9C9C] border border-[#EAEAEA] hover:border-[#1A1A1A]'
                  }`}
                >
                  <span className="text-[13px]" style={{ fontWeight: 300 }}>
                    {cat}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div>
            <label className="text-[13px] text-[#9C9C9C] mb-3 block" style={{ fontWeight: 300 }}>
              색상
            </label>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => toggleColor(color)}
                  className={`px-4 py-2.5 rounded-full transition-all ${
                    selectedColors.includes(color)
                      ? 'bg-[#1A1A1A] text-white'
                      : 'bg-white text-[#9C9C9C] border border-[#EAEAEA] hover:border-[#1A1A1A]'
                  }`}
                >
                  <span className="text-[13px]" style={{ fontWeight: 300 }}>
                    {color}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Seasons */}
          <div>
            <label className="text-[13px] text-[#9C9C9C] mb-3 block" style={{ fontWeight: 300 }}>
              계절
            </label>
            <div className="flex flex-wrap gap-2">
              {seasons.map((season) => (
                <button
                  key={season}
                  onClick={() => toggleSeason(season)}
                  className={`px-4 py-2.5 rounded-full transition-all ${
                    selectedSeasons.includes(season)
                      ? 'bg-[#1A1A1A] text-white'
                      : 'bg-white text-[#9C9C9C] border border-[#EAEAEA] hover:border-[#1A1A1A]'
                  }`}
                >
                  <span className="text-[13px]" style={{ fontWeight: 300 }}>
                    {season}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="absolute bottom-0 left-0 right-0 px-6 pb-4 bg-white border-t border-[#EAEAEA]">
        <button 
          onClick={onBack}
          className="w-full py-4 bg-[#1A1A1A] text-white rounded-full text-[15px] hover:bg-[#000000] transition-colors"
          style={{ fontWeight: 400 }}
        >
          저장하기
        </button>
      </div>
    </>
  );
}