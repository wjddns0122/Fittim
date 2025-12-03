import { Plus } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  brand: string;
  name: string;
  price: number;
  tags: string[];
  onSelect?: () => void;
}

export function ProductCard({ brand, name, price, tags, onSelect }: ProductCardProps) {
  const formattedPrice = price.toLocaleString('ko-KR');

  return (
    <div 
      onClick={onSelect}
      className="flex gap-4 bg-white rounded-2xl overflow-hidden border border-[#F0F0F0] p-3 cursor-pointer hover:border-[#1A1A1A] transition-colors"
    >
      {/* Product Image */}
      <div className="w-28 aspect-[3/4] flex-shrink-0 bg-[#F7F7F7] rounded-xl overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633"
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col justify-between py-1">
        {/* Brand and Name */}
        <div className="space-y-1.5">
          <p className="text-[11px] text-[#9C9C9C]" style={{ fontWeight: 300 }}>
            {brand}
          </p>
          <h3 
            className="text-[14px] text-[#1A1A1A] leading-[1.4] line-clamp-2" 
            style={{ fontWeight: 300 }}
          >
            {name}
          </h3>
          <p className="text-[15px] text-[#1A1A1A]" style={{ fontWeight: 500 }}>
            {formattedPrice}원
          </p>
        </div>

        {/* Tags and Button */}
        <div className="space-y-2.5">
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded-full bg-[#F7F7F7] text-[#6B6B6B] text-[10px]"
                style={{ fontWeight: 300 }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Add to Outfit Button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              // Handle add to outfit action
            }}
            className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-[#1A1A1A] text-white text-[12px] hover:bg-[#2A2A2A] transition-colors self-start" 
            style={{ fontWeight: 400 }}
          >
            <Plus className="w-3.5 h-3.5" strokeWidth={2} />
            코디에 추가
          </button>
        </div>
      </div>
    </div>
  );
}