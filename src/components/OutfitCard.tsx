import { ImageWithFallback } from './figma/ImageWithFallback';

interface OutfitCardProps {
  caption: string;
}

export function OutfitCard({ caption }: OutfitCardProps) {
  return (
    <div className="flex-shrink-0 w-32">
      <div className="aspect-[3/4] bg-[#F7F7F7] rounded-2xl overflow-hidden mb-2">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
          alt={caption}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-[11px] text-[#6B6B6B] text-center" style={{ fontWeight: 300 }}>
        {caption}
      </p>
    </div>
  );
}
