import {PublisherTypes} from './interfaces';

export const publisherTypeElements = () => {
  const {TEACHER, BLOGGER} = PublisherTypes;
  let array = [
    {id: 1, label: TEACHER, value: TEACHER},
    {id: 2, label: BLOGGER, value: BLOGGER},
  ];
  return array;
};
