import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const loadingMessages = [
  '10초만 기다려줘, 네 스타일 찾는 중이야',
  '오늘 너한테 딱 맞는 옷을 골라보고 있어',
  '지금 수천 개의 룩을 분석하는 중',
  '너만을 위한 특별한 코디를 준비하고 있어',
  '완벽한 조합을 만드는 중이야'
];

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [message, setMessage] = useState(loadingMessages[0]);

  useEffect(() => {
    // Random message
    const randomMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
    setMessage(randomMessage);

    // Simulate loading
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-8 bg-white">
      {/* Spinner */}
      <div className="mb-8">
        <Loader2 className="w-12 h-12 text-[#1A1A1A] animate-spin" strokeWidth={1.5} />
      </div>

      {/* Loading Message */}
      <p 
        className="text-[17px] text-center text-[#1A1A1A] leading-[1.5] max-w-[280px]" 
        style={{ fontWeight: 300 }}
      >
        {message}
      </p>

      {/* Subtext */}
      <p 
        className="text-[13px] text-[#9C9C9C] mt-4" 
        style={{ fontWeight: 300 }}
      >
        잠시만 기다려주세요...
      </p>
    </div>
  );
}
