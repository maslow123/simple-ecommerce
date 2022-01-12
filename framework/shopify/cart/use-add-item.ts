import { useAddItem } from "@common/cart";
import { MutationHook } from "@common/types/hooks";

export const handler: MutationHook  = {
    fetcher: ({ fetch, input }) => {
      const response = fetch(input);
      return response;
    },
    useHook: ({fetch}) => {
      return (input: any) => {
        const response = fetch(input);
        return {
          output: response
        };
      };
    }
};

export default useAddItem;