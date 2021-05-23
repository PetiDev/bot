const { default: axios } = require('axios');
const Discord = require('discord.js');
const bot = new Discord.Client({
    disableEvryone: true,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const { RedditSimple } = require("reddit-simple"); //reddit meme
const botconfig = require('./botconfig.json');
const fs = require('fs');//DANGERZONE
const prefix = botconfig.prefix;
exports.kopa = {};
const cmds = fs.readdirSync('./commands');
const commands = {};
cmds.forEach((element) => {
    console.log(`${element} betöltve.`);
    commands[element] = require(`./commands/${element}`);
})
//#region express?

let servers = {}
const express = require('express');
const app = express();
const PORT = 3456;
app.use(express.json())

app.get("/", (req, res) => {
    res.status("200").send({
        ping: `${bot.ws.ping}ms`
    })
    })

app.get("/load", (req, res) => {
res.status("200").send(servers)
})

function ex() {
    setTimeout( async () => {
        app.listen(
            PORT,
            () => {
                console.log("Expres started")
            })
    })
} ex()



bot.on("ready", async () => {
    console.log(`${bot.user.username} > Elindultam`);
    bot.user.setActivity(botconfig.elfoglaltsag.elfoglaltsag.replace(/%prefix%/g, prefix), { type: botconfig.elfoglaltsag.type });

    bot.guilds.cache.forEach(guild => {
        servers[guild.name] = {
            owner:{
                name: guild.owner.nickname,
                id: guild.owner.id
            },
            guild:{
                icon: guild.iconURL(),
                memberCount: guild.members.cache.filter(member => !member.user.bot).size
            }
            }
    })

})
bot.on("message", async (message) => {
    const prefix = botconfig.prefix;
    if (message.author.bot) return;
    if (message.channel.type == "dm" && message.content.startsWith(prefix)) { message.author.send("Nem futtathatsz parancsot dm-ben"); return; }
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    try {
        const cmd = commands[`${command}.js`]


        if (!cmd) return;

        cmd.run(bot, message, args);
    } catch (err) { return; }

});

bot.on('messageReactionAdd', (reaction, user) => {
    if (this.kopa[reaction.message.id]) {
        const cucc = this.kopa[reaction.message.id];
        if (user.id != cucc.author) return;
        const kopapirolo = new Discord.MessageEmbed()
            .setTitle("Kő Papír Olló")
            .setTimestamp(Date.now())
            .setColor("RANDOM")
        let kopi;
        switch (reaction.emoji.name) {
            case '👊':
                kopi = 0
                break;
            case '📜':
                kopi = 1;
                break;
            case '✂':
                kopi = 2;
                break;
            case '🧍‍♂️':
                kopi = 3;
                break;
        }
        if (kopi == 0 && cucc.randomszam == 1) {
            kopapirolo.setDescription("Veszítettél");
        }
        if (kopi == 0 && cucc.randomszam == 2) {
            kopapirolo.setDescription("🎉Nyertél🎉");
        }

        if (kopi == 1 && cucc.randomszam == 2) {
            kopapirolo.setDescription("Veszítettél");
        }
        if (kopi == 1 && cucc.randomszam == 0) {
            kopapirolo.setDescription("🎉Nyertél🎉");
        }

        if (kopi == 2 && cucc.randomszam == 0) {
            kopapirolo.setDescription("Veszítettél");
        }
        if (kopi == 2 && cucc.randomszam == 1) {
            kopapirolo.setDescription("🎉Nyertél🎉");
        }
        if (kopi == 3) {
            kopapirolo.setDescription("Cigány mindent visz");
        }

        if (kopi == cucc.randomszam) {
            kopapirolo.setDescription("Döntetlen");
        }

        switch (cucc.randomszam) {
            case 0:
                kopapirolo.addField("Eredmény:", '👊');
                break;
            case 1:
                kopapirolo.addField("Eredmény:", '📜');
                break;
            case 2:
                kopapirolo.addField("Eredmény:", '✂');
                break;
        }


        kopapirolo.addField("Tipped:", `${reaction.emoji.name}`);
        reaction.message.edit(kopapirolo);
        this.kopa[reaction.message.id] = undefined;
    }

})
bot.login(process.env.TOKEN);