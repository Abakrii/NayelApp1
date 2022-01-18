import {useSelector} from 'react-redux';
import {RootState} from '../../../store/rootReducer';

export function preSubmitSelector() {
  const {preSubmitionRequestIsLoading, navigateToPostSubmitionScreen} =
    useSelector((state: RootState) => ({
      preSubmitionRequestIsLoading:
        state.preSubmitionReducer.preSubmitionRequestIsLoading,
      navigateToPostSubmitionScreen:
        state.preSubmitionReducer.navigateToPostSubmitionScreen,
    }));
  return {
    preSubmitionRequestIsLoading,
    navigateToPostSubmitionScreen,
  };
}
