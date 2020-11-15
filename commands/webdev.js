const Discord = require('discord.js');
module.exports = {
	name: 'webdev',
	description: "this is a webdev command!",
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed().setTitle('Web Development');

		exampleEmbed.setColor('#6699EE');
		exampleEmbed.setDescription('Web Development is the art of building and maintaining a website. One has to work with various tools and languages in order for the website to work fast and perform well with a seamless user experience.')
		exampleEmbed.addField('**Prompt:**', 'https://docs.google.com/document/d/1AHdxsoLYMX3mJuT5GpaEYa7EgamvPzbcHN5YxGAc5Tg/edit?usp=sharing')
		exampleEmbed.setTimestamp()

		message.author.send(exampleEmbed);
		message.channel.send('Check your DM, you have been sent a message regarding the Web Development event');


	}
}