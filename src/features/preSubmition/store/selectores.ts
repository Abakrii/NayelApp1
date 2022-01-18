import {useSelector} from 'react-redux';
import {RootState} from '../../../store/rootReducer';

export function preSubmitSelector() {
  const {preSubmitionRequestIsLoading, navigateToAfterSubmitionScreen} =
    useSelector((state: RootState) => ({
      preSubmitionRequestIsLoading:
        state.preSubmitionReducer.preSubmitionRequestIsLoading,
      navigateToAfterSubmitionScreen:
        state.preSubmitionReducer.navigateToAfterSubmitionScreen,
    }));
  return {
    preSubmitionRequestIsLoading,
    navigateToAfterSubmitionScreen,
  };
}
