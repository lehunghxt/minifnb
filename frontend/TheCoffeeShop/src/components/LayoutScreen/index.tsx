import {PropsWithChildren} from 'react';
import {Platform, SafeAreaView, StatusBar, ViewStyle} from 'react-native';
import Box from '../Box';

interface ILayoutScreenProps extends ViewStyle, PropsWithChildren {}

function LayoutScreen(props: ILayoutScreenProps) {
  const {children} = props;
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle='dark-content' backgroundColor='red' />
      <Box style={{...props, marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0}}>{children}</Box>
    </SafeAreaView>
  );
}

export default LayoutScreen;
