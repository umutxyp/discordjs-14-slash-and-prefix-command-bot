const { EmbedBuilder, Colors } = require("discord.js");
module.exports = {
    name: "help",
    description: "View bot slash commands.",
    options: [],
    run: async (client, interaction) => {
    
        const commands = client.slashCommands.map(x => `\`${x.name}\``).join(", ")

        const embed = new EmbedBuilder()
        .setDescription(`**${commands}**`)
        .setColor(Colors.Blue)
        .setTimestamp()
        return interaction.reply({ embeds: [embed]}).catch(err => {})
        
      
    },
    };