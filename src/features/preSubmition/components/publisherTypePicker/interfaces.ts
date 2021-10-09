export type PublisherTypePickerProps = {
  publisherType: string;
  setPublisherType: () => void;
};

export enum PublisherTypes {
  TEACHER = 'Teacher',
  BLOGGER = 'Blogger',
}
