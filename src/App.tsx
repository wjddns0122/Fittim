import { Home, Sparkles, ShoppingBag, Store, User } from 'lucide-react';
import { useState } from 'react';
import { HomeScreen } from './components/HomeScreen';
import { OutfitResultsScreen } from './components/OutfitResultsScreen';
import { WardrobeScreen } from './components/WardrobeScreen';
import { ShopScreen } from './components/ShopScreen';
import { MyScreen } from './components/MyScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'results' | 'wardrobe' | 'shop' | 'my'>('my');

  return (
    <div className="w-full h-screen max-w-[390px] mx-auto bg-white overflow-hidden flex flex-col">
      {currentScreen === 'home' && (
        <HomeScreen onGenerateOutfit={() => setCurrentScreen('results')} />
      )}
      {currentScreen === 'results' && (
        <OutfitResultsScreen onBack={() => setCurrentScreen('home')} />
      )}
      {currentScreen === 'wardrobe' && <WardrobeScreen />}
      {currentScreen === 'shop' && <ShopScreen />}
      {currentScreen === 'my' && <MyScreen />}

      {/* Bottom Tab Bar - Global */}
      <nav className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#F0F0F0] px-4 py-3">
        <div className="flex items-center justify-around">
          <button 
            onClick={() => setCurrentScreen('home')}
            className="flex flex-col items-center gap-1 group"
          >
            <Home 
              className={`w-5 h-5 ${currentScreen === 'home' ? 'text-[#1A1A1A]' : 'text-[#6B6B6B]'}`} 
              strokeWidth={1.5} 
            />
            <span 
              className={`text-[10px] ${currentScreen === 'home' ? 'text-[#1A1A1A]' : 'text-[#6B6B6B]'}`} 
              style={{ fontWeight: 400 }}
            >
              Home
            </span>
          </button>
          <button className="flex flex-col items-center gap-1 group">
            <Sparkles className="w-5 h-5 text-[#6B6B6B]" strokeWidth={1.5} />
            <span className="text-[10px] text-[#6B6B6B]" style={{ fontWeight: 400 }}>Fit</span>
          </button>
          <button 
            onClick={() => setCurrentScreen('wardrobe')}
            className="flex flex-col items-center gap-1 group"
          >
            <ShoppingBag 
              className={`w-5 h-5 ${currentScreen === 'wardrobe' ? 'text-[#1A1A1A]' : 'text-[#6B6B6B]'}`} 
              strokeWidth={1.5} 
            />
            <span 
              className={`text-[10px] ${currentScreen === 'wardrobe' ? 'text-[#1A1A1A]' : 'text-[#6B6B6B]'}`} 
              style={{ fontWeight: 400 }}
            >
              Wardrobe
            </span>
          </button>
          <button 
            onClick={() => setCurrentScreen('shop')}
            className="flex flex-col items-center gap-1 group"
          >
            <Store 
              className={`w-5 h-5 ${currentScreen === 'shop' ? 'text-[#1A1A1A]' : 'text-[#6B6B6B]'}`} 
              strokeWidth={1.5} 
            />
            <span 
              className={`text-[10px] ${currentScreen === 'shop' ? 'text-[#1A1A1A]' : 'text-[#6B6B6B]'}`} 
              style={{ fontWeight: 400 }}
            >
              Shop
            </span>
          </button>
          <button 
            onClick={() => setCurrentScreen('my')}
            className="flex flex-col items-center gap-1 group"
          >
            <User 
              className={`w-5 h-5 ${currentScreen === 'my' ? 'text-[#1A1A1A]' : 'text-[#6B6B6B]'}`} 
              strokeWidth={1.5} 
            />
            <span 
              className={`text-[10px] ${currentScreen === 'my' ? 'text-[#1A1A1A]' : 'text-[#6B6B6B]'}`} 
              style={{ fontWeight: 400 }}
            >
              My
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
}
