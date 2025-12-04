import { Home, Sparkles, ShoppingBag, Store, User } from 'lucide-react';
import { useState } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { HomeScreen } from './components/HomeScreen';
import { OutfitResultsScreen } from './components/OutfitResultsScreen';
import { OutfitDetailScreen } from './components/OutfitDetailScreen';
import { LoadingScreen } from './components/LoadingScreen';
import { WardrobeScreen } from './components/WardrobeScreen';
import { ClothingDetailScreen } from './components/ClothingDetailScreen';
import { AddClothingScreen } from './components/AddClothingScreen';
import { ShopScreen } from './components/ShopScreen';
import { ProductDetailScreen } from './components/ProductDetailScreen';
import { MyScreen } from './components/MyScreen';
import { EditProfileScreen } from './components/EditProfileScreen';
import { NotificationSettingsScreen } from './components/NotificationSettingsScreen';
import { HistoryScreen } from './components/HistoryScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { SettingsScreen } from './components/SettingsScreen';

type ScreenType = 
  | 'login'
  | 'home' 
  | 'loading'
  | 'results' 
  | 'outfit-detail'
  | 'wardrobe' 
  | 'clothing-detail'
  | 'add-clothing'
  | 'shop'
  | 'product-detail'
  | 'my'
  | 'edit-profile'
  | 'notifications'
  | 'history'
  | 'profile'
  | 'settings';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentScreen('home');
  };

  const renderScreen = () => {
    if (!isLoggedIn && currentScreen !== 'login') {
      return <LoginScreen onLogin={handleLogin} />;
    }

    switch (currentScreen) {
      case 'login':
        return <LoginScreen onLogin={handleLogin} />;
      case 'home':
        return <HomeScreen 
          onGenerateOutfit={() => setCurrentScreen('loading')}
          onProfileClick={() => setCurrentScreen('profile')}
        />;
      case 'loading':
        return <LoadingScreen onComplete={() => setCurrentScreen('results')} />;
      case 'results':
        return <OutfitResultsScreen 
          onBack={() => setCurrentScreen('home')}
          onSelectOutfit={() => setCurrentScreen('outfit-detail')}
        />;
      case 'outfit-detail':
        return <OutfitDetailScreen onBack={() => setCurrentScreen('results')} />;
      case 'wardrobe':
        return <WardrobeScreen 
          onSelectItem={() => setCurrentScreen('clothing-detail')}
          onAddItem={() => setCurrentScreen('add-clothing')}
        />;
      case 'clothing-detail':
        return <ClothingDetailScreen onBack={() => setCurrentScreen('wardrobe')} />;
      case 'add-clothing':
        return <AddClothingScreen onBack={() => setCurrentScreen('wardrobe')} />;
      case 'shop':
        return <ShopScreen onSelectProduct={() => setCurrentScreen('product-detail')} />;
      case 'product-detail':
        return <ProductDetailScreen onBack={() => setCurrentScreen('shop')} />;
      case 'my':
        return <MyScreen 
          onEditProfile={() => setCurrentScreen('edit-profile')}
          onNotifications={() => setCurrentScreen('notifications')}
          onHistory={() => setCurrentScreen('history')}
          onSettings={() => setCurrentScreen('settings')}
        />;
      case 'edit-profile':
        return <EditProfileScreen onBack={() => setCurrentScreen('my')} />;
      case 'notifications':
        return <NotificationSettingsScreen onBack={() => setCurrentScreen('my')} />;
      case 'history':
        return <HistoryScreen onBack={() => setCurrentScreen('my')} />;
      case 'profile':
        return <ProfileScreen 
          onBack={() => setCurrentScreen('home')} 
          onEditProfile={() => setCurrentScreen('edit-profile')}
        />;
      case 'settings':
        return <SettingsScreen 
          onBack={() => setCurrentScreen('my')} 
          onNotifications={() => setCurrentScreen('notifications')}
        />;
      default:
        return <HomeScreen onGenerateOutfit={() => setCurrentScreen('loading')} />;
    }
  };

  return (
    <div className="w-full h-screen max-w-[390px] mx-auto bg-white overflow-hidden flex flex-col">
      {renderScreen()}

      {/* Bottom Tab Bar - Only show when logged in and not on login screen or detail screens */}
      {isLoggedIn && 
       currentScreen !== 'login' && 
       currentScreen !== 'clothing-detail' &&
       currentScreen !== 'add-clothing' &&
       currentScreen !== 'outfit-detail' &&
       currentScreen !== 'product-detail' &&
       currentScreen !== 'edit-profile' &&
       currentScreen !== 'notifications' &&
       currentScreen !== 'history' &&
       currentScreen !== 'loading' &&
       currentScreen !== 'profile' &&
       currentScreen !== 'settings' && (
        <nav className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#EAEAEA] px-4 py-3">
          <div className="flex items-center justify-around">
            <button 
              onClick={() => setCurrentScreen('home')}
              className="flex flex-col items-center gap-1 group"
            >
              <Home 
                className={`w-5 h-5 ${currentScreen === 'home' ? 'text-[#1A1A1A]' : 'text-[#9C9C9C]'}`} 
                strokeWidth={1.5} 
              />
              <span 
                className={`text-[10px] ${currentScreen === 'home' ? 'text-[#1A1A1A]' : 'text-[#9C9C9C]'}`} 
                style={{ fontWeight: 300 }}
              >
                Home
              </span>
            </button>
            <button 
              onClick={() => setCurrentScreen('results')}
              className="flex flex-col items-center gap-1 group"
            >
              <Sparkles 
                className={`w-5 h-5 ${['results', 'outfit-detail', 'loading'].includes(currentScreen) ? 'text-[#1A1A1A]' : 'text-[#9C9C9C]'}`} 
                strokeWidth={1.5} 
              />
              <span 
                className={`text-[10px] ${['results', 'outfit-detail', 'loading'].includes(currentScreen) ? 'text-[#1A1A1A]' : 'text-[#9C9C9C]'}`} 
                style={{ fontWeight: 300 }}
              >
                Fit
              </span>
            </button>
            <button 
              onClick={() => setCurrentScreen('wardrobe')}
              className="flex flex-col items-center gap-1 group"
            >
              <ShoppingBag 
                className={`w-5 h-5 ${['wardrobe', 'clothing-detail', 'add-clothing'].includes(currentScreen) ? 'text-[#1A1A1A]' : 'text-[#9C9C9C]'}`} 
                strokeWidth={1.5} 
              />
              <span 
                className={`text-[10px] ${['wardrobe', 'clothing-detail', 'add-clothing'].includes(currentScreen) ? 'text-[#1A1A1A]' : 'text-[#9C9C9C]'}`} 
                style={{ fontWeight: 300 }}
              >
                Wardrobe
              </span>
            </button>
            <button 
              onClick={() => setCurrentScreen('shop')}
              className="flex flex-col items-center gap-1 group"
            >
              <Store 
                className={`w-5 h-5 ${['shop', 'product-detail'].includes(currentScreen) ? 'text-[#1A1A1A]' : 'text-[#9C9C9C]'}`} 
                strokeWidth={1.5} 
              />
              <span 
                className={`text-[10px] ${['shop', 'product-detail'].includes(currentScreen) ? 'text-[#1A1A1A]' : 'text-[#9C9C9C]'}`} 
                style={{ fontWeight: 300 }}
              >
                Shop
              </span>
            </button>
            <button 
              onClick={() => setCurrentScreen('my')}
              className="flex flex-col items-center gap-1 group"
            >
              <User 
                className={`w-5 h-5 ${['my', 'edit-profile', 'notifications', 'history'].includes(currentScreen) ? 'text-[#1A1A1A]' : 'text-[#9C9C9C]'}`} 
                strokeWidth={1.5} 
              />
              <span 
                className={`text-[10px] ${['my', 'edit-profile', 'notifications', 'history'].includes(currentScreen) ? 'text-[#1A1A1A]' : 'text-[#9C9C9C]'}`} 
                style={{ fontWeight: 300 }}
              >
                My
              </span>
            </button>
          </div>
        </nav>
      )}
    </div>
  );
}