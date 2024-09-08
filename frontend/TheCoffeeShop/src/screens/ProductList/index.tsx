import Box from '@/components/Box';
import LayoutScreen from '@/components/LayoutScreen';
import ProductCateList from './components/ProductList';
import React from 'react';

const ProductListScreen = () => {
  return (
    <LayoutScreen flex={1} backgroundColor={'white'}>
      <Box flex={1} paddingHorizontal={12}>
        <ProductCateList />
      </Box>
    </LayoutScreen>
  );
};

export default ProductListScreen;
