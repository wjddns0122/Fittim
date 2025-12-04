import { ArrowLeft, ExternalLink, Plus, Heart, Share2 } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductDetailScreenProps {
  onBack: () => void;
}

export function ProductDetailScreen({ onBack }: ProductDetailScreenProps) {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isAddedToWardrobe, setIsAddedToWardrobe] = useState(false);

  const product = {
    brand: '무신사 스탠다드',
    name: '오버핏 베이직 크루넥 티셔츠',
    price: 39000,
    originalPrice: 49000,
    discount: 20,
    tags: ['#미니멀', '#데일리', '#베이직'],
    colors: ['화이트', '블랙', '그레이'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: '편안한 착용감의 오버핏 실루엣으로 제작된 베이직 크루넥 티셔츠입니다. 데일리로 활용하기 좋은 아이템입니다.'
  };

  const handleAddToWardrobe = () => {
    if (!selectedColor || !selectedSize) {
      alert('색상과 사이즈를 선택해주세요!');
      return;
    }
    setIsAddedToWardrobe(true);
    alert('옷장에 추가되었습니다!');
  };

  return (
    <>
      {/* Top Bar */}
      <header className="flex items-center justify-between px-6 pt-14 pb-4 border-b border-[#EAEAEA]">
        <button onClick={onBack} className="p-1">
          <ArrowLeft className="w-5 h-5 text-[#1A1A1A]" strokeWidth={1.5} />
        </button>
        <h1 className="text-[15px] text-[#1A1A1A]" style={{ fontWeight: 400 }}>
          상품 상세
        </h1>
        <button className="p-1">
          <Share2 className="w-5 h-5 text-[#1A1A1A]" strokeWidth={1.5} />
        </button>
      </header>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-32">
        {/* Product Image */}
        <div className="w-full aspect-square bg-[#FAFAFA] relative">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633"
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {/* Like Button Overlay */}
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg"
          >
            <Heart 
              className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-[#1A1A1A]'}`} 
              strokeWidth={1.5} 
            />
          </button>
          {/* Discount Badge */}
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-red-500 text-white text-[12px] rounded-full" style={{ fontWeight: 400 }}>
            {product.discount}% OFF
          </div>
        </div>

        {/* Product Info */}
        <div className="px-6 pt-6 pb-6 space-y-6">
          {/* Brand and Name */}
          <div>
            <p className="text-[12px] text-[#9C9C9C] mb-2" style={{ fontWeight: 300 }}>
              {product.brand}
            </p>
            <h2 className="text-[20px] text-[#1A1A1A] leading-[1.4] mb-3" style={{ fontWeight: 400 }}>
              {product.name}
            </h2>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-[#FAFAFA] text-[#6B6B6B] text-[11px]"
                  style={{ fontWeight: 300 }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Price */}
            <div className="flex items-center gap-2">
              <span className="text-[13px] text-[#9C9C9C] line-through" style={{ fontWeight: 300 }}>
                {product.originalPrice.toLocaleString('ko-KR')}원
              </span>
              <span className="text-[13px] text-red-500" style={{ fontWeight: 400 }}>
                {product.discount}%
              </span>
            </div>
            <p className="text-[24px] text-[#1A1A1A] mt-1" style={{ fontWeight: 500 }}>
              {product.price.toLocaleString('ko-KR')}원
            </p>
          </div>

          {/* Colors */}
          <div>
            <p className="text-[13px] text-[#9C9C9C] mb-3" style={{ fontWeight: 300 }}>
              색상
            </p>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2.5 rounded-full bg-white border text-[13px] transition-colors ${
                    selectedColor === color
                      ? 'border-[#74A8FF] bg-[#EBF3FF] text-[#74A8FF]'
                      : 'border-[#EAEAEA] text-[#1A1A1A] hover:border-[#1A1A1A]'
                  }`}
                  style={{ fontWeight: 300 }}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div>
            <p className="text-[13px] text-[#9C9C9C] mb-3" style={{ fontWeight: 300 }}>
              사이즈
            </p>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-5 py-2.5 rounded-full bg-white border text-[13px] transition-colors ${
                    selectedSize === size
                      ? 'border-[#74A8FF] bg-[#EBF3FF] text-[#74A8FF]'
                      : 'border-[#EAEAEA] text-[#1A1A1A] hover:border-[#1A1A1A]'
                  }`}
                  style={{ fontWeight: 300 }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="text-[13px] text-[#9C9C9C] mb-3" style={{ fontWeight: 300 }}>
              상품 설명
            </p>
            <p className="text-[14px] text-[#1A1A1A] leading-[1.6]" style={{ fontWeight: 300 }}>
              {product.description}
            </p>
          </div>

          {/* Store Link */}
          <button className="w-full py-4 bg-[#FAFAFA] border border-[#EAEAEA] rounded-2xl text-[15px] text-[#1A1A1A] hover:bg-white transition-colors flex items-center justify-center gap-2" style={{ fontWeight: 400 }}>
            <ExternalLink className="w-5 h-5" strokeWidth={1.5} />
            무신사에서 보기
          </button>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="absolute bottom-0 left-0 right-0 px-6 pb-4 bg-white border-t border-[#EAEAEA]">
        <div className="flex gap-3 pt-4">
          <button 
            onClick={handleAddToWardrobe}
            className={`flex-1 py-4 rounded-full border text-[15px] transition-colors flex items-center justify-center gap-2 ${
              isAddedToWardrobe
                ? 'border-[#74A8FF] bg-[#74A8FF] text-white'
                : 'border-[#EAEAEA] text-[#1A1A1A] hover:bg-[#FAFAFA]'
            }`}
            style={{ fontWeight: 400 }}
          >
            <Plus className="w-5 h-5" strokeWidth={1.5} />
            {isAddedToWardrobe ? '추가됨' : '옷장에 추가'}
          </button>
          <button className="flex-1 py-4 rounded-full bg-[#1A1A1A] text-white text-[15px] hover:bg-[#000000] transition-colors" style={{ fontWeight: 400 }}>
            코디에 추가
          </button>
        </div>
      </div>
    </>
  );
}