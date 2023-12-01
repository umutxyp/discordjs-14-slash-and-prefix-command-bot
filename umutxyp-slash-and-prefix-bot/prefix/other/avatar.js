const { EmbedBuilder, Colors } = require("discord.js");
exports.run = async (client, message, args) => {

    let member = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

 const embed = new EmbedBuilder()
.setDescription(`**[PNG](${member.displayAvatarURL({ dynamic: true, size: 1024 }).replace("webp", "png")}) | [JPG](${member.displayAvatarURL({ dynamic: true, size: 1024 }).replace("webp", "jpg")}) | [WEBP](${member.displayAvatarURL({ dynamic: true, size: 1024 }).replace("webp", "webp")}) | [GIF](${member.displayAvatarURL({ dynamic: true, size: 1024 }).replace("webp", "gif")})**`)
.setImage(member.displayAvatarURL({ dynamic: true, size: 1024 }))
.setColor(Colors.Blue)
.setTimestamp()
return message.reply({ embeds: [embed]}).catch(err => {})
   
};
exports.conf = {
    aliases: ["avatar"]
};

exports.help = {
    name: "pp"
};
