import { ArrowLeft, ChevronRight, Globe, LogOut, Info, Shield, HelpCircle, Mail } from 'lucide-react';
import { useState } from 'react';

interface SettingsScreenProps {
  onBack: () => void;
  onNotifications: () => void;
}

export function SettingsScreen({ onBack, onNotifications }: SettingsScreenProps) {
  const [selectedLanguage, setSelectedLanguage] = useState('한국어');
  const [autoUpdate, setAutoUpdate] = useState(true);

  const languages = ['한국어', 'English', '日本語', '中文'];

  const generalSettings = [
    {
      icon: Globe,
      label: '언어',
      value: selectedLanguage,
      action: 'language'
    },
    {
      icon: Info,
      label: '알림 설정',
      action: 'notifications'
    }
  ];

  const aboutSettings = [
    {
      icon: Info,
      label: '버전 정보',
      value: 'v1.0.0'
    },
    {
      icon: Shield,
      label: '개인정보처리방침'
    },
    {
      icon: HelpCircle,
      label: '서비스 이용약관'
    },
    {
      icon: Mail,
      label: '문의하기',
      value: 'support@fittim.com'
    }
  ];

  const handleLanguageSelect = (lang: string) => {
    setSelectedLanguage(lang);
  };

  return (
    <>
      {/* Top Bar */}
      <header className="flex items-center justify-between px-6 pt-14 pb-4 border-b border-[#EAEAEA]">
        <button onClick={onBack} className="p-1">
          <ArrowLeft className="w-5 h-5 text-[#1A1A1A]" strokeWidth={1.5} />
        </button>
        <h1 className="text-[15px] text-[#1A1A1A]" style={{ fontWeight: 400 }}>
          설정
        </h1>
        <div className="w-6" />
      </header>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-20">
        {/* General Settings */}
        <section className="px-6 pt-6 pb-6">
          <h3 className="text-[13px] text-[#9C9C9C] mb-4" style={{ fontWeight: 400 }}>
            일반
          </h3>
          <div className="space-y-1">
            {generalSettings.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  if (item.action === 'notifications') {
                    onNotifications();
                  }
                }}
                className="w-full flex items-center justify-between py-4 hover:bg-[#F7F7F7] transition-colors rounded-xl px-3"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-[#9C9C9C]" strokeWidth={1.5} />
                  <span className="text-[14px] text-[#1A1A1A]" style={{ fontWeight: 300 }}>
                    {item.label}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {item.value && (
                    <span className="text-[13px] text-[#9C9C9C]" style={{ fontWeight: 300 }}>
                      {item.value}
                    </span>
                  )}
                  <ChevronRight className="w-5 h-5 text-[#9C9C9C]" strokeWidth={1.5} />
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Language Selection */}
        <section className="px-6 pb-6">
          <h3 className="text-[13px] text-[#9C9C9C] mb-3" style={{ fontWeight: 400 }}>
            언어 선택
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageSelect(lang)}
                className={`py-3 px-4 rounded-2xl text-[13px] transition-all ${
                  selectedLanguage === lang
                    ? 'bg-[#74A8FF] text-white'
                    : 'bg-[#F7F7F7] text-[#1A1A1A] hover:bg-[#EAEAEA]'
                }`}
                style={{ fontWeight: 300 }}
              >
                {lang}
              </button>
            ))}
          </div>
        </section>

        {/* App Settings */}
        <section className="px-6 pb-6">
          <h3 className="text-[13px] text-[#9C9C9C] mb-4" style={{ fontWeight: 400 }}>
            앱 설정
          </h3>
          <div className="space-y-4">
            {/* Auto Update */}
            <div className="flex items-center justify-between p-4 bg-[#FAFAFA] rounded-2xl">
              <div>
                <p className="text-[14px] text-[#1A1A1A] mb-1" style={{ fontWeight: 300 }}>
                  자동 업데이트
                </p>
                <p className="text-[12px] text-[#9C9C9C]" style={{ fontWeight: 300 }}>
                  Wi-Fi 연결 시 자동으로 업데이트
                </p>
              </div>
              <button
                onClick={() => setAutoUpdate(!autoUpdate)}
                className={`relative w-12 h-7 rounded-full transition-colors ${
                  autoUpdate ? 'bg-[#74A8FF]' : 'bg-[#EAEAEA]'
                }`}
              >
                <div
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    autoUpdate ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Cache Clear */}
            <button className="w-full p-4 bg-[#FAFAFA] rounded-2xl hover:bg-[#F0F0F0] transition-colors">
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <p className="text-[14px] text-[#1A1A1A] mb-1" style={{ fontWeight: 300 }}>
                    캐시 삭제
                  </p>
                  <p className="text-[12px] text-[#9C9C9C]" style={{ fontWeight: 300 }}>
                    저장된 임시 데이터 삭제
                  </p>
                </div>
                <span className="text-[13px] text-[#9C9C9C]" style={{ fontWeight: 300 }}>
                  124MB
                </span>
              </div>
            </button>
          </div>
        </section>

        {/* Divider */}
        <div className="h-2 bg-[#F7F7F7] mb-6" />

        {/* About & Support */}
        <section className="px-6 pb-6">
          <h3 className="text-[13px] text-[#9C9C9C] mb-4" style={{ fontWeight: 400 }}>
            정보 및 지원
          </h3>
          <div className="space-y-1">
            {aboutSettings.map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center justify-between py-4 hover:bg-[#F7F7F7] transition-colors rounded-xl px-3"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-[#9C9C9C]" strokeWidth={1.5} />
                  <span className="text-[14px] text-[#1A1A1A]" style={{ fontWeight: 300 }}>
                    {item.label}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {item.value && (
                    <span className="text-[13px] text-[#9C9C9C]" style={{ fontWeight: 300 }}>
                      {item.value}
                    </span>
                  )}
                  {!item.value && (
                    <ChevronRight className="w-5 h-5 text-[#9C9C9C]" strokeWidth={1.5} />
                  )}
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="h-2 bg-[#F7F7F7] mb-6" />

        {/* Logout */}
        <section className="px-6 pb-8">
          <button className="w-full flex items-center justify-center gap-3 py-4 bg-white border border-[#EAEAEA] text-[#FF4444] rounded-2xl hover:bg-[#FFF5F5] transition-colors">
            <LogOut className="w-5 h-5" strokeWidth={1.5} />
            <span className="text-[15px]" style={{ fontWeight: 400 }}>
              로그아웃
            </span>
          </button>
        </section>

        {/* Footer Info */}
        <section className="px-6 pb-8">
          <div className="text-center space-y-2">
            <p className="text-[11px] text-[#9C9C9C]" style={{ fontWeight: 300 }}>
              FITTIM, Fit ME.
            </p>
            <p className="text-[10px] text-[#CACACA]" style={{ fontWeight: 300 }}>
              © 2024 FITTIM. All rights reserved.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
