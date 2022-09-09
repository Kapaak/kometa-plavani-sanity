import { capacity, courses, day, price } from "../shared";

export default {
  name: "skolky",
  type: "document",
  title: "Školky",
  fields: [
    day,
    price,
    capacity,
    courses
  ]
}
