//testing to expect this to be the outcome
test("expect this endpoint to pass", async () => {
  const data = await fetch("http://localhost:8080/stock/view");
  expect(data.status).toBe(400);
});
//testing to expect failure
// test("expect this endpoint to fail", async () => {
//   expect.assertions(1);
//   try {
//     await fetchData(
//       "http://api.openweathermap.org/data/2.5/weather?q=${locations}&APPID=9_4ff8f714e1192e407f6aa2ff130133a&units=metric"
//     );
//   } catch (e) {
//     expect(e.status).toBe(undefined);
//   }
// });
