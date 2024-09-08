import { LogBox, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import MainNavigator from './app/routes/MainNavigator';
import Box from './components/Box';

if (!__DEV__) {
  console.log = function () { };
  console.info = function () { };
  console.warn = function () { };
  console.error = function () { };
  console.debug = function () { };
  LogBox.ignoreAllLogs();
} else {
  LogBox.ignoreLogs(['Require cycle:']);
}
LogBox.ignoreAllLogs();
const App = () => {
  const toastConfig = {
    tomatoToast: ({ props }: { props:any }) => (
      <Box width={'90%'} height={50} backgroundColor={'#0FFF50'} borderRadius={12} padding={12} margin={12}>
        <Text>{props.uuid}</Text>
      </Box>
    )
  };
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Box flex={1}>
        <MainNavigator />
        <Toast config={toastConfig}/>
      </Box>
    </GestureHandlerRootView>
  );
};
export default App;
