import React from 'react';
import RootWrapper from './root.style';
import { RecoilList } from '../RecoilList';
import { ReduxList } from '../ReduxList';
import { UseStateList } from '../UseStateList';

interface IProps {
  currentPage: string;
  itemsArray: any[];
  changeToRecoilPage: () => void;
  changeToReduxPage: () => void;
  changeToUseStatePage: () => void;
  onChangeItemsLength: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RootViewNoMemo: React.FC<IProps> = (props) => (
  <RootWrapper className='root-component'>
    <header className='header'>
      <button onClick={props.changeToRecoilPage}>Recoil</button>
      <button onClick={props.changeToReduxPage}>Redux</button>
      <button onClick={props.changeToUseStatePage}>Use State</button>
      <input onChange={props.onChangeItemsLength} value={props.itemsArray.length} />
    </header>

    <body className='body'>
      {props.currentPage === 'recoil' && <RecoilList />}
      {props.currentPage === 'redux' && <ReduxList />}
      {props.currentPage === 'use-state' && <UseStateList />}
    </body>
  </RootWrapper>
);

const RootView = React.memo(RootViewNoMemo);
export default RootView;
