import axios from "axios";

const client = axios.create({
  baseURL: "https://api.exchangeratesapi.io/",
  timeout: 1000,
});
/**
 * Fetch the latest currencies using the specified base
 * @param {Object} args - Arguments.
 * @param {string} args.base - currency base
 * @param {Array[string]} args.currencies - currencies to get
 * @returns an object that contains the date of the currency, and all rates requested
 */
export async function getLatest({ base, currencies }) {
  const { data } = await client.get(
    `/latest?base=${base}&symbols=${currencies.join(",")}`
  );
  return data;
}
/**
 * Convert a value from a currency to others
 * @param {Object} args - Arguments.
 * @param {string} args.from - currency base
 * @param {Array <string>} args.to - currency targets
 * @param {float} args.value - value to convert
 */
export async function convert({ from, to, value }) {
  const { date, rates } = await getLatest({ base: from, currencies: to });
  Object.keys(rates).map((e) => {
    rates[e] = value / rates[e];
  });
  return { date, rates };
}
