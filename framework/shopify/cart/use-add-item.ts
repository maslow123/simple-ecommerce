import { useAddItem } from "@common/cart";
import { MutationHook } from "@common/types/hooks";
import { getCheckoutId } from "@framework/utils";
import { checkoutLineItemsAddMutation } from "@framework/utils/mutations";

export const handler: MutationHook  = {
    fetcherOptions: {
      query: checkoutLineItemsAddMutation
    },
    fetcher: async ({ fetch, options, input }) => {
      const variables = {
        checkoutId: getCheckoutId(),
        lineItems: [
          {
            variantId: input.variantId,
            quantity: 1
          }
        ]
      };

      const response = await fetch({  
         ...options,
         variables
      });
      
      console.log(response);
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