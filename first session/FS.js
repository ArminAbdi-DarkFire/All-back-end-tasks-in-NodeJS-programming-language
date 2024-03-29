const fs = require("fs");

console.log("\n");
console.log(fs.readdirSync(__dirname));
console.log("\n");
console.log(fs.readFileSync(__dirname + "/text.txt", "utf8"));
console.log("\n");
console.log("\n");
fs.readdir(__dirname, (err, files) => {
  if (err) console.log(err.message);
  else console.log(files);
});
