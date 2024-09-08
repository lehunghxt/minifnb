import Box from '@/components/Box';
import Typography from '@/components/Typography';
import { ICategory } from '@/features/ProductList/type';
import { FlatList, TouchableOpacity } from 'react-native';
import dataCate from '../dataCate.json';
interface IProductCateProps {
  headerHeight: number;
  onScrollToCate: (index: number) => void;
}
const ProductCate = (props: IProductCateProps) => {
  const {headerHeight, onScrollToCate} = props;
  return (
    <>
      <Box height={headerHeight} paddingVertical={8}>
        <FlatList
          horizontal
          data={dataCate}
          renderItem={({item, index}: {item: ICategory; index: number}) => {
            return (
              <TouchableOpacity onPress={() => onScrollToCate(index)}>
                <CateItem item={item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(data, index) => `${data.cateId}_${index}`}
          windowSize={10}
          initialNumToRender={10}
          removeClippedSubviews
          maxToRenderPerBatch={7}
          showsHorizontalScrollIndicator={false}
        />
      </Box>
    </>
  );
};
export default ProductCate;

interface ICateItemProps {
  item: ICategory;
}
const CateItem = (props: ICateItemProps) => {
  const {item} = props;
  return (
    <Box
      backgroundColor={'orange'}
      padding={12}
      borderRadius={24}
      justifyContent={'center'}
      alignItems={'center'}
      marginHorizontal={8}>
      <Typography color={'white'}>{item.cateName}</Typography>
    </Box>
  );
};
