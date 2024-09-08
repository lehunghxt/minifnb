import Icons from '@/components/Icons';
import {HomeScreen, OtherScreen, ProductListScreen, PromotionScreen, StoreScreen} from '@/screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouteName} from './routeConfigs';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const {HomeIcon, CupTeaIcon, StoreIcon, VoucherIcon, ListIcon} = Icons;
  const configTabScreens = [
    {
      navigationKey: RouteName.HomeScreen,
      routeName: RouteName.HomeScreen,
      component: HomeScreen,
      options: {
        tabBarLabel: 'Trang chủ',
        tabBarIcon: () => <HomeIcon width={20} height={20} />,
      },
    },
    {
      navigationKey: RouteName.ProductScreen,
      routeName: RouteName.ProductScreen,
      component: ProductListScreen,
      options: {
        tabBarLabel: 'Đặt hàng',
        tabBarIcon: () => <CupTeaIcon width={20} height={20} />,
      },
    },
    {
      navigationKey: RouteName.StoreScreen,
      routeName: RouteName.StoreScreen,
      component: StoreScreen,
      options: {
        tabBarLabel: 'Cửa hàng',
        tabBarIcon: () => <StoreIcon width={20} height={20} />,
      },
    },
    {
      navigationKey: RouteName.PromotionScreen,
      routeName: RouteName.PromotionScreen,
      component: PromotionScreen,
      options: {
        tabBarLabel: 'Ưu đãi',
        tabBarIcon: () => <VoucherIcon width={20} height={20} />,
      },
    },
    {
      navigationKey: RouteName.OtherScreen,
      routeName: RouteName.OtherScreen,
      component: OtherScreen,
      options: {
        tabBarLabel: 'Khác',
        tabBarIcon: () => <ListIcon width={20} height={20} />,
      },
    },
  ];
  return (
    <Tab.Navigator>
      {configTabScreens.map(item => (
        <Tab.Screen
          key={item.routeName}
          navigationKey={item.navigationKey}
          options={{
            ...item.options,

            headerShown: false,
            tabBarActiveBackgroundColor: 'lightgray',
            tabBarActiveTintColor: 'white',
            tabBarLabelStyle: {marginBottom: 8},
          }}
          name={item.routeName}
          component={item.component}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigator;
