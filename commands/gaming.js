const Discord = require('discord.js');
module.exports = {
	name: 'gaming',
	description: "this is a gaming command!",
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed().setTitle('Gaming');

		exampleEmbed.setColor('#6699EE');
		exampleEmbed.setDescription("Gaming is the art of playing video game and it requires skills and determination. It isn't as easy at is seems, one needs to have a good hand to eye coordination, reflexes and daily practice to be good at most of the important games available in the market. Participants have to compete against each other in various types of games in order to be a **pro gamer**.")
		.addField('Round 1', 'Fortnite Zone Wars', inline = true)
		.addField('Round 2', 'Fortnite Custom Matchmaking Solo', inline = true)
		.addField('Round 3', 'Valorant Deathmatch', inline = true)
		.addField('Round 4', 'Valorant Mode - 5v5', inline = true)
		exampleEmbed.setTimestamp()

		message.author.send(exampleEmbed);
		message.channel.send('Check your DM, you have been sent a message regarding the Gaming event');

	}
}