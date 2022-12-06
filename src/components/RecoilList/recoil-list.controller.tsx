import React, { useEffect } from 'react';
import RecoilListView from './recoil-list.view';
import IRecoilList from './recoil-list.props';
import { useItemByIdDispatch } from './context';

const RecoilList: React.FC<IRecoilList> = (props) => {
  const {
    itemsArray,
  } = props;

  const itemByIdDispatch = useItemByIdDispatch();

  useEffect(() => {
    itemsArray.map((item) => itemByIdDispatch(item, item.id));
  }, [itemsArray]);

  return <RecoilListView itemsArray={itemsArray} />;
};

export default RecoilList;
