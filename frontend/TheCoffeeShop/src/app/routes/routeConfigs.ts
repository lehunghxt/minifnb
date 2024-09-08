import { LinkingOptions } from '@react-navigation/native';
import { Platform, StatusBar } from 'react-native';
import { enableFreeze } from 'react-native-screens';

enableFreeze();

if (Platform.OS === 'android') {
  StatusBar.setTranslucent(true);
}

export enum RouteName {
  Authenticate = 'Authenticate',
  HomeScreen = 'HomeScreen',
  ProductScreen = 'ProductScreen',
  ProductDetailScreen = 'ProductDetailScreen',
  CartScreen = 'CartScreen',
  StoreScreen = 'StoreScreen',
  PromotionScreen = 'PromotionScreen',
  OtherScreen = 'OtherScreen',
}

export const initialRouteName = RouteName.Authenticate;
export interface ModalScreenProps {
  screen?: RouteName;
}
export type RootStackParamList = {
  [RouteName.Authenticate]: undefined;
  [RouteName.HomeScreen]: undefined;
  [RouteName.ProductScreen]: undefined;
  [RouteName.ProductDetailScreen]: undefined;
  [RouteName.CartScreen]: undefined;
  [RouteName.StoreScreen]: undefined;
  [RouteName.OtherScreen]: undefined;
};
export const linking: LinkingOptions<ReactNavigation.RootParamList> = {
  prefixes: ['/'],
  config: {
    screens: {
      [RouteName.Authenticate]: 'authenticate',
      [RouteName.HomeScreen]: 'HomeScreen',
      [RouteName.ProductScreen]: 'ProductScreen',
      [RouteName.ProductDetailScreen]: 'ProductDetailScreen',
      [RouteName.CartScreen]: 'CartScreen',
      [RouteName.StoreScreen]: 'StoreScreen',
      [RouteName.PromotionScreen]: 'PromotionScreen',
      [RouteName.OtherScreen]: 'OtherScreen',
    },
  },
};
