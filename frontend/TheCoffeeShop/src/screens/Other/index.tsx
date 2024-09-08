import {RouteName} from '@/app/routes/routeConfigs';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

const Other = () => {
  console.log('Other: ');
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'white'}}>Other</Text>
        <TouchableOpacity onPress={() => navigation.navigate(RouteName.HomeScreen as never)}>
          <Text>Go to home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Other;
