const dogList = [
  { id: 1, name: "Fido", age: 3 },
  { id: 2, name: "Rex", age: 1 },
  { id: 3, name: "Rover", age: 2 },
];

export default defineEventHandler(async (event) => {
  return {
    dogs: dogList,
  };
});
