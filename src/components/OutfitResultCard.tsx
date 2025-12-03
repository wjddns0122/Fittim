import { Bookmark, Share2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface OutfitResultCardProps {
  name: string;
  items: string[];
  tags: string[];
  onSelect?: () => void;
}

export function OutfitResultCard({ name, items, tags, onSelect }: OutfitResultCardProps) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#F0F0F0]">
      {/* Outfit Image */}
      <button onClick={onSelect} className="w-full aspect-[4/5] bg-[#F7F7F7]">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
          alt={name}
          className="w-full h-full object-cover"
        />
      </button>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Outfit Name */}
        <h3 className="text-[17px] text-[#1A1A1A]" style={{ fontWeight: 500 }}>
          {name}
        </h3>

        {/* Items List */}
        <div className="space-y-1.5">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-[12px] text-[#9C9C9C] mt-0.5" style={{ fontWeight: 300 }}>
                •
              </span>
              <span className="text-[12px] text-[#6B6B6B]" style={{ fontWeight: 300 }}>
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-full bg-[#EBF3FF] text-[#74A8FF] text-[11px]"
              style={{ fontWeight: 300 }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <button className="flex-1 py-3 rounded-full border border-[#E0E0E0] text-[#1A1A1A] text-[13px] hover:bg-[#F7F7F7] transition-colors flex items-center justify-center gap-2" style={{ fontWeight: 400 }}>
            <Bookmark className="w-4 h-4" strokeWidth={1.5} />
            저장
          </button>
          <button className="flex-1 py-3 rounded-full border border-[#E0E0E0] text-[#1A1A1A] text-[13px] hover:bg-[#F7F7F7] transition-colors flex items-center justify-center gap-2" style={{ fontWeight: 400 }}>
            <Share2 className="w-4 h-4" strokeWidth={1.5} />
            공유
          </button>
        </div>

        {/* Similar Recommendation */}
        <button className="w-full text-center text-[11px] text-[#9C9C9C] hover:text-[#6B6B6B] transition-colors" style={{ fontWeight: 300 }}>
          비슷한 코디 다시 추천
        </button>
      </div>
    </div>
  );
}