test("fetch test", async () => {
  const r = await fetch("http://localhost:8000/", {
    method: "GET",
  });
  expect(r.status).toBe(200);
});
