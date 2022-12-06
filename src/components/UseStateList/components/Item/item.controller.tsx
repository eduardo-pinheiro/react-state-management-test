import React, { useCallback } from 'react';
import ItemView from './item.view';
import IItem from './item.props';

const Item: React.FC<IItem> = (props) => {
  const {
    item,
    onChangeLabel,
  } = props;

  const handleChangeLabel = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeLabel(event.target.value, item.id);
  }, [onChangeLabel]);

  return <ItemView
    label={item.label}
    onChangeLabel={handleChangeLabel}
  />;
};

export default Item;
