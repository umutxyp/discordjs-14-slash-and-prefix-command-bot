var config = require("../config.js");
const client = require("../index.js");

client.on("messageCreate", async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.toLocaleLowerCase().split(" ")[0].slice(config.prefix.length);
  let params = message.content.split(" ").slice(1);
  let cmd;
  if (client.prefixCommands.has(command)) {
    cmd = client.prefixCommands.get(command);
  } else if (client.prefixAliases.has(command)) {
    cmd = client.prefixCommands.get(client.prefixAliases.get(command));
  }
  if (cmd) {
    cmd.run(client, message, params);
  }
});
