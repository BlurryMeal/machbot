const Discord = require('discord.js');
module.exports = {
	name: 'events',
	description: "this is a events command!",
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Events List')
			.setURL('https://minet.co/mach/events')
			.setDescription('Here are the Dates for all of the events.Timings for all the events will be provided later.')
			.addFields(
				{ name: 'Programming', value: '28th November (9:00am - 11:30am) ', inline: true },
				{ name: 'Design', value: 'Submission: 1st December (9:41 pm)', inline: true },
				{ name: 'Web Development', value: 'Submission: 1st December (9:41 pm) ', inline: true },
				{ name: 'Gaming', value: '28th, 29th and 30th November ( do **.gaming** for timings )', inline: true },
				{ name: 'Group Discussion', value: '29th November (11:30am - 2pm) (6:30pm - 8:30pm)  ', inline: true },
				{ name: 'Quiz', value: '28th November (4:00pm - 5:00pm) and 30th November (4:00pm - 5:30pm)', inline: true },
				{ name: 'Photography', value: 'Submission:1st December (9:41 pm)', inline: true },
				{ name: 'AV Editing', value: 'Submission: 1st December (9:41 pm) ', inline: true },
			)
			.setTimestamp()
		message.channel.send(exampleEmbed);

	}
}