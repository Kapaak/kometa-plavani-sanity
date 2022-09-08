import { capacity, courses, day, price } from "../shared";

export default {
  name: "kindergarden",
  type: "document",
  title: "Školky",
  fields: [
    day,
    price,
    capacity,
    courses
  ]
}
