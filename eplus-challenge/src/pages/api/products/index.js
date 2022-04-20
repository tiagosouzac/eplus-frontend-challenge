import products from "../../../../products.json";

export default function handler(req, res) {
  return res.json(products);
}
