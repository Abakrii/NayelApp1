import {combineReducers} from 'redux';
import {preSubmitionReducer} from '../features/preSubmition/store/reducers';
import {postSubmitionReducer} from '../features/postSubmition/store/reducers';
const rootReducer = combineReducers({
  preSubmitionReducer,
  postSubmitionReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
