const { InteractionType } = require("discord.js");
const client = require("../index.js");
client.on("interactionCreate", async (interaction) => {

  if(!interaction.guild) return;
if(interaction.user.bot) return;

if (interaction.type === InteractionType.ApplicationCommand) {

  const command = client.slashCommands.get(interaction.commandName);
  if (command) {
    try {
      await command.run(client, interaction);
    } catch (error) {
      console.log(error);
      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  }

}
   

});
