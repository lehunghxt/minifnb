import Box from '@/components/Box';
import Icons from '@/components/Icons';
import TextField from '@/components/TextField';
import Typography from '@/components/Typography';
import { TouchableOpacity } from 'react-native';

const SearchStore = () => {
  const { MapIcon } = Icons;
  return (
    <Box flexDirection={'row'} alignItems={'center'} gap={4}>
      <Box flex={1} overflow={'hidden'}>
        <TextField />
      </Box>
      <TouchableOpacity>
        <Box flexDirection={'row'} alignItems={'center'}>
          <MapIcon width={40} height={40}/>
          <Typography fontWeight={'bold'}>Bản đồ</Typography>
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

export default SearchStore;