import { atomFamily } from 'recoil';
import { IItem } from '../../../../types';

const itemByIdAtom = atomFamily<IItem | null, number>({
  key: 'item-by-id-atom-family',
  default: null,
});

export default itemByIdAtom;
