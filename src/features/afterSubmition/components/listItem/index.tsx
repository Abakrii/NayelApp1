import React from 'react';
import styles from './styles';
import {View, Text} from 'react-native';
const {listContainer, itemStyle} = styles;
import {ListItemProps} from './interfaces';
const ListItem = (props: ListItemProps): JSX.Element => {
  return (
    <View style={listContainer}>
      <Text style={itemStyle}>userId: {props.userId}</Text>
      <Text style={itemStyle}>id: {props.id}</Text>
      <Text style={itemStyle}>title: {props.title}</Text>
      <Text style={itemStyle}>body: {props.body}</Text>
    </View>
  );
};

export default ListItem;
