import React from 'react';
import { IItem } from '../../types';
import { Item } from './components/Item';
import UseStateListWrapper from './use-state-list.style';

interface IProps {
  itemsArray: IItem[];
  onChangeLabel: (label: string, itemId: number) => void;
}

const UseStateListViewNoMemo: React.FC<IProps> = (props) => (
  <UseStateListWrapper className='use-state-list-component'>
    <h1>useState</h1>
    {props.itemsArray.map((item) => (
      <Item
        item={item}
        onChangeLabel={props.onChangeLabel}
      />
    ))}
  </UseStateListWrapper>
);

const UseStateListView = React.memo(UseStateListViewNoMemo);
export default UseStateListView;
