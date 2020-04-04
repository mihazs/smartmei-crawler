import { crawl } from "../crawler";
import { convert } from "../currency-dealer";

export default resolvers = {
    Query: {
        async get_transfer_price(parent, args, context, info) {
            const price = await crawl({ url: args.url });
            const converted = convert({ from: "BRL", to: ["EUR", "USD"] });

        }
    }
};