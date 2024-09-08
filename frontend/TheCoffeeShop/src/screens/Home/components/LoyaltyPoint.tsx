import Box from '@/components/Box';
import Typography from '@/components/Typography';
import {BarcodeCreatorView, BarcodeFormat} from 'react-native-barcode-creator';
const LoyaltyPoint = () => {
  return (
    <Box
      backgroundColor={'orange'}
      width={'100%'}
      padding={12}
      borderRadius={12}
      gap={4}>
      <Box width={'100%'}>
        <Typography fontWeight={'bold'} color={'white'}>Hùng Lê</Typography>
        <Typography fontSize={12} fontStyle={'italic'} color={'white'}>Mới</Typography>
      </Box>
      <Box
        width={'100%'}
        borderRadius={8}
        backgroundColor={'white'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <BarcodeCreatorView
          value={'0923123123'}
          background={'#FFFFFF'}
          foregroundColor={'#000000'}
          format={BarcodeFormat.CODE128}
          style={{
            height: 50,
            width: 250,
            marginTop: 8,
            alignSelf: 'center',
          }}
        />
        <Typography fontWeight={'bold'}>0923123123</Typography>
      </Box>
      <Box
        position={'absolute'}
        right={0}
        top={12}
        backgroundColor={'lightgray'}
        borderTopLeftRadius={16}
        borderBottomLeftRadius={16}
        padding={8}
      >
        <Typography fontSize={12} fontWeight={'bold'}>Đổi 0 BEAN</Typography>
      </Box>
    </Box>
  );
};

export default LoyaltyPoint;
