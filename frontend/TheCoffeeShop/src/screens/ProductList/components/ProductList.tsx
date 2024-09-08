import { RouteName } from '@/app/routes/routeConfigs';
import Box from '@/components/Box';
import Icons from '@/components/Icons';
import Typography from '@/components/Typography';
import { IProduct, IProductCategory } from '@/features/ProductList/type';
import useShowHideHeader from '@/hooks/useShowHideHeader';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { RefreshControl, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import dataPro from '../dataPro2.json';
import ProductCate from './ProductCate';
const ProductCateList = () => {
  const { headerHeight, ref, handleScrollToIndex } = useShowHideHeader(58);
  
  return (
    <>
      <ProductCate headerHeight={headerHeight} onScrollToCate={handleScrollToIndex}/>
      <FlashList<IProductCategory>
        contentContainerStyle={{paddingTop: 0}}
        data={dataPro as IProductCategory[]}
        renderItem={({item}: {item: IProductCategory}) => <ProductCateItem item={item} />}
        keyExtractor={(data, index) => `${data.cateId}_${index}_${data.cateName}`}
        showsVerticalScrollIndicator={false}
        ref={ref}
        refreshControl={<RefreshControl refreshing={false} />}
        estimatedItemSize={519}
      />
    </>
  );
};

export default ProductCateList;

interface IProductCateItemProps {
  item: IProductCategory;
}
const ProductCateItem = (props: IProductCateItemProps) => {
  const {item} = props;
  return (
    <FlashList
      data={item.productList}
      renderItem={({item}: {item: IProduct}) => <ProductItem item={item} />}
      keyExtractor={(data, index) => `${data.cateId}_${index}`}
      showsHorizontalScrollIndicator={false}
      estimatedItemSize={128}
      ListHeaderComponent={<>
        <Box width={'100%'} marginTop={12}>
          <Typography fontSize={20} fontWeight={'bold'}>{item.cateName}</Typography>
        </Box>
      </>}
    />
  );
};

interface IProductItemProps {
  item: IProduct;
}
const ProductItem = (props: IProductItemProps) => {
  const {item} = props;
  const { PlusIcon } = Icons;
  const navigation:NavigationProp<any,any> = useNavigation();
  const handleGoToDetail = () => {
    navigation.navigate(RouteName.ProductDetailScreen, {name: item.name, cateId: item.cateId});
  };
  return (
    <TouchableOpacity onPress={handleGoToDetail}>
      <Box flex={1} flexDirection={'row'} marginTop={12}>
        <Box width={'30%'} aspectRatio={1} borderRadius={12} overflow={'hidden'}>
          <FastImage
            source={{
              uri: item.image,
            }}
            style={{width: '100%', height: '100%'}}
            resizeMode='contain'
          />
        </Box>
        <Box padding={12} flex={1}>
          <Typography fontSize={14} fontWeight={'bold'}>{item.name}</Typography>
          <Typography fontSize={12}>{item.price}</Typography>
        </Box>
        <Box justifyContent={'center'} alignItems={'center'}>
          <TouchableOpacity>
            <PlusIcon width={28} height={28} />
          </TouchableOpacity>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};
