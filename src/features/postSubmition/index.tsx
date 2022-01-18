import React, {FC} from 'react';
import {FlatList} from 'react-native';
import ListItem from './components/listItem';
import {postSubmitSelector} from './store/selectors';
const PostSubmition: FC = (): JSX.Element => {
  const {holeData = []} = postSubmitSelector();
  const renderItem = ({item}: any) => {
    return <ListItem {...item} />;
  };

  return (
    <FlatList
      data={holeData}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
};

export default PostSubmition;
