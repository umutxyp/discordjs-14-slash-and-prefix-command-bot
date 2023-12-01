const { EmbedBuilder, Colors } = require("discord.js");
exports.run = async (client, message, args) => {

const commands = client.prefixCommands.map(x => `\`${x.help.name}\``).join(", ")

const embed = new EmbedBuilder()
.setDescription(`**${commands}**`)
.setColor(Colors.Blue)
.setTimestamp()
return message.reply({ embeds: [embed]}).catch(err => {})

};
exports.conf = {
    aliases: ["h"]
};

exports.help = {
    name: "help"
};
