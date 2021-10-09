import React, {FC} from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';
const {loaderContainer, horizontalLoader} = styles;

const Loader: FC = (): JSX.Element => (
  <View style={[loaderContainer, horizontalLoader]}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);

export default Loader;
