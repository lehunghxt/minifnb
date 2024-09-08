import { RouteName } from '@/app/routes/routeConfigs';
import Box from '@/components/Box';
import ButtonOpacity from '@/components/Button/ButtonOpacity';
import Icons from '@/components/Icons';
import Typography from '@/components/Typography';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';

interface IQuickMenu {
  icon: JSX.Element;
  title: string;
  route: RouteName;
}
const QuickMenu = () => {
  const {DeliveryIcon, CoffeeTeaIcon, CoffeeBagIcon, OrderIcon, BeanIcon, MailHeartIcon, DiamondIcon} = Icons;
  const navigation = useNavigation();
  const dataMenu: IQuickMenu[] = [
    {
      icon: <DeliveryIcon />,
      title: 'Giao hàng',
      route: RouteName.ProductScreen,
    },
    {
      icon: <CoffeeTeaIcon />,
      title: 'Mang đi',
      route: RouteName.ProductScreen,
    },
    {
      icon: <CoffeeBagIcon />,
      title: 'Cà phê \nhạt rang',
      route: RouteName.ProductScreen,
    },
    {
      icon: <BeanIcon />,
      title: 'Đổi BEAN',
      route: RouteName.ProductScreen,
    },
    {
      icon: <OrderIcon />,
      title: 'Đơn hàng',
      route: RouteName.ProductScreen,
    },
    {
      icon: <MailHeartIcon />,
      title: 'Góp ý',
      route: RouteName.ProductScreen,
    },
    {
      icon: <DiamondIcon />,
      title: 'Hạng thành viên',
      route: RouteName.ProductScreen,
    },
  ];
  const renderItem = ({item}: {item: IQuickMenu; index: number}) => {
    return (
      <>
        <ButtonOpacity onPress={() => navigation.navigate(item.route as never)}>
          <Box backgroundColor={'white'} width={90} justifyContent={'center'} alignItems={'center'} gap={4}>
            {item.icon}
            <Typography
              adjustsFontSizeToFit
              numberOfLines={2}
              textAlign={'center'}
              fontSize={12}
              fontWeight={'bold'}>
              {item.title}
            </Typography>
          </Box>
        </ButtonOpacity>
      </>
    );
  };

  return (
    <Box
      width={'100%'}
      borderRadius={8}
      borderWidth={1}
      borderColor={'lightgray'}
      padding={12}
      marginTop={12}
    >
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={dataMenu}
        renderItem={renderItem}
        keyExtractor={(data, index) => `${data.route}_${index}`}
      />
    </Box>
  );
};

export default QuickMenu;
