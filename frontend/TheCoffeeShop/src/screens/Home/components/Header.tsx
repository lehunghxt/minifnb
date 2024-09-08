import Box from '@/components/Box';
import Icons from '@/components/Icons';
import Typography from '@/components/Typography';
import ShareHeader from '@/containers/ShareHeader';

const Header = () => {
  const {MilkTeaIcon} = Icons;
  return (
    <ShareHeader
      titleComponent={
        <>
          <Box flexDirection='row' gap={12} alignItems={'center'}>
            <MilkTeaIcon width={40} height={40} />
            <Typography color={'black'}>Hùng ơi, Trái Cây Xay nhé!</Typography>
          </Box>
        </>
      }
    />
  );
};

export default Header;
