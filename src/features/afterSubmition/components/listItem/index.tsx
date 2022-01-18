import React from 'react';
import styles from './styles';
import {View, Text} from 'react-native';
import {ListItemProps} from './interfaces';
import {ListItemValues} from './utils';
const {listContainer, itemStyle} = styles;

const ListItem = (props: ListItemProps): JSX.Element => {
  let items = ListItemValues(props);
  return (
    <View style={listContainer}>
      {items.map(item => {
        const {id, value} = item;
        return (
          <Text key={id} style={itemStyle}>
            {value}
          </Text>
        );
      })}
    </View>
  );
};

export default ListItem;
