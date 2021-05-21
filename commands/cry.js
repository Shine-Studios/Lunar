////////////////////Inicio////////////////////

const Discord = require('discord.js');
const client = new Discord.Client();

////////////////////Definiciones////////////////////

const star = require('star-labs');

////////////////////Comando////////////////////

module.exports = {
    name: "cry",
    alias: "llorar",
    description: "Sistema de anime",
    botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
    run: async(client, message, args) => {
         //Codigo//
          //Let//
        let respuesta = ["Se ha puesto a llorar", "Esta llorando por ello", "Esta de veras triste y llora por ello", "Tiene su corazon roto y llora por ello"]
         //Var//
        var random = respuesta[Math.floor(Math.random() * respuesta.length)]
         //Mensaje//
        const embed = new Discord.MessageEmbed()
           .setTitle(`${message.author.username} ${random} 😭`)
           .setColor("RANDOM")
           .setTimestamp()
           .setImage(star.cry())
        message.channel.send(embed);
    }
}