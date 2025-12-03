import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';

interface NotificationSettingsScreenProps {
  onBack: () => void;
}

export function NotificationSettingsScreen({ onBack }: NotificationSettingsScreenProps) {
  const [settings, setSettings] = useState({
    newOutfit: true,
    shopRecommendation: true,
    marketing: false,
    event: true,
    nightMode: false
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const notificationItems = [
    { key: 'newOutfit' as const, label: '새로운 코디 추천', description: 'AI가 생성한 새 코디 알림' },
    { key: 'shopRecommendation' as const, label: '상품 추천', description: '맞춤 상품 추천 알림' },
    { key: 'marketing' as const, label: '마케팅 정보 수신', description: '할인/이벤트 정보 수신' },
    { key: 'event' as const, label: '이벤트 소식', description: '특별 이벤트 알림' },
    { key: 'nightMode' as const, label: '야간 알림 끄기', description: '밤 10시 ~ 오전 8시 알림 차단' }
  ];

  return (
    <>
      {/* Top Bar */}
      <header className="flex items-center justify-between px-6 pt-14 pb-4 border-b border-[#EAEAEA]">
        <button onClick={onBack} className="p-1">
          <ArrowLeft className="w-5 h-5 text-[#1A1A1A]" strokeWidth={1.5} />
        </button>
        <h1 className="text-[15px] text-[#1A1A1A]" style={{ fontWeight: 400 }}>
          알림 설정
        </h1>
        <div className="w-6" />
      </header>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-20">
        <div className="px-6 pt-6">
          <p className="text-[13px] text-[#9C9C9C] mb-6" style={{ fontWeight: 300 }}>
            받고 싶은 알림을 선택해주세요
          </p>

          <div className="space-y-1">
            {notificationItems.map((item) => (
              <div
                key={item.key}
                className="flex items-center justify-between py-4 border-b border-[#FAFAFA]"
              >
                <div className="flex-1">
                  <p className="text-[15px] text-[#1A1A1A] mb-1" style={{ fontWeight: 300 }}>
                    {item.label}
                  </p>
                  <p className="text-[12px] text-[#9C9C9C]" style={{ fontWeight: 300 }}>
                    {item.description}
                  </p>
                </div>
                <button
                  onClick={() => toggleSetting(item.key)}
                  className={`relative w-12 h-7 rounded-full transition-colors ${
                    settings[item.key] ? 'bg-[#1A1A1A]' : 'bg-[#EAEAEA]'
                  }`}
                >
                  <div
                    className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                      settings[item.key] ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-8 p-4 bg-[#FAFAFA] rounded-2xl">
            <p className="text-[12px] text-[#9C9C9C] leading-[1.6]" style={{ fontWeight: 300 }}>
              알림 설정은 언제든지 변경할 수 있습니다.
              <br />
              기기 설정에서 알림을 차단한 경우, 앱 내 설정과 무관하게 알림이 표시되지 않습니다.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
