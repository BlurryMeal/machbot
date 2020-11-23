const Discord = require('discord.js');
module.exports = {
	name: 'cautiousness',
	description: "this is a cautiousness command!",
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed().setTitle('Registrations');
		exampleEmbed.setColor('#6699EE');
        exampleEmbed.setDescription("Registrations are open so head over to the link provided below to register for the events")
        .addField("https://mach.minet.co/register", "\u200b")
        .setThumbnail('https://i.imgur.com/DRdHRSC.png/')
		exampleEmbed.setTimestamp()
		message.channel.send(exampleEmbed);
	}
}