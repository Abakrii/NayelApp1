import {combineReducers} from 'redux';
import {preSubmitionReducer} from '../features/preSubmition/store/reducers';
import {afterSubmitionReducer} from '../features/afterSubmition/store/reducers';
const rootReducer = combineReducers({
  preSubmitionReducer,
  afterSubmitionReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
