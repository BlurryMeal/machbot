const Discord = require('discord.js');
module.exports = {
	name: 'workshop',
	description: "this is a workshop command!",
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed().setTitle('MACH Workshop');
		exampleEmbed.setColor('#6699EE');
        exampleEmbed.setDescription("To help spark your understanding of the wide variety of prospects that you can find at MINET, we will also be conducting a mentoring session where we would have a senior, who is well-versed with their particular field, help clear your understanding. No prior knowledge of any of the departments is required, but the mentoring session can definitely set you on the right path. We hope to see you there!")
		.addField("23rd November ( 3pm - 5:00pm )", "\u200b")
		.addField("Workshop Link:", "https://mach.minet.co/workshop")
        .setThumbnail('https://i.imgur.com/DRdHRSC.png/')
		exampleEmbed.setTimestamp()
		message.author.send(exampleEmbed);
		message.channel.send('Check your DM, you have been sent a message about the workshop.');
	}
}