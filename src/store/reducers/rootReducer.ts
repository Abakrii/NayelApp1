import {combineReducers} from 'redux';
import {preSubmitionReducer} from './preSubmitionReducer';
import {afterSubmitionReducer} from './afterSubmitionReducer';
const rootReducer: any = combineReducers({
  preSubmitionReducer,
  afterSubmitionReducer,
});

export default rootReducer;
