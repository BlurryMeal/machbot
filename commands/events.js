const Discord = require('discord.js');
module.exports = {
	name: 'events',
	description: "this is a events command!",
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Events List')
			.setURL('https://minet.co/mach/events')
			.setDescription('These are all the events that will take place in MINET MACH.')
			.addFields(
				{ name: 'Programming', value: '23rd November ( 2:30 pm - 5:00 pm )', inline: true },
				{ name: 'Design', value: 'Submission: 25th November ( 9:41 pm )', inline: true },
				{ name: 'Web Development', value: 'Submission: 25th November ( 9:41 pm )', inline: true },
				{ name: 'Gaming', value: '20th and 21st ( Timings will be provided later )', inline: true },
				{ name: 'Group Discussion', value: '23rd November ( 6:00 pm - 8:00 pm ) and 24th November ( 5:30 pm - 7:30 pm )', inline: true },
				{ name: 'Quiz', value: '23rd November ( 5:15 pm - 5:45 pm ) and 24th November ( 3:00 pm - 5:00 pm )', inline: true },
				{ name: 'Photography', value: 'Submission:25th November ( 9:41 pm )', inline: true },
				{ name: 'AV Editing', value: 'Submission: 25th November ( 9:41 pm ) ', inline: true },
			)
			.setTimestamp()
		message.channel.send(exampleEmbed);

	}
}