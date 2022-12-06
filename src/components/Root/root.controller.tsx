import React, { useCallback, useState } from 'react';
import RootView from './root.view';
import IRoot from './root.props';
import { IItem } from '../../types';

const Root: React.FC<IRoot> = () => {
  const [currentPage, setCurrentPage] = useState("use-state");
  const [itemsArray, setItemsArray] = useState<IItem[]>([
    { id: 1, label: '1' }, { id: 2, label: '2' }, { id: 3, label: '3' }, { id: 4, label: '4' }, { id: 5, label: '5' },
  ]);

  const changeToRecoilPage = useCallback(() => setCurrentPage('recoil'), []);
  const changeToUseStatePage = useCallback(() => setCurrentPage('use-state'), []);

  const onChangeItemsLength = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const itemsLength = Number(event.target.value);
    if (itemsLength < 10000000) {
      const itemsArray: IItem[] = [];
      for (let index = 0; index < itemsLength; index++) {
        itemsArray.push({ label: String(index), id: index });
      }
      setItemsArray(itemsArray);
    }
  }, []);

  return (
    <RootView
      currentPage={currentPage}
      itemsArray={itemsArray}
      changeToRecoilPage={changeToRecoilPage}
      changeToUseStatePage={changeToUseStatePage}
      onChangeItemsLength={onChangeItemsLength}
    />
  );
};

export default Root;
