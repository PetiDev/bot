const Discord = require('discord.js');
const bot = new Discord.Client({
    disableEvryone: true,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
const index = require('../index');


module.exports = {
    name: "ping",
    run: function (bot, message, args) {

        const kopapir = new Discord.MessageEmbed()
            .setTitle("kő papír olló")
            .setTimestamp(Date.now())
            .setColor("RANDOM");
        message.channel.send(kopapir)
            .then(function (msg) {
                msg.react("👊")
                msg.react("📜")
                msg.react("✂")
                index.kopa[msg.id] = {
                    author: message.author.id,
                    randomszam: Math.round(Math.random() * 2)
                }
            });
        



    }
}