import {StyleSheet} from 'react-native';
import {colors} from '../../../../core/constants/colors';

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 16,
    marginTop: 16,
    borderColor: colors.mediumLightShadeOfGray,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
  },
  itemStyle: {
    width: '70%',
    textAlign: 'center',
  },
});

export default styles;
