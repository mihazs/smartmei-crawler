import { crawl } from "../crawler";
import { convert } from "../currency-dealer";
import { DateTimeResolver, URLResolver } from "graphql-scalars";

export default {
  //Resolve the datetime scalar
  DateTime: DateTimeResolver,
  URL: URLResolver,
  Query: {
    async transfer_price(parent, { url }, context, info) {
      //Crawl the price and the description
      const { price, description } = await crawl({ url: url });
      //Convert the price to EUR and USD currencies.
      const { rates, date } = await convert({
        from: "BRL",
        to: ["EUR", "USD"],
        value: price,
      });
      //map the rates to an array that matches with the response format
      var res = Object.keys(rates).map((e) => ({
        code: e,
        value: rates[e].toFixed(2),
      }));
      //add the value in BRL
      res.push({ code: "BRL", value: parseFloat(price).toFixed(2) });
      return { description, date, rates: res };
    },
  },
};
