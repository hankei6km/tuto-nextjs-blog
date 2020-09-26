import { format } from "date-fns";

export default (req, res) => {
  res
    .status(200)
    .json({ text: "Hello", dt: format(Date.now(), "yyyy-MM-dd hh:mm:ss") });
};
