const Discord = require('discord.js');
module.exports = {
	name: 'mach',
	description: "this is a minet command!",
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed().setTitle('MACH');
		exampleEmbed.setColor('#6699EE');
		exampleEmbed.setDescription("Mach will test your skills, knowledge and determination to the bone, by putting participants to the test in a head-to-head combat. Any student from classes 7 to 11 is eligible to participate in the events - Programming, Design, Quiz, Web Development, Gaming, Group Discussion, Audio-Visual Editing and Photography. MINET seeks to prune out the best in every category and Mach could be your doorway to join MINET.")
		exampleEmbed.setTimestamp()
		message.author.send(exampleEmbed);
		message.channel.send('Check your DM, you have been sent a message explaing what MACH is.');
	}
}