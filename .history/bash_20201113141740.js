process.stdout.write("prompt >");
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  const commands = {
    pwd: process.cwd(),
  };
  for(let key in commands){
      if (cmd === key){

      }
  process.stdout.write("\nprompt >");
});
