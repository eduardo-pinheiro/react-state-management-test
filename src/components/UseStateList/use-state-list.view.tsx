import React from 'react';
import UseStateListWrapper from './use-state-list.style';

interface IProps {}

const UseStateListViewNoMemo: React.FC<IProps> = () => (
  <UseStateListWrapper className='use-state-list-component'>
    <h1>UseStateList</h1>
  </UseStateListWrapper>
);

const UseStateListView = React.memo(UseStateListViewNoMemo);
export default UseStateListView;
