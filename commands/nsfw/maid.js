const discord = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
  name: "maid",
  aliases: [],
  category: "nsfw",
  description: "Get some wallpapers",
  run: async (client, message, args) => {
    
    if(!message.channel.nsfw) {
      return message.reply("Kênh này không hỗ trợ nội dung nsfw")
      
    } else {
    
    let akanekoSan = new discord.MessageEmbed()
    akanekoSan.setColor("RANDOM")
    akanekoSan.setImage(akaneko.nsfw.maid());
    return message.channel.send(akanekoSan);
      
    }
  }
}