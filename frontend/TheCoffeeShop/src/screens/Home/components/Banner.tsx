import Box from '@/components/Box';
import {Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
import Carousel from 'react-native-reanimated-carousel';
import dataBanner from './dataBanner.json';

const Banner = () => {
  const width = Dimensions.get('window').width - 24;
  const height = 150;

  const renderItem = (image: string) => {
    return (
      <FastImage
        source={{
          uri: image,
        }}
        style={{width: '100%', height: '100%'}}
        resizeMode={'cover'}
      />
    );
  };
  return (
    <Box
      backgroundColor={'white'}
      justifyContent='center'
      alignItems='center'
      height={height}
      borderRadius={12}
      marginTop={12}
      overflow={'hidden'}>
      <Carousel
        loop={true}
        autoFillData={true}
        width={width}
        height={height}
        autoPlay={true}
        data={dataBanner}
        autoPlayInterval={2000}
        pagingEnabled={true}
        renderItem={({item}) => renderItem(item)}
      />
    </Box>
  );
};

export default Banner;
