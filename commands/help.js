const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
    name: 'help',
    description: "This is a help command",
    execute(message, args) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#0aa1f5')
            .setTitle(`ICE BOT Help Sheet `)
            .setDescription('If you need support with the ICE BOT then please do the following. Either join the discord below or go to the website below.')
            .setFooter('ICE BOT')
            .setThumbnail('https://media.discordapp.net/attachments/798086773455847477/798089006767669258/ICE_BOT.png?width=693&height=701')
            .addFields({ name: 'Store', value: 'icestore.online/store' }, { name: 'Website', value: 'icestore.online' }, { name: 'Support Discord', value: 'https://discord.gg/cBytv2m4C3' }, )
            .setFooter('ICE BOT', 'https://media.discordapp.net/attachments/798086773455847477/798089006767669258/ICE_BOT.png?width=693&height=701');

        message.author.send(Embed);
    }
}