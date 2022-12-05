import React from 'react';
import ReduxListWrapper from './redux-list.style';

interface IProps {}

const ReduxListViewNoMemo: React.FC<IProps> = () => (
  <ReduxListWrapper className='redux-list-component'>
    <h1>ReduxList</h1>
  </ReduxListWrapper>
);

const ReduxListView = React.memo(ReduxListViewNoMemo);
export default ReduxListView;
