const bodyParser = require("body-parser");
const express = require("express");
// const path = require("path");
const app = express();
const PORT = 5170

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/home", (req, res)=>{
  res.json({
    name: "Bill",
    age: "99"
  })
})

app.listen(PORT, ()=>{
  console.log(`App running on port ${PORT}`);
})

// app.use("/", express.static(path.join(__dirname, "public")));
// app.get("/api/v1", (req, res) => {
//   res.json({
//     project: "React and Express Boilerplate",
//     from: "Vanaldito",
//   });
// });
// app.get("/*", (_req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// })
// const assetsRouter = require("./server/assets-router");
// app.use("/src", assetsRouter);

// const { PORT = 5170 } = process.env;
// app.listen(PORT, () => {
//   console.log();
//   console.log(`  App running in port ${PORT}`);
//   console.log();
//   console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
// });