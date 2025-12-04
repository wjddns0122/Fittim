import { ArrowLeft, Camera, Upload, X } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AddClothingScreenProps {
  onBack: () => void;
}

export function AddClothingScreen({ onBack }: AddClothingScreenProps) {
  const [category, setCategory] = useState<string | null>(null);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSeasons, setSelectedSeasons] = useState<string[]>([]);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');

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

  const handleImageUpload = () => {
    // Simulate image upload
    setUploadedImage('https://images.unsplash.com/photo-1620799140408-edc6dcb6d633');
  };

  const handleSubmit = () => {
    if (!category) {
      alert('카테고리를 선택해주세요!');
      return;
    }
    if (!uploadedImage) {
      alert('사진을 추가해주세요!');
      return;
    }
    alert('옷장에 추가되었습니다!');
    onBack();
  };

  return (
    <>
      {/* Top Bar */}
      <header className="flex items-center justify-between px-6 pt-14 pb-4 border-b border-[#EAEAEA]">
        <button onClick={onBack} className="p-1">
          <ArrowLeft className="w-5 h-5 text-[#1A1A1A]" strokeWidth={1.5} />
        </button>
        <h1 className="text-[15px] text-[#1A1A1A]" style={{ fontWeight: 400 }}>
          옷 추가하기
        </h1>
        <div className="w-6" />
      </header>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-32">
        {/* Upload Section */}
        <div className="px-6 pt-6 pb-6">
          {uploadedImage ? (
            <div className="w-full aspect-square bg-[#FAFAFA] rounded-3xl overflow-hidden relative">
              <ImageWithFallback
                src={uploadedImage}
                alt="Uploaded clothing"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setUploadedImage(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg"
              >
                <X className="w-5 h-5 text-[#1A1A1A]" strokeWidth={1.5} />
              </button>
            </div>
          ) : (
            <div className="w-full aspect-square bg-[#FAFAFA] rounded-3xl border-2 border-dashed border-[#EAEAEA] flex flex-col items-center justify-center gap-4">
              <Camera className="w-12 h-12 text-[#9C9C9C]" strokeWidth={1.5} />
              <div className="text-center">
                <p className="text-[15px] text-[#1A1A1A] mb-2" style={{ fontWeight: 300 }}>
                  사진을 추가해주세요
                </p>
                <p className="text-[12px] text-[#9C9C9C]" style={{ fontWeight: 300 }}>
                  카메라로 촬영하거나 갤러리에서 선택
                </p>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={handleImageUpload}
                  className="px-5 py-2.5 bg-[#1A1A1A] text-white rounded-full text-[13px] hover:bg-[#000000] transition-colors flex items-center gap-2" 
                  style={{ fontWeight: 400 }}
                >
                  <Camera className="w-4 h-4" strokeWidth={1.5} />
                  촬영하기
                </button>
                <button 
                  onClick={handleImageUpload}
                  className="px-5 py-2.5 bg-white border border-[#EAEAEA] text-[#1A1A1A] rounded-full text-[13px] hover:bg-[#FAFAFA] transition-colors flex items-center gap-2" 
                  style={{ fontWeight: 400 }}
                >
                  <Upload className="w-4 h-4" strokeWidth={1.5} />
                  갤러리
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Form */}
        <div className="px-6 space-y-6">
          {/* Name */}
          <div>
            <label className="text-[13px] text-[#9C9C9C] mb-2 block" style={{ fontWeight: 300 }}>
              옷 이름
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="예: 화이트 셔츠"
              className="w-full px-4 py-3 bg-[#FAFAFA] border border-[#EAEAEA] rounded-2xl text-[15px] text-[#1A1A1A] placeholder:text-[#9C9C9C] focus:outline-none focus:border-[#1A1A1A] transition-colors"
              style={{ fontWeight: 300 }}
            />
          </div>

          {/* Brand */}
          <div>
            <label className="text-[13px] text-[#9C9C9C] mb-2 block" style={{ fontWeight: 300 }}>
              브랜드
            </label>
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              placeholder="예: 유니클로"
              className="w-full px-4 py-3 bg-[#FAFAFA] border border-[#EAEAEA] rounded-2xl text-[15px] text-[#1A1A1A] placeholder:text-[#9C9C9C] focus:outline-none focus:border-[#1A1A1A] transition-colors"
              style={{ fontWeight: 300 }}
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-[13px] text-[#9C9C9C] mb-3 block" style={{ fontWeight: 300 }}>
              카테고리 *
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
          onClick={handleSubmit}
          className="w-full py-4 bg-[#1A1A1A] text-white rounded-full text-[15px] hover:bg-[#000000] transition-colors"
          style={{ fontWeight: 400 }}
        >
          추가하기
        </button>
      </div>
    </>
  );
}