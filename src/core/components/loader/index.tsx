import React, {FC} from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';
import {colors} from '../../constants/colors';
const {loaderContainer, horizontalLoader} = styles;

const Loader: FC = (): JSX.Element => (
  <View style={[loaderContainer, horizontalLoader]}>
    <ActivityIndicator size="large" color={colors.darkBlue} />
  </View>
);

export default Loader;
