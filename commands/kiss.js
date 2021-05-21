////////////////////Inicio////////////////////

const Discord = require('discord.js');
const client = new Discord.Client();

////////////////////Definiciones////////////////////

const nekos = require('nekos.life');
const neko = new nekos()

////////////////////Comando////////////////////

module.exports = {
    name: "kiss",
    alias: "besar",
    description: "Sistema de información",
    botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
    run: async(client, message, args) => {
         //Codigo//
         //Let//
        let user = message.mentions.users.first()
        let mensaje = `${message.author.username} Ha besado a ${user.username}`
        let botid = "803274107512160297"
         //If's//
        if(!message.mentions.users.first()) return message.channel.send("Debes mencionar a alguien!") 
        if(user.id === message.author.id){
            return message.channel.send('No puedes acariciarte a ti mismo, Seria raro!')
        }
        if(user.id === botid){
            mensaje = `${message.author.username} M-Me acaba de besar :flushed:`
        }
         //Mensaje//
        neko.sfw.kiss().then(neko => {
            const embed = new Discord.MessageEmbed()
               .setColor("RED")
               .setTitle(`${mensaje}`)
               .setImage(neko.url)
            message.channel.send(embed)
            })
    }
}