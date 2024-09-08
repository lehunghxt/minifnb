import Box from '@/components/Box';
import Icons from '@/components/Icons';
import LayoutScreen from '@/components/LayoutScreen';
import Typography from '@/components/Typography';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import { Image, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import dataPro from '../ProductList/dataPro.json';

const ProductDetail = () => {
  const route = useRoute();
  const params = route.params as any;
  const navigation:NavigationProp<any, any> = useNavigation();
  const { CloseIcon, HeartIcon } = Icons;
  const findProduct = dataPro.find(e => e.cateId == params?.cateId)?.productList.find(e => e.name == params.name);
  return (
    <LayoutScreen flex={1} backgroundColor={'white'}>
      <Box flex={1} backgroundColor={'white'} overflow={'hidden'}>
        <Box position={'absolute'} right={10} top={10} zIndex={100}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CloseIcon width={30} height={30}/>
          </TouchableOpacity>
        </Box>
        <Box width={'100%'} aspectRatio={1} borderRadius={12} overflow={'hidden'}>
          <Image
            source={{
              uri: findProduct?.image
            }}
            style={{width: '100%', height: '100%'}}
            resizeMode='cover'
            onError={() => {
              console.log('onError12: ');
            }}
          />
        </Box>
        {/* basic info */}
        <Box padding={12} gap={12}>
          {/* name and price */}
          <Box flexDirection={'row'} gap={12} alignItems={'center'}>
            <Box flex={1}>
              <Typography fontSize={24} color={'bliack'} fontWeight={'bold'}>{findProduct?.name}</Typography>
              <Typography fontSize={18} fontWeight={'bold'}>{ findProduct?.price }</Typography>
            </Box>
            <Box paddingHorizontal={10}>
              <HeartIcon width={30} height={30}/>
            </Box>
          </Box>
          {/* description */}
          <Box>
            <Typography>
              Vị matcha êm mượt nhờ kết hợp với sữa yến mạch. Khuấy đều để thưởng trọn hương vị.
            </Typography>
          </Box>
        </Box>

      </Box>
    </LayoutScreen>
  );
};

export default ProductDetail;
