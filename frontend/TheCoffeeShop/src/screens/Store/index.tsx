import Box from '@/components/Box';
import LayoutScreen from '@/components/LayoutScreen';
import Header from './components/Header';
import ListStore from './components/ListStore';
import SearchStore from './components/SearchStore';
import storeData from './storeData.json';

const Store = () => {
  console.log('StoreScreen ');
  return (
    <LayoutScreen flex={1} backgroundColor={'white'}>
      <Box paddingHorizontal={12} paddingBottom={12}>
        <Header />
        <SearchStore/>
      </Box>
      <Box flex={1} backgroundColor={'white'} paddingHorizontal={12}>
        <ListStore data={storeData} />
      </Box>
    </LayoutScreen>
  );
};

export default Store;