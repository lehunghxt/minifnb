import { useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';

const useShowHideHeader = (initHeight: number) => {
  const ref = useRef(null);
  const {diffClamp} = Animated;
  const headerHeight = initHeight;

  const scrollY = useRef(new Animated.Value(0));
  const scrollYClamped = diffClamp(scrollY.current, 0, headerHeight);

  const translateY = scrollYClamped.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -(headerHeight)],
  });
    

  const translateYNumber = useRef();

  translateY.addListener(({value}) => {
    translateYNumber.current = value;
  });

  const handleScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {y: scrollY.current},
        },
      },
    ],
    {
      useNativeDriver: true,
    },
  );
  const getCloser = (value:any, checkOne:any, checkTwo:any) =>
    Math.abs(value - checkOne) < Math.abs(value - checkTwo) ? checkOne : checkTwo;

  const handleSnap = ({nativeEvent}:any) => {
    const offsetY = nativeEvent.contentOffset.y;
    if (
      !(
        translateYNumber.current === 0 ||
        translateYNumber.current === -headerHeight
      )
    ) {
      if (ref.current) {
        // @ts-ignore
        ref.current?.scrollToOffset({
          offset:
            getCloser(translateYNumber.current, -headerHeight, 0) ===
            -headerHeight
              ? offsetY + headerHeight
              : offsetY - headerHeight,
        });
      }
    }
  };
  const handleScrollToIndex = (index: number) => {
    // @ts-ignore
    ref?.current?.scrollToIndex({
      animated: false,
      index: index,
    });
  };
  const styles = StyleSheet.create({
    header: {
      position: 'absolute',
      left: 0,
      right: 0,
      width: '100%',
      zIndex: 1,
      backgroundColor:'white'
    },
  });
  return {handleScroll, handleSnap, styles, headerHeight, ref, translateY, handleScrollToIndex};
};

export default useShowHideHeader;