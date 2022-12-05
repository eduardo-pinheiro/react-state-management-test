import React from 'react';
import ReduxListView from './redux-list.view';
import IReduxList from './redux-list.props';

const ReduxList: React.FC<IReduxList> = () => {
  return <ReduxListView />;
};

export default ReduxList;
