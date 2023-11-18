/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/

let Gender: "male" | "female";

const myGender: typeof Gender = "male";

export {};
