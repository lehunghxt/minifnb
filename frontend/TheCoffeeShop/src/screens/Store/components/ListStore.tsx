import Box from '@/components/Box';
import Typography from '@/components/Typography';
import {IStoreInfo} from '@/features/Store/type';
import {compareObject} from '@/utils';
import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import FastImage from 'react-native-fast-image';
import { FlashList } from '@shopify/flash-list';

interface IListStoreProps {
  data: IStoreInfo[];
}
const ListStore = (props: IListStoreProps) => {
  const {data} = props;
  return (
    <FlashList
      data={data}
      renderItem={({item}: {item: IStoreInfo; index: number}) => <StoreItem item={item} />}
      keyExtractor={(data, index) => `${data.storeName}_${index}`}
      showsVerticalScrollIndicator={false}
      estimatedItemSize={124}
    />
  );
};

export default ListStore;

interface IStoreItemProps {
  item: IStoreInfo;
}
const StoreItem = React.memo(
  (props: IStoreItemProps) => {
    const {item} = props;
    return (
      <TouchableWithoutFeedback>
        <Box
          flexDirection={'row'}
          gap={12}
          padding={12}
          backgroundColor={'white'}
          borderRadius={16}>
          <Box width={100} height={100} borderRadius={12} overflow={'hidden'}>
            <FastImage source={{uri: item.image}} style={{width: '100%', height: '100%', borderRadius: 12}} />
          </Box>
          <Box flex={1}>
            <Typography fontWeight={'thin'}>THE COFFEE HOUSE</Typography>
            <Box flex={1}>
              <Typography fontWeight={'bold'} numberOfLines={2} fontSize={16}>
                {item.storeName}
              </Typography>
            </Box>
            <Typography fontSize={12}>{item.storeWktime}</Typography>
          </Box>
        </Box>
      </TouchableWithoutFeedback>
    );
  },
  (prev, next) => compareObject(prev, next),
);
