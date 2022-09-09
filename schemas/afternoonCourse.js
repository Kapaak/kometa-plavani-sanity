import { capacity, courses, day, price } from "../shared";

export default {
  name: "odpoledni-kurzy",
  type: "document",
  title: "Odpolední kurzy",
  fields: [
    day,
    price,
    capacity,
    courses
  ]
}