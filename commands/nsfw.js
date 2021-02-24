const Discord = require('discord.js');
const bot = new Discord.Client({
    disableEvryone: true,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const { RedditSimple } = require("reddit-simple"); //reddit meme
const fetch = require('node-fetch'); //fetch
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
module.exports = {
    name: "nsfw",
    run: async function (bot, message, args) {
        if (!message.channel.nsfw) {
            const nosfww = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription("Ez nem NSFW csatorna!")
                .setTimestamp(Date.now())
                .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
            const msg = await message.channel.send(nosfww);
            return;
        }

        function randomFromArray(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }

        const nsfww = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(bot.user.username, bot.user.avatarURL())
            .setDescription("Keresés...")
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
        const msg = await message.channel.send(nsfww);

        if(message.content.toLowerCase().includes("anime")){
            let animes = ['waifu','neko']
        fetch(`https://waifu.pics/api/nsfw/${randomFromArray(animes)}`)
        .then(res => res.json())
        .then(json => {
            let url = json.url;
            if(!(url.includes('.png') || url.includes('.jpg')|| url.includes('.jpeg') || url.includes('.gif')))return;
            nsfww.setImage(url)
            .setDescription("")
            msg.edit(nsfww);
            
        })
        return;
        }

        fetch('https://www.reddit.com/user/bendimester_23/m/nsfw.json?limit=100')
            .then(res => res.json())
            .then(json => {
                let url = randomFromArray(json.data.children).data

                nsfww.setTitle(url.title)
                    .setImage(url.url_overridden_by_dest)
                    .setURL(url.url)
                    .setDescription("")
                msg.edit(nsfww);
            });

    }
}