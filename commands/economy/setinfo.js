const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const { chunk } = require('../../functions');

module.exports = {
    
        name: "setinfo",
        aliases: ['setbio'],
        description: "Set Profile Description",
        category: 'economy',
        usage: '[info]',
        accessableby: 'everyone'
    ,
    run: async (bot, message, args) => {
        let user = message.author;
        if (!args[0]) {
            let fetchInfo = await db.fetch(`info_${user.id}`)
            if (fetchInfo) {
                let embed = new MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor('Thông tin đã được thiết lập', message.author.displayAvatarURL())
                    .setDescription(`**${fetchInfo}**`)
                    .setFooter(message.guild.name, message.guild.iconURL())
                return message.channel.send(embed)
            }
        }
        let newInfo = args.join(' ');
        if (!newInfo) return message.channel.send('**Vui lòng nhập thông tin của bạn!**');
        if (newInfo.length > 165) return message.channel.send(`**Tối đa \`165\` Nhân vật cho phép!**`);
        let newsInfo = chunk(newInfo, 42).join('\n');
        db.set(`info_${user.id}`, newsInfo);

        let notesEmbed = new MessageEmbed()
            .setColor("GREEN")
            .setAuthor(`Hộp thông tin của bạn đã được đặt`, message.author.displayAvatarURL())
            .setDescription(newsInfo)
            .setFooter(message.guild.name, message.guild.iconURL())
        message.channel.send(notesEmbed);
    }
};