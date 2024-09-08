import LayoutScreen from '@/components/LayoutScreen';
import Header from './components/Header';
import LoyaltyPoint from './components/LoyaltyPoint';
import QuickMenu from './components/QuickMenu';
import Banner from './components/Banner';
import { RefreshControl, ScrollView } from 'react-native';

const HomeScreen = () => {
  return (
    <LayoutScreen flex={1} backgroundColor={'white'} paddingHorizontal={12}>
      <ScrollView refreshControl={<RefreshControl refreshing={false} />}>
        <Header />
        <LoyaltyPoint />
        
        <QuickMenu />
        <Banner/>
      </ScrollView>
    </LayoutScreen>
  );
};

export default HomeScreen;
