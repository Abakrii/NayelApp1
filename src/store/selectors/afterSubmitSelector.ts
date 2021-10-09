import {useSelector} from 'react-redux';
interface StateTypes {
  afterSubmitionReducer: any;
}

export function afterSubmitSelector() {
  const {
    afterSumbitionRequestIsLoading,
    holeData,
  } = useSelector((state: StateTypes) => ({
    afterSumbitionRequestIsLoading:
      state.afterSubmitionReducer.afterSumbitionRequestIsLoading,
      holeData:
      state.afterSubmitionReducer.holeData,
  }));
  return {
    afterSumbitionRequestIsLoading,
    holeData,
  };
}
