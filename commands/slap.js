////////////////////Inicio////////////////////

const Discord = require('discord.js');
const client = new Discord.Client();

////////////////////Definiciones////////////////////

const nekos = require('nekos.life');
const neko = new nekos()

////////////////////Comando////////////////////

module.exports = {
    name: "slap",
    alias: "golpear",
    description: "Sistema de información",
    botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
    run: async(client, message, args) => {
         //Codigo//
          //Let//
        let user = message.mentions.users.first()
        let mensaje = `${message.author.username} Ha golpeado a ${user.username}`
        let botid = "803274107512160297"
         //If's//
        if(!message.mentions.users.first()) return message.channel.send("Debes mencionar a alguien!") 
        if(user.id === message.author.id){
            return message.channel.send('No puedo permitir que te golpes a ti mismo/a! ;(')
        }
        if(user.id === botid){
           return message.channel.send(`${message.author.username} Porque me golpeas? ;(`);
        };
         //Mensaje//
        neko.sfw.slap().then(neko => {
            const embed = new Discord.MessageEmbed()
               .setColor("YELLOW")
               .setTitle(`${mensaje}`)
               .setImage(neko.url)
            message.channel.send(embed)
            })
    }
}