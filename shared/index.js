export const price = {
  name: "price",
  type: "number",
  title: "Cena",
};

export const capacity = {
  name: "capacity",
  type: "number",
  title: "Kapacita",
};

export const course = {
  name: "course",
  type: "object",
  title: "Kurz",
  fields: [
    {
      name: "courseName",
      type: "string",
      title: "Název kurzu"
    }
  ]
}

export const day = {
  name: "day",
  type: "string",
  title: "Den",
  options: {
    list: [
      {
        title: "Pondělí",
        value: "pondeli"
      },
      {
        title: "Úterý",
        value: "utery"
      },
      {
        title: "Středa",
        value: "streda"
      },
      {
        title: "Čtvrtek",
        value: "ctvrtek"
      },
      {
        title: "Pátek",
        value: "patek"
      },
    ]
  }
}

export const courses = {
  name: "courseArray",
  type: "array",
  title: "Kurzy",
  of: [
    course
  ]
}