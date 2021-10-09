import React, {FC} from 'react';
import {FlatList} from 'react-native';
import ListItem from './components/listItem';
import {afterSubmitSelector} from '../../store/selectors/afterSubmitSelector';
const AfterSubmition: FC = (): JSX.Element => {
  const {holeData = []} = afterSubmitSelector();
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

export default AfterSubmition;
