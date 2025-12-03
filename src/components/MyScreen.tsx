import { Settings, ChevronRight, User, History } from 'lucide-react';
import { InfoCard } from './InfoCard';
import { StyleChip } from './StyleChip';

interface MyScreenProps {
  onEditProfile: () => void;
  onNotifications: () => void;
  onHistory: () => void;
}

export function MyScreen({ onEditProfile, onNotifications, onHistory }: MyScreenProps) {
  const userInfo = [
    { label: '키', value: '175cm' },
    { label: '몸무게', value: '68kg' },
    { label: '체형', value: '보통' }
  ];

  const preferredStyles = ['미니멀', '스트릿', '꾸안꾸', '페미닌', '캐주얼'];
  const preferredMalls = ['무신사', '에이블리', '지그재그', '29CM', 'W컨셉'];

  const settingsItems = [
    { label: '알림 설정', action: () => {} },
    { label: '언어', action: () => {} },
    { label: '로그아웃', action: () => {} }
  ];

  return (
    <>
      {/* Header */}
      <header className="flex items-center justify-between px-6 pt-14 pb-6">
        <h1 className="text-[20px] text-[#1A1A1A]" style={{ fontWeight: 400 }}>
          My
        </h1>
        <button className="p-1">
          <Settings className="w-5 h-5 text-[#1A1A1A]" strokeWidth={1.5} />
        </button>
      </header>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-20">
        {/* Profile Section */}
        <section className="px-6 pt-4 pb-8 flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-[#F7F7F7] flex items-center justify-center mb-4">
            <User className="w-9 h-9 text-[#9C9C9C]" strokeWidth={1.5} />
          </div>
          <h2 className="text-[17px] text-[#1A1A1A] mb-1" style={{ fontWeight: 400 }}>
            김민수
          </h2>
          <p className="text-[12px] text-[#9C9C9C] tracking-[0.05em]" style={{ fontWeight: 300 }}>
            FITTIM, Fit ME.
          </p>
        </section>

        {/* Divider */}
        <div className="h-2 bg-[#F7F7F7] mb-6" />

        {/* 내 정보 Section */}
        <section className="px-6 pb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[15px] text-[#1A1A1A]" style={{ fontWeight: 400 }}>
              내 정보
            </h3>
            <button 
              onClick={onEditProfile}
              className="text-[12px] text-[#9C9C9C] hover:text-[#6B6B6B] transition-colors" 
              style={{ fontWeight: 300 }}
            >
              편집
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {userInfo.map((info) => (
              <InfoCard key={info.label} label={info.label} value={info.value} />
            ))}
          </div>
        </section>

        {/* 스타일 Section */}
        <section className="px-6 pb-8">
          <h3 className="text-[15px] text-[#1A1A1A] mb-4" style={{ fontWeight: 400 }}>
            스타일
          </h3>
          
          {/* 선호 스타일 */}
          <div className="mb-5">
            <p className="text-[13px] text-[#6B6B6B] mb-3" style={{ fontWeight: 300 }}>
              선호 스타일
            </p>
            <div className="flex flex-wrap gap-2">
              {preferredStyles.map((style) => (
                <StyleChip key={style} label={style} />
              ))}
            </div>
          </div>

          {/* 선호 쇼핑몰 */}
          <div>
            <p className="text-[13px] text-[#6B6B6B] mb-3" style={{ fontWeight: 300 }}>
              선호 쇼핑몰
            </p>
            <div className="flex flex-wrap gap-2">
              {preferredMalls.map((mall) => (
                <StyleChip key={mall} label={mall} />
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-2 bg-[#F7F7F7] mb-6" />

        {/* 앱 설정 Section */}
        <section className="px-6 pb-8">
          <h3 className="text-[15px] text-[#1A1A1A] mb-4" style={{ fontWeight: 400 }}>
            앱 설정
          </h3>
          <div className="space-y-1">
            <button
              onClick={onHistory}
              className="w-full flex items-center justify-between py-4 hover:bg-[#F7F7F7] transition-colors rounded-xl px-3"
            >
              <span className="text-[14px] text-[#1A1A1A]" style={{ fontWeight: 300 }}>
                코디 히스토리
              </span>
              <ChevronRight className="w-5 h-5 text-[#9C9C9C]" strokeWidth={1.5} />
            </button>
            <button
              onClick={onNotifications}
              className="w-full flex items-center justify-between py-4 hover:bg-[#F7F7F7] transition-colors rounded-xl px-3"
            >
              <span className="text-[14px] text-[#1A1A1A]" style={{ fontWeight: 300 }}>
                알림 설정
              </span>
              <ChevronRight className="w-5 h-5 text-[#9C9C9C]" strokeWidth={1.5} />
            </button>
            <button
              className="w-full flex items-center justify-between py-4 hover:bg-[#F7F7F7] transition-colors rounded-xl px-3"
            >
              <span className="text-[14px] text-[#1A1A1A]" style={{ fontWeight: 300 }}>
                언어
              </span>
              <ChevronRight className="w-5 h-5 text-[#9C9C9C]" strokeWidth={1.5} />
            </button>
            <button
              className="w-full flex items-center justify-between py-4 hover:bg-[#F7F7F7] transition-colors rounded-xl px-3"
            >
              <span className="text-[14px] text-[#1A1A1A]" style={{ fontWeight: 300 }}>
                로그아웃
              </span>
              <ChevronRight className="w-5 h-5 text-[#9C9C9C]" strokeWidth={1.5} />
            </button>
          </div>
        </section>
      </div>
    </>
  );
}