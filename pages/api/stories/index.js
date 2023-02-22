import { stories } from "../../../stories";

export default function handler(req, res) {
  res.status(200).json(stories);
}
