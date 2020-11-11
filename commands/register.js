const Discord = require('discord.js');
module.exports = {
	name: 'register',
	description: "this is a register command!",
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed().setTitle('Registrations');
		exampleEmbed.setColor('#6699EE');
        exampleEmbed.setDescription("Registrations for MACH will be open after the workshop on 17th November")
        .addField("https://minet.co/mach/register", "\u200b")
        .setThumbnail('https://i.imgur.com/DRdHRSC.png/')
		exampleEmbed.setTimestamp()
		message.channel.send(exampleEmbed);
	}
}