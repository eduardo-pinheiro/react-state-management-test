import { IItem as ItemType } from '../../../../types';

interface IItem {
  item: ItemType;
  onChangeLabel: (label: string, itemId: number) => void;
};

export default IItem;
