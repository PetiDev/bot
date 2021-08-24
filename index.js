const { default: axios } = require('axios');
const { Client, Intents, MessageEmbed,MessageActionRow, MessageButton  } = require('discord.js');
const bot = new Client({
    intents:[Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] ,
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
//#region express

let servers = {}
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.status("200").send({
        ping: `${bot.ws.ping}ms`
    })
})
app.get("/pic", (req,res)=>{
    res.status("302").redirect(bot.user.avatarURL())
})
app.get("/load", (req, res) => {
    res.status("200").send(servers)
})

app.get("/server", (req,res)=>{
    const data = req.query;
    const server = bot.guilds.cache.get(data.id);
    
    let dad = {
        users:[],
        channels:[],
        roles:[]
    }
    
    server.members.cache.forEach(element => {
        
        dad.users.push({
            member:element,
            user: bot.users.cache.get(element.id),
            
        });
    })

    server.channels.cache.forEach(element => {
        
        dad.channels.push(element)
    
    })
    server.roles.cache.forEach(element => {
        
        dad.roles.push(element)
    
    })

    res.status("200").send(dad);

})

function ex() {
    setTimeout(async () => {
        app.listen(
            process.env.PORT,
            () => {
                console.log("Expres started")
            })
    })
} ex()

//#endregion

bot.on("ready", async () => {
    console.log(`${bot.user.username} > Elindultam`);
    bot.user.setActivity(botconfig.elfoglaltsag.elfoglaltsag.replace(/%prefix%/g, prefix), { type: botconfig.elfoglaltsag.type });

    //bot.guilds.cache.forEach(guild => {
    //    console.log(guild.members);
    //    servers[guild.name] = {
    //        name: guild.ownerID,
    //        owner: {
    //            name: guild.owner.nickname,
    //            id: guild.owner.id
    //        },
    //        guild: {
    //            icon: guild.iconURL(),
    //            id: guild.id,
    //            memberCount: guild.members.cache.filter(member => !member.user.bot).size
    //        }
    //    }
    //
    //})

})
bot.on("messageCreate", async (message) => {
    
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

bot.on('interactionCreate', (interaction) => {

	if (!interaction.isButton()) return;

   const cmd = commands[`${interaction.customId.split("_")[0]}.js`]
   console.log(cmd.button);
   if(!cmd)return;
    
   cmd.button(interaction)

})
bot.login(process.env.TOKEN);