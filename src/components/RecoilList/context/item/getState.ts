import { useRecoilCallback } from "recoil";
import { IItem } from "../../../../types";
import itemAtom from "./atom";

const useGetItemState = () => {
  return useRecoilCallback(({ snapshot }) => (itemId: number): IItem | null => {
    return snapshot.getLoadable(itemAtom(itemId)).getValue();
  }, []);
}

export default useGetItemState;