import { ArrowLeft, Bookmark, Share2, Download, Heart } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface OutfitDetailScreenProps {
  onBack: () => void;
}

export function OutfitDetailScreen({ onBack }: OutfitDetailScreenProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const outfit = {
    name: '데일리 미니멀 룩',
    items: [
      { category: '상의', name: '화이트 베이직 티셔츠', brand: '무신사 스탠다드' },
      { category: '하의', name: '와이드 데님 팬츠', brand: '에이블리' },
      { category: '아우터', name: '코튼 오버핏 셔츠', brand: '유니클로' },
      { category: '신발', name: '화이트 스니커즈', brand: '아디다스' }
    ],
    tags: ['#캠퍼스', '#꾸안꾸', '#편안함']
  };

  const handleShare = () => {
    setShowShareMenu(!showShareMenu);
  };

  const handleDownload = () => {
    // Download as image card
    alert('코디 카드를 저장했습니다!');
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <>
      {/* Top Bar */}
      <header className="flex items-center justify-between px-6 pt-14 pb-4 border-b border-[#EAEAEA]">
        <button onClick={onBack} className="p-1">
          <ArrowLeft className="w-5 h-5 text-[#1A1A1A]" strokeWidth={1.5} />
        </button>
        <h1 className="text-[15px] text-[#1A1A1A]" style={{ fontWeight: 400 }}>
          코디 상세
        </h1>
        <div className="relative">
          <button onClick={handleShare} className="p-1">
            <Share2 className="w-5 h-5 text-[#1A1A1A]" strokeWidth={1.5} />
          </button>
          
          {/* Share Menu */}
          {showShareMenu && (
            <div className="absolute right-0 top-10 bg-white rounded-2xl shadow-lg border border-[#EAEAEA] py-2 w-40 z-10">
              <button className="w-full px-4 py-2.5 text-left text-[13px] text-[#1A1A1A] hover:bg-[#FAFAFA]" style={{ fontWeight: 300 }}>
                카카오톡 공유
              </button>
              <button className="w-full px-4 py-2.5 text-left text-[13px] text-[#1A1A1A] hover:bg-[#FAFAFA]" style={{ fontWeight: 300 }}>
                인스타그램 공유
              </button>
              <button className="w-full px-4 py-2.5 text-left text-[13px] text-[#1A1A1A] hover:bg-[#FAFAFA]" style={{ fontWeight: 300 }}>
                링크 복사
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-32">
        {/* Main Image */}
        <div className="w-full aspect-[3/4] bg-[#FAFAFA] relative">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
            alt={outfit.name}
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
        </div>

        {/* Content */}
        <div className="px-6 pt-6 pb-6 space-y-6">
          {/* Title and Tags */}
          <div>
            <h2 className="text-[22px] text-[#1A1A1A] mb-3" style={{ fontWeight: 400 }}>
              {outfit.name}
            </h2>
            <div className="flex flex-wrap gap-2">
              {outfit.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-[#EBF3FF] text-[#74A8FF] text-[11px]"
                  style={{ fontWeight: 300 }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Items List */}
          <div className="space-y-4">
            <h3 className="text-[15px] text-[#1A1A1A]" style={{ fontWeight: 400 }}>
              구성 아이템
            </h3>
            {outfit.items.map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 bg-[#FAFAFA] rounded-2xl"
              >
                <div className="w-16 h-16 bg-white rounded-xl flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-[11px] text-[#9C9C9C] mb-1" style={{ fontWeight: 300 }}>
                    {item.category}
                  </p>
                  <p className="text-[14px] text-[#1A1A1A] mb-0.5" style={{ fontWeight: 300 }}>
                    {item.name}
                  </p>
                  <p className="text-[12px] text-[#9C9C9C]" style={{ fontWeight: 300 }}>
                    {item.brand}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Save as Card */}
          <div className="pt-4">
            <button 
              onClick={handleDownload}
              className="w-full py-4 bg-white border border-[#EAEAEA] rounded-2xl text-[15px] text-[#1A1A1A] hover:bg-[#FAFAFA] transition-colors flex items-center justify-center gap-2" 
              style={{ fontWeight: 400 }}
            >
              <Download className="w-5 h-5" strokeWidth={1.5} />
              카드로 저장하기
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="absolute bottom-0 left-0 right-0 px-6 pb-4 bg-white border-t border-[#EAEAEA]">
        <div className="flex gap-3 pt-4">
          <button 
            onClick={handleSave}
            className={`flex-1 py-4 rounded-full border text-[15px] transition-colors flex items-center justify-center gap-2 ${
              isSaved 
                ? 'border-[#74A8FF] bg-[#74A8FF] text-white' 
                : 'border-[#EAEAEA] text-[#1A1A1A] hover:bg-[#FAFAFA]'
            }`}
            style={{ fontWeight: 400 }}
          >
            <Bookmark 
              className={`w-5 h-5 ${isSaved ? 'fill-white' : ''}`} 
              strokeWidth={1.5} 
            />
            {isSaved ? '저장됨' : '저장'}
          </button>
          <button className="flex-1 py-4 rounded-full bg-[#1A1A1A] text-white text-[15px] hover:bg-[#000000] transition-colors" style={{ fontWeight: 400 }}>
            상품 보러가기
          </button>
        </div>
      </div>
    </>
  );
}