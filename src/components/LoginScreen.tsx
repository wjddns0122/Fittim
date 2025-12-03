import { Mail } from 'lucide-react';

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-8 bg-white">
      {/* Logo Section */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 
          className="text-[42px] tracking-[0.2em] mb-6 text-[#1A1A1A]" 
          style={{ fontWeight: 200 }}
        >
          FITTIM
        </h1>
        
        {/* Slogan */}
        <div className="text-center mb-16">
          <p 
            className="text-[24px] leading-[1.4] text-[#1A1A1A] mb-2" 
            style={{ fontWeight: 300 }}
          >
            남들 말고,
          </p>
          <p 
            className="text-[24px] leading-[1.4] text-[#1A1A1A]" 
            style={{ fontWeight: 300 }}
          >
            진짜 나를 입는 시간 10초.
          </p>
        </div>

        <p 
          className="text-[13px] text-[#9C9C9C] tracking-[0.1em]" 
          style={{ fontWeight: 300 }}
        >
          FITTIM, Fit ME.
        </p>
      </div>

      {/* Login Section */}
      <div className="w-full pb-12 space-y-3">
        {/* Email Input */}
        <div className="relative">
          <Mail 
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9C9C9C]" 
            strokeWidth={1.5} 
          />
          <input
            type="email"
            placeholder="이메일 주소"
            className="w-full pl-12 pr-4 py-4 bg-[#FAFAFA] border border-[#EAEAEA] rounded-full text-[15px] text-[#1A1A1A] placeholder:text-[#9C9C9C] focus:outline-none focus:border-[#1A1A1A] transition-colors"
            style={{ fontWeight: 300 }}
          />
        </div>

        {/* Start Button */}
        <button 
          onClick={onLogin}
          className="w-full py-4 bg-[#1A1A1A] text-white rounded-full text-[15px] hover:bg-[#000000] transition-colors"
          style={{ fontWeight: 400 }}
        >
          시작하기
        </button>

        {/* Terms */}
        <p 
          className="text-[11px] text-center text-[#9C9C9C] pt-4" 
          style={{ fontWeight: 300 }}
        >
          시작하기를 누르면 서비스 이용약관 및<br />
          개인정보처리방침에 동의하는 것으로 간주됩니다.
        </p>
      </div>
    </div>
  );
}
