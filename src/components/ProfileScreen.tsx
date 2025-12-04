import { ArrowLeft, Camera, Bookmark, Heart, ShoppingBag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProfileScreenProps {
  onBack: () => void;
  onEditProfile: () => void;
}

export function ProfileScreen({ onBack, onEditProfile }: ProfileScreenProps) {
  const stats = [
    { icon: ShoppingBag, label: '내 옷장', value: '24개', color: '#74A8FF' },
    { icon: Bookmark, label: '저장한 코디', value: '12개', color: '#1A1A1A' },
    { icon: Heart, label: '좋아요', value: '36개', color: '#FF6B6B' }
  ];

  const recentOutfits = [
    { id: 1, title: '캠퍼스 데일리 룩' },
    { id: 2, title: '미니멀 출근 코디' },
    { id: 3, title: '주말 카페 룩' },
    { id: 4, title: '데이트 스타일' },
    { id: 5, title: '스트릿 캐주얼' },
    { id: 6, title: '편안한 집앞 룩' }
  ];

  return (
    <>
      {/* Top Bar */}
      <header className="flex items-center justify-between px-6 pt-14 pb-4 border-b border-[#EAEAEA]">
        <button onClick={onBack} className="p-1">
          <ArrowLeft className="w-5 h-5 text-[#1A1A1A]" strokeWidth={1.5} />
        </button>
        <h1 className="text-[15px] text-[#1A1A1A]" style={{ fontWeight: 400 }}>
          프로필
        </h1>
        <button 
          onClick={onEditProfile}
          className="text-[13px] text-[#74A8FF]" 
          style={{ fontWeight: 400 }}
        >
          편집
        </button>
      </header>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-20">
        {/* Profile Header */}
        <section className="px-6 pt-8 pb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-[#F7F7F7] flex items-center justify-center overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center shadow-lg">
                <Camera className="w-4 h-4 text-white" strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex-1">
              <h2 className="text-[20px] text-[#1A1A1A] mb-1" style={{ fontWeight: 400 }}>
                김민수
              </h2>
              <p className="text-[13px] text-[#9C9C9C] mb-3" style={{ fontWeight: 300 }}>
                minsu@example.com
              </p>
              <div className="flex items-center gap-2">
                <span className="text-[12px] text-[#6B6B6B]" style={{ fontWeight: 300 }}>
                  175cm · 68kg · 보통 체형
                </span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="p-4 bg-[#FAFAFA] rounded-2xl">
            <p className="text-[13px] text-[#1A1A1A] leading-[1.6]" style={{ fontWeight: 300 }}>
              미니멀하고 심플한 스타일을 좋아합니다.<br />
              편안하면서도 세련된 룩을 추구해요 ✨
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="px-6 pb-8">
          <div className="grid grid-cols-3 gap-3">
            {stats.map((stat, index) => (
              <button
                key={index}
                className="p-4 bg-white border border-[#EAEAEA] rounded-2xl hover:border-[#74A8FF] transition-colors"
              >
                <stat.icon 
                  className="w-5 h-5 mb-2 mx-auto" 
                  style={{ color: stat.color }}
                  strokeWidth={1.5} 
                />
                <p className="text-[18px] text-[#1A1A1A] mb-1" style={{ fontWeight: 400 }}>
                  {stat.value}
                </p>
                <p className="text-[11px] text-[#9C9C9C]" style={{ fontWeight: 300 }}>
                  {stat.label}
                </p>
              </button>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="h-2 bg-[#F7F7F7] mb-6" />

        {/* Style Tags */}
        <section className="px-6 pb-6">
          <h3 className="text-[15px] text-[#1A1A1A] mb-4" style={{ fontWeight: 400 }}>
            나의 스타일
          </h3>
          <div className="flex flex-wrap gap-2">
            {['미니멀', '스트릿', '꾸안꾸', '캐주얼', '모던'].map((style) => (
              <div
                key={style}
                className="px-4 py-2 rounded-full bg-[#EBF3FF] text-[#74A8FF] text-[13px]"
                style={{ fontWeight: 300 }}
              >
                {style}
              </div>
            ))}
          </div>
        </section>

        {/* Recent Outfits Grid */}
        <section className="px-6 pb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[15px] text-[#1A1A1A]" style={{ fontWeight: 400 }}>
              최근 생성한 코디
            </h3>
            <button className="text-[12px] text-[#9C9C9C]" style={{ fontWeight: 300 }}>
              전체보기
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {recentOutfits.map((outfit) => (
              <button
                key={outfit.id}
                className="aspect-square bg-[#FAFAFA] rounded-2xl overflow-hidden hover:opacity-80 transition-opacity"
              >
                <ImageWithFallback
                  src={`https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=300&q=80&${outfit.id}`}
                  alt={outfit.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
