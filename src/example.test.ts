import { complicatedLogic } from "./main.js";

// Run me with `npm test`.
test('hello test', () => {
  expect(true).toBeTruthy();
});

test('complicated logic test', () => {
  expect(complicatedLogic(1, 2)).toBe(3);
});



// Add more tests here or make a new file named `<subject under test>.test.ts`.
