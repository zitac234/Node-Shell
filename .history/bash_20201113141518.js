process.stdout.write("prompt >");
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  const commands = {
    pwd: process.cwd(),
  };
  for(let key in commands)
  process.stdout.write(`answer: ${process.cwd()}`);
  process.stdout.write("\nprompt >");
});
