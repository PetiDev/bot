const { Client, Intents, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const bot = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
const index = require('../index');


module.exports = {
    name: "kpo",
    run: function (bot, message, args) {



        const options = ['rock', 'paper', 'scissors']


        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('kpo_rock')
                    .setLabel('Kő 👊')
                    .setStyle('PRIMARY'),
                new MessageButton()
                    .setCustomId('kpo_paper')
                    .setLabel('Papír 📜')
                    .setStyle('PRIMARY'),
                new MessageButton()
                    .setCustomId('kpo_scissors')
                    .setLabel('Olló ✂')
                    .setStyle('PRIMARY'),
            );




        const kopapir = new MessageEmbed()
            .setTitle("kő papír olló")
            .setTimestamp(Date.now())
            .setColor(`${botconfig.color}`);
        message.channel.send({ embeds: [kopapir], components: [row] })
            .then(function (msg) {

                index.kopa[msg.id] = {
                    author: message.author.id,
                    randomszam: options[Math.round(Math.random() * 2)]
                }
            })




    },
    button: function (interaction) {



        let user = interaction.user;

        const cucc = index.kopa[interaction.message.id];


        if (user.id != cucc?.author) return;
        const kopapirolo = new MessageEmbed()

            .setTimestamp(Date.now())
            .setColor("RANDOM")

        let kopi = interaction.customId.split("_")[1];


        if (kopi == "rock" && cucc.randomszam == "paper") {
            kopapirolo.setTitle("Veszítettél");
        }
        if (kopi == "rock" && cucc.randomszam == "scissors") {
            kopapirolo.setTitle("🎉Nyertél🎉");
        }

        if (kopi == "paper" && cucc.randomszam == "scissors") {
            kopapirolo.setTitle("Veszítettél");
        }
        if (kopi == "paper" && cucc.randomszam == "rock") {
            kopapirolo.setTitle("🎉Nyertél🎉");
        }

        if (kopi == "scissors" && cucc.randomszam == "rock") {
            kopapirolo.setTitle("Veszítettél");
        }
        if (kopi == "scissors" && cucc.randomszam == "paper") {
            kopapirolo.setTitle("🎉Nyertél🎉");
        }

        if (kopi == cucc.randomszam) {
            kopapirolo.setDescription("Döntetlen");
        }

        switch (cucc.randomszam) {
            case "rock":
                kopapirolo.addField("A bot tippje:", '👊 Kő');
                break;
            case "paper":
                kopapirolo.addField("A bot tippje:", '📜 Papír');
                break;
            case "scissors":
                kopapirolo.addField("A bot tippje:", '✂ Olló');
                break;
        }


        switch (kopi) {
            case "rock":
                kopapirolo.addField("Tipped:", `👊 Kő`);
                break;
            case "paper":
                kopapirolo.addField("Tipped:", `📜 Papír`);
                break;
            case "scissors":
                kopapirolo.addField("Tipped:", `✂ Olló`);
                break;
        }



        interaction.update({ embeds: [kopapirolo] });

        index.kopa[interaction.message.id] = undefined;



    }
}