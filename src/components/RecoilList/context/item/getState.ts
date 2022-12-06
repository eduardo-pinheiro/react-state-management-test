import { useRecoilCallback } from "recoil";
import { IItem } from "../../../../types";
import itemByIdAtom from "./atom";

const useGetItemByIdState = () => {
  return useRecoilCallback(({ snapshot }) => (itemByIdId: number): IItem | null => {
    return snapshot.getLoadable(itemByIdAtom(itemByIdId)).getValue();
  }, []);
}

export default useGetItemByIdState;