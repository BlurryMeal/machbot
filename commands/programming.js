const Discord = require('discord.js');
module.exports = {
	name: 'programming',
	description: "this is a programming command!",
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed().setTitle('Programming');

		exampleEmbed.setColor('#6699EE');
		exampleEmbed.setDescription('Seemingly complex, programming is one of the most elementary skills to have. Fully based on logic applied to real life scenarios, you will be given different problems to work your way out of, by writing a program. Apart from the format of the question (which will be specified with input and output formats), the question will be a simple relation of math and logic. Work that out and put into the required syntax and there you have it!')
		.addField('Info:', "https://docs.google.com/document/d/1SAyLGAaPkm9O6h5TFF22zBO89_eqPT5lyLES5ji3OVk/edit?usp=sharing")
		exampleEmbed.setTimestamp()

		message.author.send(exampleEmbed);
		message.channel.send('Check your DM, you have been sent a message regarding the Programming event');


	}
}