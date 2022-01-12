import { useHook, useMutationHook } from "@common/utils/use-hook";

export const useAddItem = () => {
    const hook = useHook((hooks) => {
        return hooks.cart.useAddItem
    });

    return useMutationHook({...hook});
};

export default useAddItem;