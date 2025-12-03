import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';

interface EditProfileScreenProps {
  onBack: () => void;
}

export function EditProfileScreen({ onBack }: EditProfileScreenProps) {
  const [selectedStyles, setSelectedStyles] = useState(['미니멀', '꾸안꾸']);
  const [selectedMalls, setSelectedMalls] = useState(['무신사', '29CM']);

  const styles = ['미니멀', '스트릿', '꾸안꾸', '페미닌', '캐주얼', '모던', '클래식', '빈티지'];
  const malls = ['무신사', '에이블리', '지그재그', '29CM', 'W컨셉', 'SSF샵', '브랜디'];

  const toggleStyle = (style: string) => {
    setSelectedStyles(prev =>
      prev.includes(style) ? prev.filter(s => s !== style) : [...prev, style]
    );
  };

  const toggleMall = (mall: string) => {
    setSelectedMalls(prev =>
      prev.includes(mall) ? prev.filter(m => m !== mall) : [...prev, mall]
    );
  };

  return (
    <>
      {/* Top Bar */}
      <header className="flex items-center justify-between px-6 pt-14 pb-4 border-b border-[#EAEAEA]">
        <button onClick={onBack} className="p-1">
          <ArrowLeft className="w-5 h-5 text-[#1A1A1A]" strokeWidth={1.5} />
        </button>
        <h1 className="text-[15px] text-[#1A1A1A]" style={{ fontWeight: 400 }}>
          내 정보 수정
        </h1>
        <div className="w-6" />
      </header>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-32">
        <div className="px-6 pt-6 space-y-6">
          {/* Basic Info */}
          <div className="space-y-4">
            <h3 className="text-[15px] text-[#1A1A1A]" style={{ fontWeight: 400 }}>
              기본 정보
            </h3>
            
            <div>
              <label className="text-[13px] text-[#9C9C9C] mb-2 block" style={{ fontWeight: 300 }}>
                이름
              </label>
              <input
                type="text"
                defaultValue="김민수"
                className="w-full px-4 py-3 bg-[#FAFAFA] border border-[#EAEAEA] rounded-2xl text-[15px] text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors"
                style={{ fontWeight: 300 }}
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="text-[13px] text-[#9C9C9C] mb-2 block" style={{ fontWeight: 300 }}>
                  키 (cm)
                </label>
                <input
                  type="number"
                  defaultValue="175"
                  className="w-full px-4 py-3 bg-[#FAFAFA] border border-[#EAEAEA] rounded-2xl text-[15px] text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors"
                  style={{ fontWeight: 300 }}
                />
              </div>
              <div>
                <label className="text-[13px] text-[#9C9C9C] mb-2 block" style={{ fontWeight: 300 }}>
                  몸무게 (kg)
                </label>
                <input
                  type="number"
                  defaultValue="68"
                  className="w-full px-4 py-3 bg-[#FAFAFA] border border-[#EAEAEA] rounded-2xl text-[15px] text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors"
                  style={{ fontWeight: 300 }}
                />
              </div>
              <div>
                <label className="text-[13px] text-[#9C9C9C] mb-2 block" style={{ fontWeight: 300 }}>
                  체형
                </label>
                <select
                  defaultValue="보통"
                  className="w-full px-4 py-3 bg-[#FAFAFA] border border-[#EAEAEA] rounded-2xl text-[15px] text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors appearance-none"
                  style={{ fontWeight: 300 }}
                >
                  <option>마른</option>
                  <option>보통</option>
                  <option>통통</option>
                </select>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-[#EAEAEA]" />

          {/* Style Preferences */}
          <div>
            <h3 className="text-[15px] text-[#1A1A1A] mb-4" style={{ fontWeight: 400 }}>
              선호 스타일
            </h3>
            <p className="text-[12px] text-[#9C9C9C] mb-3" style={{ fontWeight: 300 }}>
              좋아하는 스타일을 모두 선택해주세요
            </p>
            <div className="flex flex-wrap gap-2">
              {styles.map((style) => (
                <button
                  key={style}
                  onClick={() => toggleStyle(style)}
                  className={`px-4 py-2.5 rounded-full transition-all ${
                    selectedStyles.includes(style)
                      ? 'bg-[#1A1A1A] text-white'
                      : 'bg-white text-[#9C9C9C] border border-[#EAEAEA] hover:border-[#1A1A1A]'
                  }`}
                >
                  <span className="text-[13px]" style={{ fontWeight: 300 }}>
                    {style}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-[#EAEAEA]" />

          {/* Preferred Malls */}
          <div>
            <h3 className="text-[15px] text-[#1A1A1A] mb-4" style={{ fontWeight: 400 }}>
              선호 쇼핑몰
            </h3>
            <p className="text-[12px] text-[#9C9C9C] mb-3" style={{ fontWeight: 300 }}>
              자주 이용하는 쇼핑몰을 선택해주세요
            </p>
            <div className="flex flex-wrap gap-2">
              {malls.map((mall) => (
                <button
                  key={mall}
                  onClick={() => toggleMall(mall)}
                  className={`px-4 py-2.5 rounded-full transition-all ${
                    selectedMalls.includes(mall)
                      ? 'bg-[#1A1A1A] text-white'
                      : 'bg-white text-[#9C9C9C] border border-[#EAEAEA] hover:border-[#1A1A1A]'
                  }`}
                >
                  <span className="text-[13px]" style={{ fontWeight: 300 }}>
                    {mall}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="absolute bottom-20 left-0 right-0 px-6 pb-4 bg-white border-t border-[#EAEAEA]">
        <button 
          onClick={onBack}
          className="w-full py-4 bg-[#1A1A1A] text-white rounded-full text-[15px] hover:bg-[#000000] transition-colors"
          style={{ fontWeight: 400 }}
        >
          저장하기
        </button>
      </div>
    </>
  );
}
