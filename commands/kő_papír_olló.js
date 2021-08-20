const {Client,Intents,MessageEmbed}= require('discord.js');
const bot = new Client({
    intents:[Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] ,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
const index = require('../index');


module.exports = {
    name: "ping",
    run: function (bot, message, args) {

        const kopapir = new MessageEmbed()
            .setTitle("kő papír olló")
            .setTimestamp(Date.now())
            .setColor(`${botconfig.color}`);
        message.channel.send({embeds:[kopapir]})
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