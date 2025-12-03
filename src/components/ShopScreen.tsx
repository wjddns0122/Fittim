import { SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';
import { SegmentedControl } from './SegmentedControl';
import { CategoryChips } from './CategoryChips';
import { ProductCard } from './ProductCard';

interface ShopScreenProps {
  onSelectProduct: () => void;
}

export function ShopScreen({ onSelectProduct }: ShopScreenProps) {
  const [gender, setGender] = useState<'남성' | '여성'>('남성');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ['상의', '하의', '아우터', '신발', '세트', '기타'];

  const products = [
    {
      id: 1,
      brand: '무신사 스탠다드',
      name: '오버핏 베이직 크루넥 티셔츠',
      price: 39000,
      tags: ['#미니멀', '#데일리']
    },
    {
      id: 2,
      brand: '디스이즈네버댓',
      name: '와이드 데님 팬츠 라이트 블루',
      price: 89000,
      tags: ['#스트릿', '#편안함']
    },
    {
      id: 3,
      brand: '커버낫',
      name: '오버사이즈 후드 집업 블랙',
      price: 129000,
      tags: ['#꾸안꾸', '#아우터']
    },
    {
      id: 4,
      brand: '아디다스 오리지널스',
      name: '삼바 OG 화이트 블랙',
      price: 139000,
      tags: ['#클래식', '#스니커즈']
    },
    {
      id: 5,
      brand: '유니폼브릿지',
      name: '17s 헤비 코튼 티셔츠 차콜',
      price: 35000,
      tags: ['#베이직', '#데일리']
    },
    {
      id: 6,
      brand: '마르디 메크르디',
      name: '플로 스웻셔츠 아이보리',
      price: 68000,
      tags: ['#미니멀', '#무드']
    }
  ];

  return (
    <>
      {/* Header */}
      <header className="flex items-center justify-between px-6 pt-14 pb-6">
        <h1 className="text-[20px] text-[#1A1A1A]" style={{ fontWeight: 400 }}>
          추천 쇼핑
        </h1>
        <button className="p-1">
          <SlidersHorizontal className="w-5 h-5 text-[#1A1A1A]" strokeWidth={1.5} />
        </button>
      </header>

      {/* Segmented Control */}
      <div className="px-6 mb-5">
        <SegmentedControl
          options={['남성', '여성']}
          selected={gender}
          onChange={setGender}
        />
      </div>

      {/* Category Chips */}
      <div className="px-6 mb-6">
        <CategoryChips
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>

      {/* Product List */}
      <div className="flex-1 overflow-y-auto pb-20 px-6">
        <div className="space-y-5">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              brand={product.brand}
              name={product.name}
              price={product.price}
              tags={product.tags}
              onSelect={onSelectProduct}
            />
          ))}
        </div>
      </div>
    </>
  );
}