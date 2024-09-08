import { compareObject } from '@/utils';
import React, { PropsWithChildren } from 'react';
import { Text, TextProps, TextStyle } from 'react-native';

interface ITypographyProps extends TextStyle, TextProps,PropsWithChildren{

}
const Typography = (props: ITypographyProps) => {
  const { children } = props;
  return (
    <Text style={{...props}}>{ children}</Text>
  );
};
export default React.memo(Typography, (prev, next) => compareObject(prev, next));