const { EmbedBuilder, Colors } = require("discord.js");
const config = require("../../config.js");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
module.exports = {
    name: "banner",
    description: "View a user's banner.",
    options: [
        {
            name: "user",
            description: "The user to view the banner of.",
            type: 6,
            required: false
        }
    ],
    run: async (client, interaction) => {

        const user = interaction.options.getUser("user") || interaction.user;

        let response = fetch(`https://discord.com/api/v9/users/${user.id}`, {
            method: 'GET',
            headers: {
            Authorization: `Bot ${config.token}`
            }
            })
            let receive = ''
            let banner = "https://dummyimage.com/2000x500/33363c/ffffff&text=No+Banner"
            response.then(a => {
            if (a.status !== 404) {
            a.json().then(data => {
            receive = data['banner']
            
            if (receive !== null) {
            
            let response2 = fetch(`https://cdn.discordapp.com/banners/${user.id}/${receive}.gif`, {
            method: 'GET',
            headers: {
            Authorization: `Bot ${config.token}`
            }
            })
            let statut = ''
            response2.then(b => {
            statut = b.status
            banner = `https://cdn.discordapp.com/banners/${user.id}/${receive}.gif?size=1024`
            if (statut === 415) {
            banner = `https://cdn.discordapp.com/banners/${user.id}/${receive}.png?size=1024`
            }})}})}})
            
            setTimeout(() => {
            const embed = new EmbedBuilder()
            .setDescription(`**[IMAGE](${banner})**`)
            .setImage(banner)
            .setColor(Colors.Blue)
            .setTimestamp()
            return interaction.reply({ embeds: [embed]}).catch(err => {})
            }, 1000)
        
    },
    };