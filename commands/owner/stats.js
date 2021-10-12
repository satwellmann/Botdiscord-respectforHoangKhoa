const { MessageEmbed } = require("discord.js");
module.exports = {
name: "ainfo",
description: "`Show detailed stats of bot`",
category: "owner",
aliases: ["detail"],
run: async (client, message, args, level) => {
//command
  if(message.author.id != 682981714523586606){
    const noperms = new MessageEmbed()
    .setDescription("<:astroz_wrong:825598313499459605> Lệnh này chỉ được sử dụng bởi chủ sở hữu của tôi **Đào Công Minh ")
    .setColor("YELLOW");
    return message.channel.send(noperms)
  } 

let servers_count = message.client.guilds.cache.size;
var myarray = [];
message.client.guilds.cache.keyArray().forEach(async function(item, index) {

let guildMember = message.client.guilds.cache.get(item).memberCount;
myarray.push(guildMember)
})
let sum = myarray.reduce(function (a, b) {
return a + b
});

let totalSeconds = message.client.uptime / 1000;
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);

let uptime = `\`\`\`${days} days, ${hours} hours, ${minutes} minutes và ${seconds} seconds\`\`\``;

let embed = new MessageEmbed()

.setTitle(`**[Hỗ trợ server]**`)
  .setDescription(`Hey tôi tên là **${message.client.user.username}** và Công việc của tôi là quay clip sếch thú...`)

  .setTitle(`${message.client.user.username} Stats`)
  .addFields(
    { name: "<:servers:822736807883440161> Servers:", value: `\`\`\`${servers_count}\`\`\``, inline: true },
    { name: "<:users:822737049740247070> Users:", value: `\`\`\`${sum}\`\`\``, inline: true },
    { name: "<:astrozchannels:832228652569329665> Channels",value: `\`\`\`${message.client.channels.cache.size}\`\`\``, inline: true },
    { name: "<a:uptime:822736925495394314> Uptime: ", value: uptime , inline: true },
    { name: "<a:astorzping:825420347112554496> Ping:",value: `\`\`\`${Math.round(message.client.ws.ping)} ms\`\`\``, inline: true },
    { name: "<:astroz_ram:822500018639994920>  RAM: ", value: `\`\`\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\`\`\``, inline: true  },
    { name: "<a:Owner:822760998938869760> Bot Owner:",value: `\`\`\`Đào Công Minh\`\`\``},
  )
  .setColor("3498DB")
  .setFooter("Thx để chọn automodbot")  

return message.channel.send(embed);
    return message.react("<:astroz_correct:825597747800309770>");
}
};

console.log("stats working")