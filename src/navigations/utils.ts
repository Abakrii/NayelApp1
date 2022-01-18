import {PreSubmition, PostSubmition} from '../features';
import {PRE_SUBMITION, POST_SUBMITION} from './config';

export const ScreensElements = () => {
  let data = [
    {
      id: 1,
      name: PRE_SUBMITION,
      component: PreSubmition,
    },
    {
      id: 2,
      name: POST_SUBMITION,
      component: PostSubmition,
    },
  ];
  return data;
};
