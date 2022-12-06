import React, { useCallback } from 'react';
import ItemView from './item.view';
import IItem from './item.props';
import { IItem as ItemType } from '../../../../types';
import { useItemById, useItemByIdDispatch } from '../../context';

const Item: React.FC<IItem> = (props) => {
  const {
    itemId,
  } = props;

  const [item, setItem] = useItemById(itemId);

  const onChangeLabel = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (item) {
      const newLabel = event.target.value;
      const newItem: ItemType = { label: newLabel, id: item.id };
      setItem(newItem);
    }
  }, [item]);

  return (
    <ItemView
      label={item?.label}
      onChangeLabel={onChangeLabel}
    />
  );
};

export default Item;
