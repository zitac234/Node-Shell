const fs = require("fs");
// module.exports = function () {
//   fs.readdir("./", "utf8", (err, files) => {
//     if (err) {
//       throw err;
//     } else {
//       process.stdout.write(files.join("\n"));
//       process.stdout.write("prompt > ");
//     }
//   });
// };
module.exports = function (filename) {
  fs.readFile(filename, (err, data) => {
    if (err) throw err;
    
    console.log(data);
  });
};
