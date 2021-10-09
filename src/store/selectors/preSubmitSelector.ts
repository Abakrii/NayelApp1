import {useSelector} from 'react-redux';
interface StateTypes {
  preSubmitionReducer: any;
}

export function preSubmitSelector() {
  const {
    preSubmitionRequestIsLoading,
    navigateToAfterSubmitionScreen,
  } = useSelector((state: StateTypes) => ({
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
