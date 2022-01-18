import {useSelector} from 'react-redux';
import {RootState} from '../../../store/rootReducer';
export function postSubmitSelector() {
  const {postSumbitionRequestIsLoading, holeData} = useSelector(
    (state: RootState) => ({
      postSumbitionRequestIsLoading:
        state.postSubmitionReducer.postSumbitionRequestIsLoading,
      holeData: state.postSubmitionReducer.holeData,
    }),
  );
  return {
    postSumbitionRequestIsLoading,
    holeData,
  };
}
