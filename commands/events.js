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
				{ name: 'Programming', value: '24th November (4:15 pm - 6:30 pm)', inline: true },
				{ name: 'Design', value: 'Submission: 27th November (9:41 pm)', inline: true },
				{ name: 'Web Development', value: 'Submission: 27th November  9:41 pm)', inline: true },
				{ name: 'Gaming', value: '25th November ( 3 Rounds ) ( 2:30 pm - 8 pm ) \n 26th November ( Valorant 5v5 ) ( 3pm onwards )', inline: true },
				{ name: 'Group Discussion', value: '24th November (6:00 pm - 8:00 pm) and 27th November (6:30 pm - 8:30 pm)', inline: true },
				{ name: 'Quiz', value: '26th November (Timings will be provided later) and 27th November (3:00 pm - 5:00 pm)', inline: true },
				{ name: 'Photography', value: 'Submission:27th November (9:41 pm)', inline: true },
				{ name: 'AV Editing', value: 'Submission: 27th November (9:41 pm) ', inline: true },
			)
			.setTimestamp()
		message.channel.send(exampleEmbed);

	}
}