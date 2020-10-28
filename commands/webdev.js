const Discord = require('discord.js');
module.exports = {
	name: 'webdev',
	description: "this is a webdev command!",
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed().setTitle('Web Development');

		exampleEmbed.setColor('#6699EE');
		exampleEmbed.setDescription('Web Development is the art of building and maintaining a website. One has to work with various tools and languages in order for the website to work fast and perform well with a seamless user experience. Participants have to make a website which should be related to the prompt which will be provided them on 31st November')
		exampleEmbed.setTimestamp()

		message.author.send(exampleEmbed);
		message.channel.send('Check your DM, you have been sent a message regarding the Web Development event');


	}
}