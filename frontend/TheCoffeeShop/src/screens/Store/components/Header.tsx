import Box from '@/components/Box';
import Typography from '@/components/Typography';
import ShareHeader from '@/containers/ShareHeader';
import React from 'react';

const Header = () => {
  return (
    <ShareHeader
      titleComponent={
        <>
          <Box flexDirection='row' gap={12} alignItems={'center'}>
            <Typography fontWeight={'bold'} fontSize={16} color={'black'}>Cửa hàng</Typography>
          </Box>
        </>
      }
    />
  );
};

export default Header;