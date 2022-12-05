import React from 'react';
import RecoilListWrapper from './recoil-list.style';

interface IProps {}

const RecoilListViewNoMemo: React.FC<IProps> = () => (
  <RecoilListWrapper className='recoil-list-component'>
    <h1>RecoilList</h1>
  </RecoilListWrapper>
);

const RecoilListView = React.memo(RecoilListViewNoMemo);
export default RecoilListView;
