const Discord = require('discord.js');
module.exports = {
	name: 'gd',
	description: "this is a gd command!",
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed().setTitle('Group Discussion');

		exampleEmbed.setColor('#6699EE');
		exampleEmbed.setDescription('Group Discussion is, in simple terms, an informal debate. The participants will be given a prompt for which they will have to choose a stance that is for/against/neutral and they must prepare and present arguments to justify their stance, impromptu. The participants will be given 5 minutes to prepare arguments. There will be 120 seconds for speaking time followed by one rebuttal question per participant. The rebuttal question must be answered succinctly, within 30 seconds.  \n There will be 3 speaking rounds. The main aim of a GD is to reach a constructive conclusion to the topic. \n There will be negative marking if the time limit is exceeded substantially. \n Judgement Criteria:  \n Structure (5)  \n Context (5) \n Command (5) \n Speech (5)')
		exampleEmbed.setTimestamp()

		message.author.send(exampleEmbed);
		message.channel.send('Check your DM, you have been sent a message regarding the Group Discussion event');


	}
}