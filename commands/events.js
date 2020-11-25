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
				{ name: 'Programming', value: '28th November ', inline: true },
				{ name: 'Design', value: 'Submission: 1st December (9:41 pm)', inline: true },
				{ name: 'Web Development', value: 'Submission: 1st December (9:41 pm) ', inline: true },
				{ name: 'Gaming', value: '28th November (Valorant Deathmatch) \n 30th November (3 Rounds)', inline: true },
				{ name: 'Group Discussion', value: '29th November', inline: true },
				{ name: 'Quiz', value: '28th November and 30th November', inline: true },
				{ name: 'Photography', value: 'Submission:1st December (9:41 pm)', inline: true },
				{ name: 'AV Editing', value: 'Submission: 1st December (9:41 pm) ', inline: true },
			)
			.setTimestamp()
		message.channel.send(exampleEmbed);

	}
}