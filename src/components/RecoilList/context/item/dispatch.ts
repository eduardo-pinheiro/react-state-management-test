import { useRecoilCallback } from "recoil";
import { IItem } from "../../../../types";
import itemByIdAtom from "./atom";

const useItemByIdDispatch = (itemByIdId?: number) => {
  return useRecoilCallback(({ set }) => (payload: IItem | null, id?: number) => {
    set(itemByIdAtom((typeof id === 'number' ? id : itemByIdId) as number), () => payload);
  }, []);
};

export default useItemByIdDispatch;
