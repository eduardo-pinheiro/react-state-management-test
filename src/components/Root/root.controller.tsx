import React, { useCallback, useState } from 'react';
import RootView from './root.view';
import IRoot from './root.props';

const Root: React.FC<IRoot> = () => {
  const [currentPage, setCurrentPage] = useState("recoil");

  const changeToRecoilPage = useCallback(() => setCurrentPage('recoil'), []);
  const changeToReduxPage = useCallback(() => setCurrentPage('redux'), []);
  const changeToUseStatePage = useCallback(() => setCurrentPage('use-state'), []);

  return (
    <RootView
      currentPage={currentPage}
      changeToRecoilPage={changeToRecoilPage}
      changeToReduxPage={changeToReduxPage}
      changeToUseStatePage={changeToUseStatePage}
    />
  );
};

export default Root;
