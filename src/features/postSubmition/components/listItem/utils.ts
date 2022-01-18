import {ListItemProps} from './interfaces';

export const ListItemValues = (props: ListItemProps) => {
  let data = [
    {
      id: 1,
      value: `userId: ${props.userId}`,
    },
    {
      id: 2,
      value: `id: ${props.id}`,
    },
    {
      id: 3,
      value: `title: ${props.title}`,
    },
    {
      id: 4,
      value: `body: ${props.body}`,
    },
  ];
  return data;
};
