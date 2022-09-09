import { capacity, courses, day, price } from "../shared";

export default {
  name: "skoly",
  type: "document",
  title: "Školy",
  fields: [
    day,
    price,
    capacity,
    courses
  ]
}