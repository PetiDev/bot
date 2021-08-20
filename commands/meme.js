const {Client,Intents,MessageEmbed}= require('discord.js');
const bot = new Client({
    intents:[Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] ,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const { RedditSimple } = require("reddit-simple"); //reddit meme
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
module.exports = {
    name:"meme",
run: async function (bot,message,args) {
    
    function randomFromArray(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    const reddits = ['dankmemes', 'programmerHumor', 'holdup', 'cursedcomments']
    const memee = new MessageEmbed()
        .setColor(`${botconfig.color}`)
        .setAuthor(bot.user.username, bot.user.avatarURL())
        .setDescription("Keresés...")
        .setTimestamp(Date.now())
        .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
    const msg = await message.channel.send({embeds:[memee]});
    RedditSimple.RandomPost(randomFromArray(reddits)).then(async res => {
        const m = {
            img: res[0].data.url,
            title: res[0].data.title,
            url: 'https://reddit.com' + res[0].data.permalink
        }
        memee.setTitle(m.title)
            .setURL(m.url)
            .setImage(m.img)
            .setDescription("")
        msg.edit({embeds:[memee]})
    }).catch(e => {
        console.log("Meme hiba: \n" + e);
    });
}}