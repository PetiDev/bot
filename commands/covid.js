const {Client,Intents,MessageEmbed}= require('discord.js');
const bot = new Client({
    intents:[Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] ,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const { default: axios } = require('axios');

module.exports = {
    name:"ping",
run:async function(bot,message){
    
    let { data } = await axios.get("https://data.edwardbot.tk/covid");

    console.log(data);

    const covid = new MessageEmbed()
                        .setTitle("Covid Infó")
                        .setURL("https://koronavirus.gov.hu/")
                        .addField("*Oltottak:*",`\`${data.vaccinated}\``,true)
                        .addField("*Karantén:*",`\`${data.quarantine}\``,true)

                        .addField("*Gyógyultak:*","__\n __")
                        .addField("*Országosan:*",`\`${data.recovered.countryside + data.recovered.capital}\``,true)
                        .addField("*Budapesten:*",`\`${data.recovered.capital}\``,true)

                        .addField("*Fertőzöttek:*","__\n __")
                        .addField("*Országosan*",`\`${data.infected.countryside + data.infected.capital}\``,true)
                        .addField("*Budapesten*",`\`${data.infected.capital}\``,true)

                        .addField("*Elhunytak:*","__\n __")
                        .addField("*Országosan:*",`\`${data.died.countryside + data.died.capital}\``,true)
                        .addField("*Budapesten*",`\`${data.died.capital}\``,true)
                        
                        
    message.channel.send({embeds:[covid]});


}}