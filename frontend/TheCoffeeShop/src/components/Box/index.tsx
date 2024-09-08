import React, { PropsWithChildren } from 'react';
import { View, ViewStyle } from 'react-native';

interface IBoxProps extends ViewStyle, PropsWithChildren {
  style?: ViewStyle;
}
const Box = (props: IBoxProps) => {
  const { children, style } = props;
  return (
    <View style={{...props, ...style}}>{ children }</View>
  );
};

export default Box;