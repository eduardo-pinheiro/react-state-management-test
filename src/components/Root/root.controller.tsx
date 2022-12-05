import React, { useCallback, useState } from 'react';
import RootView from './root.view';
import IRoot from './root.props';

const Root: React.FC<IRoot> = () => {
  const [currentPage, setCurrentPage] = useState("recoil");
  const [itemsArray, setArray] = useState<any[]>([]);

  const changeToRecoilPage = useCallback(() => setCurrentPage('recoil'), []);
  const changeToReduxPage = useCallback(() => setCurrentPage('redux'), []);
  const changeToUseStatePage = useCallback(() => setCurrentPage('use-state'), []);

  const onChangeItemsLength = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const itemsLength = Number(event.target.value);
    if (itemsLength < 10000000) {
      const itemsArray = new Array(itemsLength).fill("hellow world");
      setArray(itemsArray);
    }
  }, []);

  return (
    <RootView
      currentPage={currentPage}
      itemsArray={itemsArray}
      changeToRecoilPage={changeToRecoilPage}
      changeToReduxPage={changeToReduxPage}
      changeToUseStatePage={changeToUseStatePage}
      onChangeItemsLength={onChangeItemsLength}
    />
  );
};

export default Root;
