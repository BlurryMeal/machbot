const Discord = require('discord.js');
module.exports = {
	name: 'design',
	description: "this is a design command!",
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed().setTitle('Design');

		exampleEmbed.setColor('#6699EE');
		exampleEmbed.setDescription('Design is the process of envisioning and planning an object and bringing it to life with the help of various tools and elements. Participants will be given a prompt on 17th November and would be told to make a design related to that prompt. Use your imagination and knowledge and *make* a design worthy to impress the judges.')
		exampleEmbed.setTimestamp()

		message.author.send(exampleEmbed);
		message.channel.send('Check your DM, you have been sent a message regarding the Design event');


	}
}