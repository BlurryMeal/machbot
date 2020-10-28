const Discord = require('discord.js');
module.exports = {
	name: 'quiz',
	description: "this is a quiz command!",
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed().setTitle('Quiz');

		exampleEmbed.setColor('#6699EE');
		exampleEmbed.setDescription("Quiz isn't as simple as it looks: It isn't just answering questions. Instead, it is a complex mixture of multiple themes, such as image questions, riddles, match questions and many more. Quiz is more of a test on your resourcefulness and our ability to work out answers through clues in the text. Good Luck!")
		exampleEmbed.setTimestamp()

		message.author.send(exampleEmbed);
		message.channel.send('Check your DM, you have been sent a message regarding the Quiz event');


	}
}