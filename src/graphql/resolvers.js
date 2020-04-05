import { crawl } from "../crawler";
import { convert } from "../currency-dealer";
import { DateTimeResolver } from "graphql-scalars";

export default {
  DateTime: DateTimeResolver,
  Query: {
    async transfer_price(parent, { url }, context, info) {
      const price = await crawl({ url: url });
      const { rates, date } = await convert({
        from: "BRL",
        to: ["EUR", "USD"],
        value: price,
      });
      var res = Object.keys(rates).map((e) => ({
        code: e,
        value: rates[e],
      }));
      res.push({ code: "BRL", value: parseFloat(price) });
      return { date, rates: res };
    },
  },
};
