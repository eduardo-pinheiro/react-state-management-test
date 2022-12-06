import { IItem as ItemType } from '../../../../types';

interface IItem {
  item: ItemType;
  activeItem: ItemType | null;
  onClickActive: (item: ItemType) => void;
  onChangeLabel: (label: string, itemId: number) => void;
};

export default IItem;
