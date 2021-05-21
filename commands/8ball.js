////////////////////Inicio////////////////////

const Discord = require('discord.js');
const client = new Discord.Client();

////////////////////Definiciones////////////////////


////////////////////Comando////////////////////

module.exports = {
    name: "8ball",
    alias: "8B",
    description: "Otros",
    botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
    run: async(client, message, args) => {
         //Codigo//
         //Let//
        let respuesta = ["Si", "No", "Tal vez", "Obvio", "Yo digo que si", "Yo digo que no", "Probablemente"]
         //Var//
        var random = respuesta[Math.floor(Math.random() * respuesta.length)]
         //Mensaje//
        const embed = new Discord.MessageEmbed()
           .setTitle(`Bola Magica!`)
           .addField(`:8ball: Pregunta:`, `\`${args.join(" ")}\``)
           .addField(`:joy: Respuesta:`, `\`${random}\``)
           .setColor("RANDOM")
        message.channel.send(embed)
        message.delete()
    }
}