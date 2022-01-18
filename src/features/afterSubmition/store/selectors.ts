import {useSelector} from 'react-redux';
import {RootState} from '../../../store/rootReducer';
export function afterSubmitSelector() {
  const {afterSumbitionRequestIsLoading, holeData} = useSelector(
    (state: RootState) => ({
      afterSumbitionRequestIsLoading:
        state.afterSubmitionReducer.afterSumbitionRequestIsLoading,
      holeData: state.afterSubmitionReducer.holeData,
    }),
  );
  return {
    afterSumbitionRequestIsLoading,
    holeData,
  };
}
