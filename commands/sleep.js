////////////////////Inicio////////////////////

const Discord = require('discord.js');
const client = new Discord.Client();

////////////////////Definiciones////////////////////

const marsnpm = require('marsnpm');

////////////////////Comando////////////////////

module.exports = {
    name: "sleep",
    alias: "dormir",
    description: "Sistema de información",
    botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
    run: async(client, message, args) => {
         //Codigo//
         //Let's//
        let autor = message.author.username;
        let sleepe = await marsnpm.sleep();
         //Mensaje//
        const embed = new Discord.MessageEmbed()
           .setTitle(`${autor} Se durmió 💤`) 
           .setColor("RANDOM")
           .setImage(sleepe);
        message.channel.send(embed);
    }
}