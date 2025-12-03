import { Plus, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { ClothingItemCard } from './ClothingItemCard';

interface WardrobeScreenProps {
  onSelectItem: () => void;
  onAddItem: () => void;
}

export function WardrobeScreen({ onSelectItem, onAddItem }: WardrobeScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = ['ALL', '상의', '하의', '아우터', '신발', '악세사리'];

  const clothingItems = [
    { id: 1, name: '화이트 셔츠', category: '상의' },
    { id: 2, name: '블랙 슬랙스', category: '하의' },
    { id: 3, name: '데님 재킷', category: '아우터' },
    { id: 4, name: '화이트 스니커즈', category: '신발' },
    { id: 5, name: '베이지 니트', category: '상의' },
    { id: 6, name: '카키 치노팬츠', category: '하의' },
    { id: 7, name: '트렌치 코트', category: '아우터' },
    { id: 8, name: '첼시 부츠', category: '신발' },
    { id: 9, name: '그레이 후디', category: '상의' },
    { id: 10, name: '와이드 진', category: '하의' },
  ];

  const filteredItems = selectedCategory === 'ALL' 
    ? clothingItems 
    : clothingItems.filter(item => item.category === selectedCategory);

  return (
    <>
      {/* Header */}
      <header className="flex items-center justify-between px-6 pt-14 pb-6">
        <h1 className="text-[20px] text-[#1A1A1A]" style={{ fontWeight: 400 }}>
          내 옷장
        </h1>
        <button 
          onClick={onAddItem}
          className="w-9 h-9 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#2A2A2A] transition-colors"
        >
          <Plus className="w-5 h-5 text-white" strokeWidth={1.5} />
        </button>
      </header>

      {/* Category Tabs */}
      <div className="px-6 mb-6">
        <div className="flex gap-6 overflow-x-auto pb-3 border-b border-[#F0F0F0]">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-[14px] pb-3 whitespace-nowrap transition-colors relative ${
                selectedCategory === category
                  ? 'text-[#1A1A1A]'
                  : 'text-[#9C9C9C] hover:text-[#6B6B6B]'
              }`}
              style={{ fontWeight: selectedCategory === category ? 400 : 300 }}
            >
              {category}
              {selectedCategory === category && (
                <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#1A1A1A]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Clothing Grid */}
      <div className="flex-1 overflow-y-auto pb-32 px-6">
        <div className="grid grid-cols-2 gap-4">
          {filteredItems.map((item) => (
            <ClothingItemCard
              key={item.id}
              name={item.name}
              category={item.category}
              onSelect={onSelectItem}
            />
          ))}
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-6 w-14 h-14 rounded-full bg-[#74A8FF] shadow-lg flex items-center justify-center hover:bg-[#5A98EF] transition-all hover:scale-105">
        <Sparkles className="w-6 h-6 text-white" strokeWidth={1.5} />
      </button>
    </>
  );
}