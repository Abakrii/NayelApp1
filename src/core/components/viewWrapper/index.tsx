import React, {FC, ReactNode} from 'react';
import {View} from 'react-native';
import styles from './styles';

const ViewWrapper: FC<ReactNode> = ({children = <></>}): JSX.Element => {
  const {textView} = styles || {};
  return <View style={textView}>{children}</View>;
};

export default ViewWrapper;
