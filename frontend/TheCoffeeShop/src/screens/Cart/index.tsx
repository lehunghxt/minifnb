import { RouteName } from '@/app/routes/routeConfigs';
import Box from '@/components/Box';
import LayoutScreen from '@/components/LayoutScreen';
import Typography from '@/components/Typography';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const CartScreen = () => {
  console.log('CartScreen: ');
  const navigation = useNavigation();
  return (
    <LayoutScreen flex={1}>
      <Box flex={1} justifyContent={'center'} alignItems={'center'}>
        <Typography color={'white'}>CartScreen</Typography>
        <TouchableOpacity onPress={() => navigation.navigate(RouteName.ProductDetailScreen as never)}>
          <Typography>Go to product list</Typography>
        </TouchableOpacity>
      </Box>
    </LayoutScreen>
  );
};

export default CartScreen;
