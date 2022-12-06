import React from 'react';
import RecoilListWrapper from './recoil-list.style';
import { IItem } from '../../types';
import { Item } from './components/Item';

interface IProps {
  itemsArray: IItem[];
}

const RecoilListViewNoMemo: React.FC<IProps> = (props) => (
  <RecoilListWrapper className='recoil-list-component'>
    <h1>Recoil</h1>
    {props.itemsArray.map((item) => (
      <Item itemId={item.id} />
    ))}
  </RecoilListWrapper>
);

const RecoilListView = React.memo(RecoilListViewNoMemo);
export default RecoilListView;
