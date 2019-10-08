const DotEnv = require('dotenv');
const Discord = require('discord.js');
const client = new Discord.Client();
const result = DotEnv.config();

if(result.error){
    throw result.error;
}

client.on('ready', () => {
    console.log('Logged in as ' + client.user.tag);
});

client.login(process.env.DISCORD_BOT_API_KEY);

client.on('message', message => {
    if(message.content.startsWith('!')){
        let command = message.content.split('!')[1];
        if(command === 'ava'){
            let richEmbed = new Discord.RichEmbed().setTitle('Avatar of ' + message.author.username).setImage(message.author.avatarURL);
            // let att = new Discord.Attachment(message.author.avatarURL);
            message.channel.send(richEmbed);
        }
    }
})