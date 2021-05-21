////////////////////Inicio////////////////////

const Discord = require('discord.js');
const client = new Discord.Client();

////////////////////Definiciones////////////////////

const marsnpm = require('marsnpm');

////////////////////Comando////////////////////

module.exports = {
    name: "meme",
    alias: "memes",
    description: "Otros",
    botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
    run: async(client, message, args) => {
         //Codigo//
          //Let//
        let sleepe = await marsnpm.meme();
          //Meme//
        const embed = new Discord.MessageEmbed()
           .setColor("RANDOM")
           .setImage(sleepe);
        message.channel.send(embed);
    }
}