import React, { useCallback } from 'react';
import ItemView from './item.view';
import IItem from './item.props';

const Item: React.FC<IItem> = (props) => {
  const {
    item,
    activeItem,
    onClickActive,
    onChangeLabel,
  } = props;

  const handleChangeLabel = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeLabel(event.target.value, item.id);
  }, [onChangeLabel]);

  const handleClickActive = useCallback(() => {
    onClickActive(item);
  }, [onClickActive, item]);

  return <ItemView
    label={item.label}
    active={item?.id === activeItem?.id}
    onClickActive={handleClickActive}
    onChangeLabel={handleChangeLabel}
  />;
};

export default Item;
