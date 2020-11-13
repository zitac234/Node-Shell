process.stdout.write("prompt >");
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  const commands = {
    pwd: process.cwd(),
  };
  process.stdout.write(`answer: ${commands[cmd]}`);
  process.stdout.write("\nprompt >");
});
