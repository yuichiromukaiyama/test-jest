const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("fetch test", async () => {
  const r = await fetch("http://localhost:8000/", { method: "GET" });
  expect(r.status).toBe(200);
});
