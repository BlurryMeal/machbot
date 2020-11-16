const Discord = require('discord.js');
module.exports = {
	name: 'register',
	description: "this is a register command!",
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed().setTitle('Registrations');
		exampleEmbed.setColor('#6699EE');
        exampleEmbed.setDescription("Registrations are open so head over to the link provided below to register for the events")
        .addField("https://minet.co/mach/register", "\u200b")
        .setThumbnail('https://i.imgur.com/DRdHRSC.png/')
		exampleEmbed.setTimestamp()
		message.channel.send(exampleEmbed);
	}
}