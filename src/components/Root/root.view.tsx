import React from 'react';
import RootWrapper from './root.style';
import { RecoilList } from '../RecoilList';
import { UseStateList } from '../UseStateList';
import { IItem } from '../../types';

interface IProps {
  currentPage: string;
  itemsArray: IItem[];
  changeToRecoilPage: () => void;
  changeToUseStatePage: () => void;
  onChangeItemsLength: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RootViewNoMemo: React.FC<IProps> = (props) => (
  <RootWrapper className='root-component'>
    <header className='header'>
      <button onClick={props.changeToRecoilPage}>Recoil</button>
      <button onClick={props.changeToUseStatePage}>Use State</button>
      <input onChange={props.onChangeItemsLength} value={props.itemsArray.length} />
    </header>

    <body className='body'>
      {props.currentPage === 'recoil' && <RecoilList itemsArray={props.itemsArray} />}
      {props.currentPage === 'use-state' && <UseStateList itemsArray={props.itemsArray} />}
    </body>
  </RootWrapper>
);

const RootView = React.memo(RootViewNoMemo);
export default RootView;
