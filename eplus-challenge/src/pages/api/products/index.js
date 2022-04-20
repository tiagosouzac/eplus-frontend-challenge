import products from "../../../../products.json";

export default function handler(req, res) {
  res.json(products);
}
