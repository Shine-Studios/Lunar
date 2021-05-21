////////////////////Inicio////////////////////

const Discord = require('discord.js');
const client = new Discord.Client();

////////////////////Definiciones////////////////////

const marsnpm = require('marsnpm');

////////////////////Comando////////////////////

module.exports = {
    name: "angry",
    alias: "enfadarse",
    description: "Sistema de información",
    botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
    run: async(client, message, args) => {
         //Codigo//
         //Let's//
        let respuesta = ["Se siente de veras enfadado", "Se ha enfadado por ello", "Esta muy enfadado", "Se siente muy enojado", "Se siente muy enojada", "Esta molesto", "Esta molesta"]
        let autor = message.author.username;
        let sleepe = await marsnpm.angry();
         //Var//
        var random = respuesta[Math.floor(Math.random() * respuesta.length)]
         //Mensaje/
        const embed = new Discord.MessageEmbed()
           .setTitle(`${autor} ${random} 😠`) 
           .setColor("RANDOM")
           .setImage(sleepe);
        message.channel.send(embed);
}