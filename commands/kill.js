////////////////////Inicio////////////////////

const Discord = require('discord.js');
const client = new Discord.Client();

////////////////////Definiciones////////////////////

const star = require('star-labs');

////////////////////Comando////////////////////

module.exports = {
    name: "kill",
    alias: "matar",
    description: "Sistema de anime",
    botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
    run: async(client, message, args) => {
         //Codigo//
          //Let//
        let author = message.author; 
        let user = message.mentions.users.first()
        let botid = "803274107512160297"
         //If's//
        if(!user) {
            return message.channel.send('¡Menciona a alguien!')
        }
        if(user.id === author.id) {
            return message.channel.send('¿No tienes a nadie para matar? Jódete...')
        }
        if(user.id === botid){
            return message.channel.send(`${author} N-No quiero morir, * Mira a ${author} con miedo *`)
        }
         //Mensaje//
        const embed = new Discord.MessageEmbed()
           .setColor("RANDOM")
           .setTitle(`**${author.username}** ha matado a **${user.username}**`)
           .setImage(star.kill())
        message.channel.send(embed)
    }
}