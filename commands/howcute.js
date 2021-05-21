////////////////////Inicio////////////////////

const Discord = require('discord.js');
const client = new Discord.Client();

////////////////////Definiciones////////////////////


////////////////////Comando////////////////////

module.exports = {
    name: "howcute",
    alias: "hc",
    description: "Otros",
    botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
    run: async(client, message, args) => {
         //Codigo//
         //Let's//
        let numero = Math.floor(Math.random() * 100)
        let user = message.mentions.users.first()
        let emoji = ""
         //Emojis//
        if(numero < 30){
            emoji =":face_vomiting:";
        }else if(numero < 40){
            emoji =':neutral_face:';
        }else if(numero < 70){
            emoji =':open_mouth:';
        }else if(numero < 95){
            emoji =':heart_eyes:';
        }else if(numero < 101){
        emoji =':heart_eyes: :smiling_face_with_3_hearts: :kissing_heart: :yum: :hot_face: :smiling_imp: :sweat_drops: :eggplant:';
        }
         //Mensajes//
        if(!user){ 
            const embed = new Discord.MessageEmbed()
               .setTitle(`${emoji} HowCute`)
               .setDescription(`<@${message.author.id}> Eres ${numero}% hermoso! ${emoji}`);
            message.channel.send(embed)
        } else {
            const embed = new Discord.MessageEmbed()
               .setTitle(`${emoji} HowCute`)
               .setDescription(`<@${user.id}> Es ${numero}% hermoso! ${emoji}`);
            message.channel.send(embed)
        }
    }
}