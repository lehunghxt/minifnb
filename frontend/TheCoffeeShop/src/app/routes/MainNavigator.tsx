import {linking, RootStackParamList, RouteName} from '@/app/routes/routeConfigs';
import {NavigationContainer} from '@react-navigation/native';

import {CartScreen, ProductDetailScreen} from '@/screens';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {navigationRef} from './rootNavigation';
import TabNavigator from './TabNavigator';
const MainStack = createStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  return (
    <NavigationContainer linking={linking} ref={navigationRef}>
      <MainStack.Navigator initialRouteName={RouteName.HomeScreen}>
        <MainStack.Group
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}>
          <MainStack.Screen name={RouteName.Dashboard} component={TabNavigator} />
        </MainStack.Group>
        <MainStack.Group
          screenOptions={{
            presentation: 'transparentModal',
            headerShown: false,
            gestureEnabled: false,
            ...TransitionPresets.ModalSlideFromBottomIOS,
          }}>
          <MainStack.Screen name={RouteName.CartScreen} component={CartScreen} />
          <MainStack.Screen name={RouteName.ProductDetailScreen} component={ProductDetailScreen} />
        </MainStack.Group>
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigator;
