import {RouteName} from '@/app/routes/routeConfigs';
import Box from '@/components/Box';
import LayoutScreen from '@/components/LayoutScreen';
import CustomModal from '@/components/ModalRef/CustomModal';
import ModalController from '@/components/ModalRef/ModalController';
import Typography from '@/components/Typography';
import {useNavigation} from '@react-navigation/native';
import {Button, TouchableOpacity} from 'react-native';
import Toast from 'react-native-toast-message';

const Promotion = () => {
  console.log('Promotion: ');
  const navigation = useNavigation();
  const showToast = () => {
    Toast.show({
      type: 'tomatoToast',
      position:'bottom',
      visibilityTime: 2000,
      props: { uuid: 'bba1a7d0-6ab2-4a0a-a76e-ebbe05ae6d70' }
    });
  };
  return (
    <LayoutScreen flex={1}>
      <Box flex={1} justifyContent={'center'} alignItems={'center'}>
        <Typography color={'white'}>Promotion</Typography>
        <TouchableOpacity onPress={() => navigation.navigate(RouteName.HomeScreen as never)}>
          <Typography>Go to home</Typography>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            ModalController.showModal(
              <>
                <Box backgroundColor={'red'} width={200} height={200}>
                  <Typography>hihi</Typography>
                </Box>
              </>,
            )
          }>
          <Typography>Show modal</Typography>
        </TouchableOpacity>
        <Button title='Show toast' onPress={showToast} />
      </Box>
      <CustomModal />
    </LayoutScreen>
  );
};

export default Promotion;
