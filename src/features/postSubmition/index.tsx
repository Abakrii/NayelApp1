import React from 'react';
import {View, TextInput} from 'react-native';

const PostSubmition = () => {
  const [value, onChangeText] = React.useState('Useless Multiline asdasdsad');
  return (
    <View
      style={{
        backgroundColor: value,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
      }}>
      <TextInput
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={{padding: 10}}
      />
    </View>
  );
};

export default PostSubmition;
