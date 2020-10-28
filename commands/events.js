const Discord = require('discord.js');
module.exports = {
	name: 'events',
	description: "this is a events command!",
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Events List')
			.setURL('https://minet.co/events/')
			.setDescription('These are all the events that will take place in MINET MACH.')
			.addFields(
				{ name: 'Programming', value: '4th November ( 10:30 am - 1 pm )', inline: true },
				{ name: 'Design', value: 'Submission: 10th November ( 9:42 Pm )', inline: true },
				{ name: 'Web Development', value: 'Submission: 10th November ( 9:42 Pm )', inline: true },
				{ name: 'Gaming', value: '5th, 7th and 10th ( Timings will be provided later )', inline: true },
				{ name: 'Group Discussion', value: '4th November ( 2:30 pm - 5:00 pm ) and 6th November ( 5:00 pm - 7:00 pm )', inline: true },
				{ name: 'Quiz', value: '5th November ( 3:30 pm - 4:30 pm ) and 6th November ( 3:30 - 4:30 )', inline: true },
				{ name: 'Photography', value: 'Submission: 10th November ( 9:42 Pm )', inline: true },
				{ name: 'AV Editing', value: 'Submission: 10th November ( 9:42 Pm ) ', inline: true },
			)
			.setTimestamp()
		message.channel.send(exampleEmbed);

	}
}