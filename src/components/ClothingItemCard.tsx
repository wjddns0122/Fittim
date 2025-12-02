import { MoreVertical } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ClothingItemCardProps {
  name: string;
  category: string;
}

const categoryImages: Record<string, string> = {
  '상의': 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
  '하의': 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80',
  '아우터': 'https://images.unsplash.com/photo-1551028719-00167b16eac5',
  '신발': 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2',
  '악세사리': 'https://images.unsplash.com/photo-1611652022419-a9419f74343d'
};

export function ClothingItemCard({ name, category }: ClothingItemCardProps) {
  return (
    <div className="group relative">
      {/* Image Container */}
      <div className="relative aspect-square bg-[#F7F7F7] rounded-2xl overflow-hidden mb-2.5 shadow-sm border border-[#F0F0F0]">
        <ImageWithFallback
          src={categoryImages[category] || categoryImages['상의']}
          alt={name}
          className="w-full h-full object-cover"
        />
        
        {/* Three-dot Menu */}
        <button className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
          <MoreVertical className="w-4 h-4 text-[#1A1A1A]" strokeWidth={1.5} />
        </button>
      </div>

      {/* Label */}
      <p className="text-[13px] text-[#1A1A1A] px-1" style={{ fontWeight: 300 }}>
        {name}
      </p>
    </div>
  );
}
